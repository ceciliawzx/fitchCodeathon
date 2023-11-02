import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const eventsData = [
  {
    id: '1',
    name: 'Event 1',
    date: 'October 10, 2023',
    location: 'London',
    description: 'this is an event',
    tickets: [
      {
        type: 1,
        price: 5.5,
        currency: "GBP",
      },
      {
        type: 2,
        price: 10,
        currency: "GBP",
      },
    ],
    image: require('./assets/contact-bg.png'),
  },
  {
    id: '2',
    name: 'Event 2',
    date: 'November 15, 2023',
    location: 'London',
    description: '',
    tickets: [
      {
        type: 3,
        price: 5,
        currency: "GBP",
      },
    ],
    image: require('./assets/home-bg.png'),
  },
  {
    id: '3',
    name: 'Event 3',
    date: 'December 5, 2023',
    location: 'Cambridge',
    description: '',
    tickets: [
      {
        type: 1,
        price: 8,
        currency: "GBP",
      },
    ],
    image: require('./assets/project-bg.png'),
  },
  // Add more events as needed
];

const EventList = () => {
  const navigation = useNavigation();

  const handleEventPress = (eventItem) => {
    // Navigate to the EventDetail screen with the selectedEvent
    navigation.navigate('EventDetail', { event: eventItem });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleEventPress(item)}>
      <SafeAreaView style={styles.eventItem}>
        <Image style={styles.eventImage} source={item.image} />
        <Text style={styles.eventName}>{item.name}</Text>
        <Text style={styles.eventDate}>{item.date}</Text>
      </SafeAreaView>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={eventsData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

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

export default EventList;
