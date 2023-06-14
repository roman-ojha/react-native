import React from 'react';
import Navigator from './routes/drawer';

/*
  *) Custom Header Component:
      -> now we will create our own custom header rather then stick to the default header that is provided by stack navigator and drawer navigator
      -> so we will create './shared/header' at the root directory of the project which will contain anything that might be shared between different file like common component
*/

const App = () => {
  return <Navigator />;
};

export default App;
