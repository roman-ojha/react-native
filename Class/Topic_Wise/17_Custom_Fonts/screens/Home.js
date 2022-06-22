import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  titleText: {
    fontFamily: 'Nunito SemiBold',
    // now here we can use those font like this
    fontSize: 30,
  },
});

export default Home;
