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
          {/* now here import the image that we have added in assets folder */}
          {/* <Image source={require(`../../../assets/rating-1.png`)} /> */}
          {/* here we can see that rather then using conditional randering for getting specific star image it is much better to use like this: `rating-${rating}.png` But, because require doesn't support string concatenation */}
          {/* So to solve that problem what we can do is we can define all of our dynamic images somewhere else and use require for each individual image and in this dynamically use one of those require statement */}
          {/* So we will do that inside './global/global.js' file */}
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
