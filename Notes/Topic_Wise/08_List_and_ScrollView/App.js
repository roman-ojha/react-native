import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

// -> https://reactnative.dev/docs/textinput

const App = () => {
  const [people, setPeople] = useState([
    {name: 'shaun', key: '1'},
    {name: 'yoshi', key: '2'},
    {name: 'mario', key: '3'},
    {name: 'luigi', key: '4'},
    {name: 'peach', key: '5'},
    {name: 'toad', key: '6'},
    {name: 'bowser', key: '7'},
  ]);
  return (
    <View style={styles.container}>
      {/* // NOTE: if the number of item will be more then there item could go out of the screen and by default we can't screen to down to see those item
        // So, to be able to see those item we have to make it scrollable */}
      <ScrollView>
        {/* // to render list of data we can use 'map' function */}
        {people.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    // backgroundColor: '#fff',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
});

export default App;
