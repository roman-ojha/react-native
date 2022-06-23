import React from 'react';
import Navigator from './routes/drawer';

/*
 *) Forms:
    -> now we had create the modal, what we will do is we will create the form inside it so that user can create review detail
    -> we can create our own form from scratch with our own validation and logic and keep track of hooks
    -> but what we will going to do is use 'formik' library:
      -> https://formik.org/
      -> formik is a library which allow us to easily create form which keep track or our values inside those form fields instead of manually tracking them using state
      -> npm install formik --save
      -> yarn add formik
      -> after this we will create 'reviewForm.js' file inside 'screens'
 */

const App = () => {
  return <Navigator />;
};

export default App;
