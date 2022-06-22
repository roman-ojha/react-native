import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

// -> https://reactnative.dev/docs/textinput

const App = () => {
  // const [people, setPeople] = useState([
  //   {name: 'shaun', key: '1'},
  //   {name: 'yoshi', key: '2'},
  //   {name: 'mario', key: '3'},
  //   {name: 'luigi', key: '4'},
  //   {name: 'peach', key: '5'},
  //   {name: 'toad', key: '6'},
  //   {name: 'bowser', key: '7'},
  // ]);
  return (
    <View style={styles.container}>
      {/* to render list of data we can use 'map' function */}
      {/* {people.map(value => {
        <Text key={value.key}>{value.name}</Text>;
      })} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
});

export default App;
