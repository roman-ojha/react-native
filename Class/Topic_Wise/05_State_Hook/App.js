import React, {useState} from 'react';
import {StyleSheet, Text, View, Linking, Button} from 'react-native';

const App = () => {
  const [name, setName] = useState('Roman');

  const onClickHandler = () => {
    setName('Razz');
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name}</Text>
      <Button title="Change Name" onPress={onClickHandler}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  text: {},
});

export default App;
