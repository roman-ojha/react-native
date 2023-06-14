import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../shared/Card';
import {globalImages} from '../global/globalImages';

const ReviewDetail = ({route, navigation}) => {
  const {title, rating, body, key} = route.params;
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text style={globalStyles.titleText}>{body}</Text>
        <View style={styles.rating}>
          <Text style={globalStyles.titleText}>GameZone rating:</Text>
          <Image source={globalImages.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});

export default ReviewDetail;
