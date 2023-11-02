import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { FloatingButton } from './util';


export const EventDetail = () => {
  const route = useRoute();
  const { event } = route.params;

  const dateImg = require('./assets/date-icon.jpg');
  const locImg = require('./assets/loc-icon.jpg');

  // TODO: parse the date and time string from json data
  const dateStr = 'December 5, 2023';
  const timeStr = '19:00 ~ 21:00';

  const location = 'London';
  const detailLoc = 'Imperial College London';

  const navigation = useNavigation();

  const handleRegisterClicked = () => {
    // Navigate to the EventDetail screen with the selectedEvent
    navigation.navigate('TicketDetail', { event: event });
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          display: 'flex',
          alignContent: 'center',
        }}
      >
        <Image style={stylesDetails.eventImage} source={event.image} />
        <View
          style={{ display: 'flex', flexDirection: 'column', marginLeft: 25 }}
        >
          <Text style={stylesDetails.bigEventName}>{event.name}</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: 30,
            }}
          >
            <Image source={dateImg} style={stylesDetails.icon} />
            {/* <View style={{ display: 'flex', flexDirection: 'column', rowGap: 4 }}> */}
            <View
              style={{ display: 'flex', flexDirection: 'column', rowGap: 4 }}
            >
              <Text style={stylesDetails.eventTime}>{dateStr}</Text>
              <Text style={stylesDetails.eventTimeSmall}>{timeStr}</Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: 30,
            }}
          >
            <Image source={locImg} style={stylesDetails.icon} />
            <View
              style={{ display: 'flex', flexDirection: 'column', rowGap: 4 }}
            >
              <Text style={stylesDetails.eventTime}>{location}</Text>
              <Text style={stylesDetails.eventTimeSmall}>{detailLoc}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <FloatingButton text="Register" handleClick={handleRegisterClicked}/>
    </>
  );
};

const Ticket = (ticket) => {
  return <></>;
};

const stylesDetails = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    marginRight: 20,
    marginBottom: 20,
  },
  bigEventName: {
    fontSize: 35,
    alignContent: 'left',
    marginBottom: 15,
  },
  eventTime: {
    fontSize: 15,
    alignContent: 'left',
  },
  eventTimeSmall: {
    fontSize: 13,
    alignContent: 'left',
    color: '#888',
  },
  eventImage: {
    // width: '90%',
    // height: 200,
    // borderRadius: 20,
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
});
