import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';

/*
  *) Touchable:
    -> we have see that we can touch button component and pass onPress property on button but we can do that in any other component except some of them
    -> In Touchable we have different kind of component like:
      -> https://reactnative.dev/docs/touchableopacity
      1) TouchableOpacity
*/

const App = () => {
  const [people, setPeople] = useState([
    {name: 'shaun', id: '1'},
    {name: 'yoshi', id: '2'},
    {name: 'mario', id: '3'},
    {name: 'luigi', id: '4'},
    {name: 'peach', id: '5'},
    {name: 'toad', id: '6'},
    {name: 'bowser', id: '7'},
  ]);

  const pressHandler = id => {
    console.log(id);
    setPeople(prevPeople => {
      return prevPeople.filter(person => person.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={people}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                /* now ever component that is inside Touchable we can press on it */
                // we can also style this component which was not possible on Button
                pressHandler(item.id);
              }}>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  },
});

export default App;
