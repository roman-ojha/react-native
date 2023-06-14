import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {globalStyles} from '../styles/global';

const ReviewDetail = ({route, navigation}) => {
  // now here after navigating through the 'Home' screen we will get the review item data back here in this component using 'route' param
  // get item using route:
  const {title, rating, body, key} = route.params;
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{title}</Text>
      <Text style={globalStyles.titleText}>{body}</Text>
      <Text style={globalStyles.titleText}>{rating}</Text>
    </View>
  );
};

export default ReviewDetail;
