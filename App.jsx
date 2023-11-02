import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventList from './EventList';
import { EventDetail } from './EventDetail';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <StatusBar style='auto' />
        </SafeAreaView>

        <Stack.Navigator initialRouteName='EventList'>
          <Stack.Screen name='EventList' component={EventList} />
          <Stack.Screen name='EventDetail' component={EventDetail} />
        </Stack.Navigator>
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
