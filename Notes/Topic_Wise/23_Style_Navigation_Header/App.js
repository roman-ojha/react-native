import React from 'react';
import Navigator from './routes/homeStack';

/*
 *) Navigation Option:
    -> https://reactnavigation.org/docs/headers
    -> By default React Navigation V6 provide a header for us while using stack navigator
    -> so if we want to style this header then we have to supply Navigation Option To our different screen
    -> and there is different way to do that but right now we will style through Navigation Option in 'homeStack.js'
 */

const App = () => {
  return <Navigator />;
};

export default App;
