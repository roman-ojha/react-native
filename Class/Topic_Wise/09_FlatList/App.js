import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

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
  return (
    <View style={styles.container}>
      {/* FlatList is a self closing component in this there is a number of props that control how our list work */}
      <FlatList
        data={people}
        // data prop will take the data that we want to output
        // for now we will pass the 'people' array that we want to cycle through

        renderItem={({item}) => {
          // now inside this function it return jsx
          // and this function will given us the item that we are iterating
          // and also while render we don't even need to specify key on component
          // because FlatList will automatically look after the key property in each item
          return <Text style={styles.item}>{item.name}</Text>;
        }}
        // but if each item in list don't have key property and have 'id' rather then
        keyExtractor={item => item.id}
        // so here we return the unique value that we have as key
        numColumns={2}
        // now here 'numColumn' will create given number of column from you data and create like a table
      />
      {/* So the different between FlatList and ScrollView is that 
            -> When we use a FlatList if we have relay large array of items do not automatically load into the screen on first render, only few will render and will load as you scroll down
      */}
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
