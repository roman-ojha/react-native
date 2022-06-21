import React, {FC} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
// here we will import 'react' and 'react-native' that the app use
// we are import component that app use through 'react-native'

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// again here we are importing other component from other module

const App = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
};

// Same as CSS it style the react native app
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
