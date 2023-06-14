import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

// -> https://reactnative.dev/docs/textinput

const App = () => {
  const [name, setName] = useState('Roman');
  const [age, setAge] = useState('40');
  return (
    <View style={styles.body}>
      {/* Label for Input Filed */}
      <Text>Enter name:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Roman"
        onChangeText={value => {
          // 'onChangeText' event handler will use to detect event whenever the text value changed
          // so in argument we can access the value what ever user is typing in inputText
          setName(value);
        }}
        // If you want to use multiline input text
        multiline
      />
      <Text>Enter age:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. 99"
        onChangeText={value => {
          setAge(value);
        }}
        // if you want to set input field of some type like in here we are setting input field of type 'numeric' because this input field can only take number value
        keyboardType="numeric"
      />
      <Text>
        name: {name}, age: {age}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 8,
    margin: 10,
    width: 200,
  },
});

export default App;
