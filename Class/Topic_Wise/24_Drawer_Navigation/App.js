import React from 'react';
import Navigator from './routes/drawer';

/*
  *) Drawer Navigation for v6:
      -> https://reactnavigation.org/docs/drawer-navigator
      -> Drawer navigation will help us navigate between 'Home' and 'About' screen for this project
      -> Drawer navigator will now put screen on to stack from one to another instead it will completely replace the screen with the new one 
      -> Drawer navigator on default will not automatically show header
      -> We can solve that by Wrapping 'About' screen with stack navigator again
      *) Setup:
          -> npm install @react-navigation/drawer
          -> to use this we also have to install 'react-native-gesture-handler' but in our case we have already installed it
          -> npm install react-native-gesture-handler react-native-reanimated
          -> add on babel.config.js
            -> plugins: [
                    'react-native-reanimated/plugin',
                ],
                -> https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/
          -> please visit documentation for this
          -> if you have miss some step and error occur then start metro by reset cache
                -> npm start -- --reset-cache (for npm)
                -> react-native start --reset-cache (for react-native)
                -> expo start -c (for expo)
          -> build the application again

*/

// After Creating Drawer Navigation on './routes' we will Rather render that Navigator component
const App = () => {
  return <Navigator />;
};

export default App;
