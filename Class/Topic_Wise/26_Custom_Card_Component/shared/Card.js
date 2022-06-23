import React from 'react';
import {StyleSheet, View} from 'react-native';

const Card = props => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        {/* rather passing string value of data value as props we will pass component as props and put it inside the card */}
        {props.children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
});

export default Card;
