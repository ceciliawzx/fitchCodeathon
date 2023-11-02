import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { useRoute } from '@react-navigation/native';


export const EventDetail = () => {

  const route = useRoute();
  const { event } = route.params;

  return (
    <ScrollView style={{ display: 'flex'}}>
      <Image style={styles.eventImage} source={`${event.image}`} />
      <Text style={{ fontSize: 96 }}>{`${event.name}`}</Text>
      <Text style={{ fontSize: 30 }}>{`${event.date}`}</Text>
      <Text style={{ fontSize: 30 }}>{`${event.location}`}</Text>
    </ScrollView>
  );
};

const Ticket = (ticket) => {
  return (
    <></>
  );
}

const styles = {
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
};
