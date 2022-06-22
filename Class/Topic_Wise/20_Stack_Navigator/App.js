import React from 'react';
import Navigator from './routes/homeStack';

/*
 *) Stack Navigator:
    -> https://reactnavigation.org/docs/stack-navigator/
    -> npm install @react-navigation/stack
    -> npm install react-native-gesture-handler
    -> create 'routes/homeStack.js' on project root directory, because this project is tutorial project so will create it inside 'Topic_Wise' folder
    -> se per documentation import 'react-native-gesture-handler'; at the top of file on 'App.js' or 'index.js'
 */

const App = () => {
  // After configuring Navigation on './routes/homeStack.js' we can import that component render it here
  return <Navigator />;
};

export default App;
