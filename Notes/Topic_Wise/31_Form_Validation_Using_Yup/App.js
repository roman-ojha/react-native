import React from 'react';
import Navigator from './routes/drawer';

/*
  *) Yup:
    -> if we use 'Formik' only it would not give validation for our form go use form validation we have to use 'yup' package
    -> and also it really work with 'Formik'
    -> so what we will going to do is we will create validation schema for our review form using yup and we are going to pass that schema into our 'Formik' component
    -> we will add validation on 'ReviewForm.js' Modal Screen
 */

const App = () => {
  return <Navigator />;
};

export default App;
