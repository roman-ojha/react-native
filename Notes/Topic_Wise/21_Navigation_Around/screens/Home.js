import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {globalStyles} from '../../../styles/global';

const Home = ({navigation}) => {
  const pressHandler = () => {
    // when we configure our navigation stack in 'homeStack.js' every screen we configure get automatically navigation property on the props assign to it
    // props.navigation.navigate();

    // navigate method:
    navigation.navigate('ReviewDetail');

    // push method
    // navigation.push('ReviewDetail');
    // some time for the complex application we have to manually push and pop the screen from the application
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title="go to review dets" onPress={pressHandler} />
    </View>
  );
};

export default Home;
