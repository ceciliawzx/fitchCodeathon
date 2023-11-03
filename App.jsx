import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventList from './EventList';
import { EventDetail } from './EventDetail';
import { TicketDetailPage } from './TicketDetail';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { PayPal } from './Paypal';


const CLIENT_ID =
  'Afl6QPkcTJaNm_WXsDvRvaPGVmajl0sKeWf47NNSR0bJUx49nMoHnsyZ81_0ccpGheEm_ah9en66575M';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <SafeAreaView>
          <StatusBar style="auto" />
        </SafeAreaView>
        <Stack.Navigator initialRouteName='Event List'>
          <Stack.Screen name='Event List' component={EventList}/>
          <Stack.Screen name='Event Detail' component={EventDetail} />
          <Stack.Screen name='Ticket Detail' component={TicketDetailPage} />
          <Stack.Screen name="PayPal" component={PayPal} />
        </Stack.Navigator>
        {/* <PayPalScriptProvider options={{ 'client-id': CLIENT_ID }} /> */}
      </NavigationContainer>
    </>
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
