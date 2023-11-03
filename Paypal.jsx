// // import React from 'react';
// // import { requestOneTimePayment, requestBillingAgreement } from 'react-native-paypal';

// const paypal = require('@paypal/checkout-server-sdk');

// function environment() {
//   let clientId = process.env.PAYPAL_CLIENT_ID;
//   let clientSecret = process.env.PAYPAL_CLIENT_SECRET;

//   return new paypal.core.SandboxEnvironment(clientId, clientSecret);
// }

// function client() {
//   return new paypal.core.PayPalHttpClient(environment());
// }

// // For one time payments
// const {
// 	nonce,
// 	payerId,
// 	email,
// 	firstName,
// 	lastName,
// 	phone
// } = await requestOneTimePayment(
//   token,
//   {
//     amount: '5', // required
//     // any PayPal supported currency (see here: https://developer.paypal.com/docs/integration/direct/rest/currency-codes/#paypal-account-payments)
//     currency: 'GBP',
//     // any PayPal supported locale (see here: https://braintree.github.io/braintree_ios/Classes/BTPayPalRequest.html#/c:objc(cs)BTPayPalRequest(py)localeCode)
//     localeCode: 'en_GB',
//     shippingAddressRequired: false,
//     userAction: 'commit', // display 'Pay Now' on the PayPal review page
//     // one of 'authorize', 'sale', 'order'. defaults to 'authorize'. see details here: https://developer.paypal.com/docs/api/payments/v1/#payment-create-request-body
//     intent: 'authorize',
//   }
// );

// // For vaulting paypal account see: https://developers.braintreepayments.com/guides/paypal/vault
// // const {
// // 	nonce,
// // 	payerId,
// // 	email,
// // 	firstName,
// // 	lastName,
// // 	phone
// // } = await requestBillingAgreement(
// //   token,
// //   {
// //     billingAgreementDescription: 'Your agreement description', // required
// //     // any PayPal supported currency (see here: https://developer.paypal.com/docs/integration/direct/rest/currency-codes/#paypal-account-payments)
// //     currency: 'GBP',
// //     // any PayPal supported locale (see here: https://braintree.github.io/braintree_ios/Classes/BTPayPalRequest.html#/c:objc(cs)BTPayPalRequest(py)localeCode)
// //     localeCode: 'en_GB',
// //   }
// // );

// // For device data collection see: https://developers.braintreepayments.com/guides/advanced-fraud-management-tools/device-data-collection/
// const { deviceData } = await requestDeviceData(token);

import React, { Component, useState } from 'react';
import { View, Text, ActivitityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

export class PayPal extends Component {

    state = {
        accessToken: null,
        approvalUrl: null,
        paymentId: null,
    };


    componentDidMount() {
        const dataDetail = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal",
            },
            "transactions": [{
                "amount": {
                    "total": "0.01",
                    "currency": "USD",
                    "details": {
                        "subtotal": "0.01",
                        "tax": "0",
                        "shipping": "0",
                        "handling_fee": "0",
                        "shipping_discount": "0",
                        "insurance": "0"
                    },
                },
            }
            ],
            "redirect_urls": {
                "return_url": "https://www.example.com",
                "cancel_url": "https://www.example.com",
            },
        }


        fetch("https://api.sandbox.paypal.com/v1/oauth2/token", 
          {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer A21AAIsPOcokWll8BNkHxyPCS7V7UNqZ_JJ_E7aKMpSQezpTfCIu8vLcmjIj5oRE-gk5nx2Jf7mPy1RMvF6gSl3tkK7khe0RA' // TODO
            },
            body: 'grant_type=client_credentials',
          }
        )
        .then(res => res.json())
        .then(response=> {
            console.log("response====", response);
            this.setState({
                accessToken: response.access_token,
            })

            fetch("https://api.sandbox.paypal.com/v1/payments/payment",
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${response.access_token}`,
                    },
                    body: JSON.stringify(dataDetail),
                }
            )
            .then(res => res.json())
            .then(response => {
                console.log("response: ", response);
                const {id, links} = response;
                const approvalUrl = links.find(data => data.rel=== "approval_url");
                console.log("approvalUrl", approvalUrl, "id", id);
                this.setState({
                    paymentId: id,
                    approvalUrl: approvalUrl.href,
                });
            }).catch(err => {
                console.log({...err});
            })
        }).catch(err => {
            console.log({...err});
        })
    }

    // _onNavigationStateChange = (webViewState) => {
    //     console.log("webViewState===", webViewState);
    //     // TOOD
    //     // if (webViewState.url.includes("https://www.example.com")) {
    //     //     this.setState({
    //     //         approveUrl: null,
    //     //     })
    //     // }
    //     const {PayerId, paymentId } = webViewState.url;

    //     fetch(`https://api.sandbox.paypal.com/v1/payments/payment/${paymentId}/execute`, {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             payer_id: PayerId,
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${this.state.accessToken}`
    //         }
    //     })
    //       .then(res => res.json())
    //       .then(response => {
    //         console.log("error log: ", response, "ensure id", paymentId);
    //         if (response.name === "INVALID_RESOURCE_ID") {
    //             alert("Payment failed. Please try again!");
    //             this.setState({
    //                 approveUrl: null
    //             });
    //             this.props.navigation.pop();
    //         }
    //       }).catch(err => {
    //         console.log("wth error", err);

    //       })

    // }

    // _onNavigationStateChange = (webViewState) => {
    //     console.log("webViewState===", webViewState);
    //     const url = new URL(webViewState.url);
    //     const payerId = url.searchParams.get('PayerID'); // Make sure the parameter name matches the one used by PayPal
    //     const token = url.searchParams.get('token'); // PayPal uses 'token', not 'paymentId'
    
    //     if (payerId && token) {
    //         this.executePayment(token, payerId);
    //     }
    // };
    _onNavigationStateChange = (webViewState) => {
        console.log("webViewState===", webViewState);
        const { url } = webViewState;
        const queryString = url.split('?')[1];
        
        if (queryString) {
            const params = queryString.split('&').reduce((accumulator, current) => {
                const [key, value] = current.split('=');
                accumulator[key] = decodeURIComponent(value);
                return accumulator;
            }, {});
    
            const payerId = params['PayerID'];
            const token = params['token'];
    
            if (payerId && token) {
                this.executePayment(token, payerId);
            }
        }
    };
    
    executePayment = (paymentToken, payerId) => {
        fetch(`https://api.sandbox.paypal.com/v1/payments/payment/${paymentToken}/execute`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.state.accessToken}`
            },
            body: JSON.stringify({ payer_id: payerId }),
        })
        .then(res => res.json())
        .then(response => {
            console.log("Payment executed: ", response);
            // Handle the response
        })
        .catch(err => {
            console.error("Error executing payment: ", err);
        });
    };
    


    render() {
        const {approvalUrl} = this.state;
        return (
            <View style={{flex: 1}}>
                {
                    approvalUrl ? <WebView 
                        style={{height: '100%', width: '100%', marginTop: 40 }}
                        source={{uri: approvalUrl}}
                        onNavigationStateChange= {this._onNavigationStateChange}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        startInLoadingState={true}
                    /> :
                    <View>
                        <Text>
                            Do not press back or refresh page
                        </Text>
                    </View>

                }
            </View>

        );
    }

}