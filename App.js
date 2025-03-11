import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const commonTextStyle = {
  fontSize: 16,
  fontWeight: 'bold',
  color: 'black',
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mohit Gokul Murali</Text>
      <Text style={styles.subHeader}>Software Engineer {'\n\n'}</Text>
      <Text style={styles.course}>Student: MSCS-533-B01{'\n\n'}</Text>
      <Text style={styles.education}>
        Education: {'\n'}
        B.S. in Computer Science{'\n'}
        University of Buffalo (Buffalo, NY) {'\n\n'}
      </Text>
      <View style={styles.bioContainer}>
        <Text style={styles.bio}>
          WELCOME TO THE UNIVERSITY of the {'\n'} CUMBERLANDS{'\n'}
          Course ID: MSCS 533 {'\n\n'}
        </Text>
        <Image source={require('./assets/mohit.jpeg')} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e60026', // Background color
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    ...commonTextStyle,
    textAlign: 'center',
  },
  subHeader: {
    ...commonTextStyle,
    marginTop: 5,
  },
  course: {
    ...commonTextStyle,
    marginTop: 5,
  },
  education: {
    ...commonTextStyle,
    marginTop: 10,
    textAlign: 'center',
  },
  bioContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    width: '100%',// Ensures full width
    alignSelf: 'stretch', // Fixes edge gaps on iOS
  },
  bio: {
    fontSize: 12, // Reduced font size
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  image: {
    width: 120, // Square shape
    height: 120,
    marginTop: 10,
  },
});
