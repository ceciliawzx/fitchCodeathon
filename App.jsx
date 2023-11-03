import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventList from './EventList';
import { EventDetail } from './EventDetail';
import { TicketDetailPage } from './TicketDetail';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { PayPal } from './Paypal';
import React, { useEffect } from 'react';
import * as Linking from 'expo-linking';
import { NavigationContainer, useNavigation, handleDeepLink } from '@react-navigation/native';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'; 


const Stack = createNativeStackNavigator();

export default function App() {
  const navigationRef = React.useRef(null);

  const prefix = Linking.createURL("fitchcode://");

  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        EventDetail: 'paypal/return',
        // ... any other route mappings
      },
    },
  };
  

  useEffect(() => {
    const handleDeepLink = (event) => {
      console.log("inside handle deep link, event ", event);
      let data = Linking.parse(event.url);
      if (data.path && navigationRef.current) {
        // Use the ref to navigate to the correct screen
        navigationRef.current.navigate('EventDetail', {
          // paymentId: data.queryParams.paymentId,
          // payerId: data.queryParams.PayerID,
          event: data.queryParams.event
        });
      }
    };

    Linking.addEventListener('url', handleDeepLink);

    return () => {
      Linking.removeEventListener('url', handleDeepLink);
    };
  }, []);



  return (
      <NavigationContainer linking={linking} ref={navigationRef} >
        <SafeAreaView style={styles.container}>
          <StatusBar style='auto' />
        </SafeAreaView>
        <Stack.Navigator initialRouteName='EventList' >
          <Stack.Screen name='EventList' component={EventList} />
          <Stack.Screen name='EventDetail' component={EventDetail} />
          <Stack.Screen name='TicketDetail' component={TicketDetailPage} />
          <Stack.Screen name="PayPal" component={PayPal} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  eventItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  eventImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 16,
  },
  eventInfo: {
    flex: 1,
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  eventDate: {
    fontSize: 14,
    color: '#888',
  },
});
