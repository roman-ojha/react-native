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
      <View style={styles.buttonContainer}>
        <Button title="Change Name" onPress={onClickHandler} />
        {/* React Native also comes with Button Component */}
        {/* Where title is the name inside the button */}
        {/* NOTE: We can add a style property to 'Button' */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {},
  buttonContainer: {
    marginTop: 20,
  },
});

export default App;
