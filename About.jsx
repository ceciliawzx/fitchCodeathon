import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Linking,
  ScrollView,
} from 'react-native';
import backgroundImage from './assets/pic.jpg';
import { FloatingButton } from './util';


export function About() {
  return (
    <SafeAreaView style={styles.container}>
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
      <View style={{ height: 70, backgroundColor: 'transparent' }} />
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
  },
  scrollView: {
    flex: 1,
  },
  headerImage: {
    justifyContent: 'center',
  },
  headerOverlay: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    height: 300,
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 48,
    textAlign: 'center',
    paddingHorizontal: 10, 
    fontWeight: 'bold',
  },
  charityDescription: {
    padding: 15,
    fontSize: 18,
    color: '#212529',
    textAlign: 'justify', 
  },
  Slogan: {
    padding: 15,
    fontSize: 18,
    color: '#212529',
    textAlign: 'justify', 
  },
  buttonText: {
    color: 'white', 
    fontSize: 18,
    fontWeight: 'bold',
  },
});