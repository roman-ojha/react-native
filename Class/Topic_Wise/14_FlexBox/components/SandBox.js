import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SandBox = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.boxOne, styles.text]}>one</Text>
      <Text style={[styles.boxTwo, styles.text]}>two</Text>
      <Text style={[styles.boxThree, styles.text]}>three</Text>
      <Text style={[styles.boxFour, styles.text]}>four</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // NOTE: Out of the box 'View' component use flexbox
    // so it means that if we will use flex = 1 then that component will take the whole scree
    // flex: 1,
    // and another thing is every thing inside flex container now become flex item
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#ddd',
  },
  text: {
    color: 'black',
  },
  boxOne: {
    flex: 1,
    backgroundColor: 'violet',
    padding: 10,
  },
  boxTwo: {
    flex: 4,
    backgroundColor: 'gold',
    padding: 20,
  },
  boxThree: {
    flex: 2,
    backgroundColor: 'coral',
    padding: 30,
  },
  boxFour: {
    flex: 3,
    backgroundColor: 'skyblue',
    padding: 40,
  },
});

export default SandBox;
