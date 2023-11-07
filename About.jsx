import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Linking,
  ScrollView
} from 'react-native';
import backgroundImage from './assets/pic.jpg';
import { FloatingButton } from './util';

export function About() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Use ScrollView for the scrollable content */}
      <ScrollView style={styles.scrollView}>
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
        {/* Additional content here */}
      </ScrollView>
      <FloatingButton 
        text='Visit Website'
        handleClick={() => Linking.openURL('https://friendsofbulgaria.org.uk/')}
        disabled={false}
      />  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  headerImage: {
    flex: 0.8, // Takes 50% of the page height
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
    fontFamily: 'Cochin',
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
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    position: 'absolute',
    bottom: 20, // Distance from the bottom
    left: '50%', // Set to 50% of the container width
    transform: [{ translateX: -150 }], // Translate back by half the width of the button
    height: 50,
    borderRadius: 35, 
    alignSelf:'center',
    width: 300,
    backgroundColor: '#00ab41', // Desired background color
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
      color: 'white', 
      fontSize: 18,
      fontWeight: 'bold',
  },
});