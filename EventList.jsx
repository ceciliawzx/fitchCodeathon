import React, {useEffect, useState} from 'react';
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
    name: 'This is Event 1!!!',
    date: 'October 10, 2023',
    location: 'London',
    description: 'this is an event',
    tickets: [
      {
        type: 1,
        price: 5.5,
        currency: 'GBP',
      },
      {
        type: 2,
        price: 10,
        currency: 'GBP',
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
        currency: 'GBP',
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
        currency: 'GBP',
      },
    ],
    image: require('./assets/project-bg.png'),
  },
  // Add more events as needed
];

const EventList = () => {
  let [error, setError] = useState()
  let [response, setResponse] = useState()

  useEffect(() => {
    fetch("http://34.201.135.72/?rest_route=/wp/v2/normalevent")
      .then(res => res.json())
      .then(
        (result) => {
          setResponse(result)
        },
        (error) => {
          setError(error)
        }
      )
  }, []);

  console.log(response)

  const navigation = useNavigation();

  const handleEventPress = (eventItem) => {
    // Navigate to the EventDetail screen with the selectedEvent
    navigation.navigate('EventDetail', { event: eventItem });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleEventPress(item)}>
      <SafeAreaView style={styles.eventItem}>
        <Image style={styles.eventImage} source={item.image} />
        <View>
          <Text style={styles.eventName}>{item.name}</Text>
          <Text style={styles.eventDate}>{item.date}</Text>
          <Text style={styles.eventDate}>{item.location}</Text>
        </View>
      </SafeAreaView>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={response}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  // eventItem: {
  //   flexDirection: 'row',
  //   padding: 16,
  //   shadowRadius: 2,
  //   shadowColor: '#000'
  // },
  eventItem: {
    height: 120,
    flexDirection: 'row',
    backgroundColor: '#fff', // Set a background color for the shadow to be visible
    borderRadius: 8, // Optional: if you want rounded corners
    shadowOpacity: 0.1, // Shadow visibility
    shadowRadius: 5, // How blurred the shadow should be
    shadowColor: '#000', // Shadow color
    shadowOffset: { height: 3, width: 0 }, // Shadow position
    elevation: 3, // Elevation for Android
    marginTop: 20,
    marginLeft: 10, // Optional: if you want some space from the left edge of the screen
    marginRight: 10, // Optional: if you want some space from the right edge of the screen
    alignItems: 'center',
  },
  eventImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
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
