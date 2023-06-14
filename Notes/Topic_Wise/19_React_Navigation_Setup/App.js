import React from 'react';
import Home from './screens/Home';

/*
 *) React Navigation v6:
    -> we can navigate to different screen using different way the first way that we will learn to navigate is using:
        -> stack navigator
            -> Because Screen in an app stack to one another
            -> NOTE that app could get mesh if you will push screen on top of the stack for large amount of time
            -> where you could end of duplicate, Ex: you could push the same screen like: Home screen into the stack again but which screen is already setting underneath
            -> So, you do have to plan navigation when you are using stack navigation 
    
    *) Setup:
        -> https://reactnavigation.org/
        -> https://reactnavigation.org/docs/getting-started
        -> npm install @react-navigation/native
        -> For Expo:
            -> expo install react-native-screens react-native-safe-area-context
        -> For React Native CLI:
            -> npm install react-native-screens react-native-safe-area-context
            -> you also need to go to "android/app/src/main/java/<your package name>/MainActivity.java." and paste this 
            ->  @Override
                protected void onCreate(Bundle savedInstanceState) {
                super.onCreate(null);
                }
            -> and at the top:
                -> import android.os.Bundle;
        -> now again build you application
 */

const App = () => {
  return <Home />;
};

export default App;
