import React from 'react';
import Home from './screens/Home';

/*
  *) Custom Fonts:
    *) Expo CLI:
      -> https://docs.expo.dev/guides/using-custom-fonts/
    *) React-Native CLI:
      -> Create folder 'assets/fonts' on project root directory
      -> download required fonts and try to rename font according to the title of that font by doing to the properties/detail of that file 
        -> because while adding font we have to specify the title of the font not file name of the font
      -> Copy and paste font file in that folder
      -> create file 'react-native.config.js' on root directory
          ->module.exports = {
            project: {
              ios: {},
              android: {},
            },
              assets: ['./assets/fonts'],
            }; 
      -> now run react-native link to link all font to you project:
            -> npx react-native link
            -> NOTE: after linking this font I am getting error after running android app
            -> so because after linking react-native will link/copy given fonts to 'android/app/src/main/assets/fonts' we can directly put those font there
      -> build app again:
            -> npx react-native run-android
      -> now to use font just use fontFamily and font name in style
          -> we have use font on 'Home' component
*/

const App = () => {
  return <Home />;
};

export default App;
