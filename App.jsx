import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventList from './EventList';
import { EventDetail } from './EventDetail';
import { TicketDetailPage } from './TicketDetail';
import { About } from './About';
import Icon from 'react-native-vector-icons/Ionicons';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { PayPal } from './Paypal';
import React, { useEffect } from 'react';
import * as Linking from 'expo-linking';
import {
  NavigationContainer,
  useNavigation,
  handleDeepLink,
} from '@react-navigation/native';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // Here's where you set your icon based on the route name and focused state
          if (route.name === 'Events') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'About') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }

          // Return the icon component
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name='Events'
        component={StackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen name='About' component={About} />
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={EventList} />
      <Stack.Screen name='EventDetail' component={EventDetail} />
      <Stack.Screen name='TicketDetail' component={TicketDetailPage} />
      <Stack.Screen name='PayPal' component={PayPal} />
    </Stack.Navigator>
  );
}

export default function App() {
  const navigationRef = React.useRef(null);

  const prefix = Linking.createURL('fitchcode://');

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
      console.log('inside handle deep link, event ', event);
      let data = Linking.parse(event.url);
      if (data.path && navigationRef.current) {
        // Use the ref to navigate to the correct screen
        navigationRef.current.navigate('EventDetail', {
          // paymentId: data.queryParams.paymentId,
          // payerId: data.queryParams.PayerID,
          event: data.queryParams.event,
        });
      }
    };

    Linking.addEventListener('url', handleDeepLink);

    return () => {
      Linking.removeEventListener('url', handleDeepLink);
    };
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaView>
        <StatusBar style='auto' />
      </SafeAreaView>
      <TabNavigator></TabNavigator>
      {/* <PayPalScriptProvider options={{ 'client-id': CLIENT_ID }} /> */}
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
    width: 90,
    height: 90,
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
