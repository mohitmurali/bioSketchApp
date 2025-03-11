import React from 'react';
import { Text, View, Image } from 'react-native';

// The code below will display my BioSketch @ UC, and it's amazing!!!!!
export default function AssetExample() {
  return (
    <View style={{ alignItems: 'center', padding: 10, width: '100%', alignSelf: 'stretch', backgroundColor: 'white' }}>
      <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black', textAlign: 'center' }}>
        WELCOME TO THE UNIVERSITY of the CUMBERLANDS{'\n'}
        Course ID: MSCS 533{'\n\n'} {/* Added line space here */}
      </Text>
      <Image source={require('../assets/mohit.jpeg')} style={{ width: 120, height: 120, marginTop: 10 }} />
    </View>
  );
}

