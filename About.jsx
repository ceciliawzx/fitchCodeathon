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
  SafeAreaView,
  ImageBackground,
  Button,
  Linking
} from 'react-native';
import backgroundImage from './assets/pic.jpg';
import { useRoute, useNavigation } from '@react-navigation/native';
import { FloatingButton } from './util';


export const About = () => {

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={backgroundImage}
        style={styles.headerImage}
      >
        <View style={styles.headerOverlay}>
          <Text style={styles.headerTitle}>Friends of Bulgaria</Text>
        </View>
      </ImageBackground>
      <Text style={styles.charityDescription}>
      Friends of Bulgaria focusses on the wellbeing of children growing up without parents or family in institutional care. Funds are allocated to NGO (non-governmental organisations) partners responding to local initiatives for improving the quality of life of children in care living isolated, routine-bound existences, often lacking in stability being housed in centres undergoing fundamental change in the process of de-institutionalisation.
      </Text>

      <Text style={styles.Slogan}>
        Go to our Website to learn more about us and join our events today!
      </Text>
      <TouchableOpacity style={styles.customButton} onPress={() => Linking.openURL('https://friendsofbulgaria.org.uk/')}>
        <Text style={styles.buttonText}>Visit Website</Text>
      </TouchableOpacity>
    </SafeAreaView>
    
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  headerImage: {
    flex: 0.9, // Takes 50% of the page height
    justifyContent: 'center', // Centers the title vertically
  },
  headerOverlay: {
    backgroundColor: 'rgba(0,0,0,0.3)', // 30% opacity overlay
    flex: 1, 
    justifyContent: 'center', // Centers the title vertically
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 10, 
  },
  charityDescription: {
    padding: 15,
    fontSize: 18,
    color: '#212529',
    textAlign: 'justify', 
    fontFamily: 'Cochin'
  },
  Slogan: {
    padding: 15,
    fontSize: 18,
    color: '#212529',
    textAlign: 'justify', 
    fontFamily: 'Cochin'
  },
  customButton: {
    alignSelf:'center',
    width: 300,
    backgroundColor: '#00ab41', // Desired background color
    padding: 10,
    borderRadius: 20, // This gives the rounded corners
    alignItems: 'center',
    
},
buttonText: {
    color: 'white', 
    fontSize: 18,
    fontWeight: 'bold',
},
  //... other styles (updateItem, updateImage, updateContent, etc.)
});