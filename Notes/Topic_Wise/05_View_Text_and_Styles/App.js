import React, {useState} from 'react';
import {StyleSheet, Text, View, Linking, Button} from 'react-native';

/*
  *) Style:
    -> React Native Doesn't use CSS It just emulate the ID of Css
    -> 
*/

const App = () => {
  return (
    <View
      // View is like 'div' component in html
      style={{
        // we can use style directory on the component
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {/* create style object and binding specify property to the style */}
      <View style={styles.header}>
        <Text style={styles.text}>"Hello"</Text>
        {/* To render a text into app we use 'Text' Component */}
        {/* NOTE: we can only render text indie the 'Text' Component */}
      </View>
      <View style={styles.body}>
        {/* NOTE: if we add style to the parent component in this case in 'View' that we will not inherit it inside the 'Text' Component*/}
        <Text>Lorem ipsum</Text>
        {/* if we want style in these component that we have to add style inside that particular component */}
        <Text>Lorem ipsum</Text>
        <Text style={{color: 'black'}}>
          {/* But that is an exception and that is if we use 'Text' Widget inside the 'Text' Widget then the parent Text style will be apply the the child 'Text' Widget */}
          Lorem ipsum <Text>Test</Text>
        </Text>
        <Text>Lorem ipsum</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    color: 'black',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
    // here '20' is in px
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
  },
});

export default App;
