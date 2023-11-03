import React, {useEffect, useState, useCallback} from 'react';
import { format } from "date-fns";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  RefreshControl,
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
  // fetch data when refreshing
  const [refreshing, setRefreshing] = useState(false);
  const [response, setResponse] = useState(null);

  const fetchData = async () => {

    try {
      const response = await fetch("http://34.201.135.72/?rest_route=/wp/v2/normalevent");
      const result = await response.json();
      setResponse(result);
    } catch (error) {
      setError(error);
    } finally {
      setRefreshing(false);
    }
  };

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
  }, []);

  // handle data fetching when launch
  useEffect(() => {
    fetchData();
  }, []);

  const navigation = useNavigation();

  const timeformat = "dd-MM-yyyy    HH:mma"
  
  const handleEventPress = (eventItem) => {
    // Navigate to the EventDetail screen with the selectedEvent
    navigation.navigate('EventDetail', { event: eventItem });
  };

  const renderItem = ({ item }) => {

    // if no image uploaded, use default image
    const default_image = "http://34.201.135.72/wp-content/uploads/2023/11/charity-team-building-e1651509883636.png"
    const renderedContent = item.content.rendered;
    const match = renderedContent.match(/src="([^"]+)"/);
    const imagePath = match ? match[1] : default_image;

    return (
    <>
    <TouchableWithoutFeedback onPress={() => handleEventPress(item)}>
      <SafeAreaView style={styles.eventItem}>
        <Image style={styles.eventImage} source={{ uri: imagePath }} />
        <View>
          <Text style={styles.eventName}>{item.acf.name}</Text>
          <Text style={styles.eventDate}>{format(new Date(item.acf.starttime), timeformat)}</Text>
          <Text style={styles.eventDate}>{item.acf.location}</Text>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback >
    </>
    )

  };

  return (
    <>

    <FlatList
      data={response}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
      renderItem={renderItem}
      keyExtractor={(item) => item.id
      }
    />
    </>
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

  aboutButton: {
    height: 360,
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
  }
});

export default EventList;
