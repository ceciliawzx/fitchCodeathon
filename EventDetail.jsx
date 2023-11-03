import React from 'react';
import { format } from "date-fns";
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
  const timeformat = "EEEE, LLLL dd, yyyy    HH:mm"
  const route = useRoute();
  const { event } = route.params;

  const dateImg = require('./assets/date-icon.jpg');
  const locImg = require('./assets/loc-icon.jpg');
  const descripImg = require('./assets/description.png');

  const navigation = useNavigation();

  const handleRegisterClicked = () => {
    // Navigate to the EventDetail screen with the selectedEvent
    navigation.navigate('Ticket Detail', { event: event });
  };

  // if no image uploaded, use default image
  const default_image = "http://34.201.135.72/wp-content/uploads/2023/11/charity-team-building-e1651509883636.png"
  const renderedContent = event.content.rendered;
  const match = renderedContent.match(/src="([^"]+)"/);
  const imagePath = match ? match[1] : default_image;

  return (
    <>
      <View style={stylesDetails.containerEvent}>
        <ScrollView
          contentContainerStyle={{
            display: 'flex',
            alignContent: 'center',
          }}
        >
          <Image style={stylesDetails.eventImage} source={{ uri: imagePath }} />
          <View
            style={{ display: 'flex', flexDirection: 'column', marginLeft: 25 }}
          >
            <Text style={stylesDetails.bigEventName}>{event.acf.name}</Text>
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
                {/* TODO: parse date and time */}
                <Text style={stylesDetails.eventTime}>{format (new Date(event.acf.starttime), timeformat)}</Text>
                <Text style={stylesDetails.eventTimeSmall}>{"to"}</Text>
                <Text style={stylesDetails.eventTime}>{format (new Date(event.acf.endtime), timeformat)}</Text>
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
                <Text style={stylesDetails.eventTime}>{event.acf.location}</Text>
                <Text style={stylesDetails.eventTimeSmall}>{event.acf.location}</Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: 30,
              }}
            >
              <Image source={descripImg} style={stylesDetails.icon} />
              <View
                style={{ display: 'flex', flexDirection: 'column', rowGap: 4 }}
              >
                <Text style={stylesDetails.eventTime}>{"Description"}</Text>
                <Text style={stylesDetails.eventTimeSmall}>{event.acf.description}</Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View lowerSectionStyle={{
            display: 'flex',
            alignContent: 'center',
            height: '10%',
          }}>
          <FloatingButton text="Register" handleClick={handleRegisterClicked} />
        </View>
      </View>
    </>
  );
};

const Ticket = (ticket) => {
  return <></>;
};

const stylesDetails = StyleSheet.create({
  containerEvent: {
    flex: 1,
    flexDirection: 'column',
  },
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
    textAlig: 'lef',
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
