import React from 'react';
import {StyleSheet, Button, TextInput, View, Text} from 'react-native';
import {globalStyles} from '../styles/global';
import {Formik} from 'formik';

const ReviewForm = () => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          // this will take all the initial value of the field
          title: '',
          body: '',
          rating: '',
        }}
        onSubmit={values => {
          // this function will going to call when we will submit this form
          // 'values' represent the different values at the time of being submitted from different inputs
          console.log(values);
        }}>
        {formikProps => {
          // now this will be the render function
          // 'formikProps' are provided inside this function automatically by formik
          // and those props are function for handling the change of different form field, so when user start to type into the form field we can call the function that can handle the change
          // we also also access the current value on that props
          // also the submission handler

          return (
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder="Review title"
                placeholderTextColor="#b5b3b3"
                // now while user typing formic will handle those change
                // handleChange('<what_value_we_want_to_change'')
                onChangeText={formikProps.handleChange('title')}
                value={formikProps.values.title}
              />
              <TextInput
                multiline
                style={globalStyles.input}
                placeholder="Review body"
                placeholderTextColor="#b5b3b3"
                onChangeText={formikProps.handleChange('body')}
                value={formikProps.values.body}
              />
              <TextInput
                style={globalStyles.input}
                placeholder="Rating (1-5)"
                placeholderTextColor="#b5b3b3"
                onChangeText={formikProps.handleChange('rating')}
                value={formikProps.values.rating}
                keyboardType="numeric"
              />
              <Button
                title="Submit"
                color="maroon"
                onPress={formikProps.handleSubmit}
              />
              {/* now here 'handleSubmit' function will handle the submit and call 'onSubmit' function that we define before */}
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

export default ReviewForm;
