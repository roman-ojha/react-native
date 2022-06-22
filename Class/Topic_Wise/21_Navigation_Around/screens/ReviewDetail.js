import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {globalStyles} from '../../../styles/global';

const ReviewDetail = ({navigation}) => {
  const pressHandler = () => {
    navigation.goBack();
    // 'goBack' method will pop this screen from the navigation stack and show the screen which is now at the top of the stack
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>ReviewDetail Screen</Text>
      <Button title="back to home screen" onPress={pressHandler} />
    </View>
  );
};

export default ReviewDetail;
