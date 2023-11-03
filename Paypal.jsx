import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { useRoute, useNavigation } from '@react-navigation/native';

export class PayPal extends Component {
  constructor(props) {
    super(props);
    // Assuming you want to store the parameters in the component's state
    this.currency = props.route.params.currency;
    this.totalPrice = props.route.params.totalPrice;
    this.event = props.route.params.event;
    this.navigation = props.route.params.navigation;
  }

  handlePaymentCompletion = () => {
    this.navigation.navigate('EventDetail', {
      event: this.event,
    });
  };

  state = {
    accessToken: null,
    approvalUrl: null,
    paymentId: null,
  };

  componentDidMount() {
    const currency = this.currency;
    const totalPrice = this.totalPrice;

    console.log('currency: ', currency, 'totalPrice: ', totalPrice);

    const dataDetail = {
      intent: 'sale',
      payer: {
        payment_method: 'paypal',
      },
      transactions: [
        {
          amount: {
            total: totalPrice,
            currency: currency,
            details: {
              subtotal: totalPrice,
              tax: '0',
              shipping: '0',
              handling_fee: '0',
              shipping_discount: '0',
              insurance: '0',
            },
          },
        },
      ],
      redirect_urls: {
        return_url: 'fitchcode://paypal/return',
        cancel_url: 'fitchcode://paypal/cancel',
      },
    };

    fetch('https://api.sandbox.paypal.com/v1/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Bearer A21AAIsPOcokWll8BNkHxyPCS7V7UNqZ_JJ_E7aKMpSQezpTfCIu8vLcmjIj5oRE-gk5nx2Jf7mPy1RMvF6gSl3tkK7khe0RA', // TODO
      },
      body: 'grant_type=client_credentials',
    })
      .then((res) => res.json())
      .then((response) => {
        console.log('response====', response);
        this.setState({
          accessToken: response.access_token,
        });

        fetch('https://api.sandbox.paypal.com/v1/payments/payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${response.access_token}`,
          },
          body: JSON.stringify(dataDetail),
        })
          .then((res) => res.json())
          .then((response) => {
            console.log('response: ', response);
            const { id, links } = response;
            const approvalUrl = links.find(
              (data) => data.rel === 'approval_url'
            );
            console.log('approvalUrl', approvalUrl, 'id', id);
            this.setState({
              paymentId: id,
              approvalUrl: approvalUrl.href,
            });
          })
          .catch((err) => {
            console.log({ ...err });
          });
      })
      .catch((err) => {
        console.log({ ...err });
      });
  }

  _onNavigationStateChange = (webViewState) => {
    console.log('webViewState===', webViewState);
    const { url } = webViewState;

    extractParams = (url) => {
      const queryString = url.split('?')[1];
      const params = queryString.split('&').reduce((accumulator, current) => {
        const [key, value] = current.split('=');
        accumulator[key] = decodeURIComponent(value);
        return accumulator;
      }, {});
      return { token: params['token'], payerId: params['PayerID'] };
    };

    if (webViewState.url.includes('paypal/return')) {
      console.log("URL includes 'paypal/return'");
      const { payerId, token } = this.extractParams(webViewState.url);
      this.executePayment(token, payerId).then(() => {
        console.log('here, includes');
        this.navigation.navigate('EventDetail', {
          event: this.event,
        });
      });
    } else if (webViewState.url.includes('paypal/cancel')) {
      console.log("URL includes 'paypal/cancel'");
      this.navigation.navigate('EventDetail', {
        event: this.event,
      });
    } else {
      console.log('URL does not include the expected pattern.');
    }
  };

  executePayment = (paymentToken, payerId) => {
    return fetch(
      // Make sure to return this promise so that you can chain `.then()` afterwards
      `https://api.sandbox.paypal.com/v1/payments/payment/${paymentToken}/execute`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.state.accessToken}`,
        },
        body: JSON.stringify({ payer_id: payerId }),
      }
    )
      .then((res) => res.json())
      .then((response) => {
        console.log('Payment executed: ', response);
        // Handle the response
      })
      .catch((err) => {
        console.error('Error executing payment: ', err);
      });
  };

  render() {
    const { approvalUrl } = this.state;
    return (
      <View style={{ flex: 1 }}>
        {approvalUrl ? (
          <WebView
            style={{ height: '100%', width: '100%', marginTop: 40 }}
            source={{ uri: approvalUrl }}
            onNavigationStateChange={this._onNavigationStateChange}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={true}
          />
        ) : (
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text
              style={{
                color: 'black',
                fontSize: 24,
                alignSelf: 'center',
                marginBottom: 10,
              }}
            >
              Do not press back or refresh page
            </Text>
            <ActivityIndicator
              color={'black'}
              size={'large'}
              style={{
                alignSelf: 'center',
              }}
            />
          </View>
        )}
      </View>
    );
  }
}
