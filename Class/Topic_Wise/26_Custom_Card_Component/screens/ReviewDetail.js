import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../shared/Card';

const ReviewDetail = ({route, navigation}) => {
  const {title, rating, body, key} = route.params;
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text style={globalStyles.titleText}>{body}</Text>
        <Text style={globalStyles.titleText}>{rating}</Text>
      </Card>
    </View>
  );
};

export default ReviewDetail;
