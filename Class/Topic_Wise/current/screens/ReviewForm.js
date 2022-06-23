import React from 'react';
import {StyleSheet, Button, TextInput, View, Text} from 'react-native';
import {globalStyles} from '../styles/global';
import {Formik} from 'formik';
import * as yup from 'yup';

const reviewSchema = yup.object({
  // inside here we will define our schema
  // so key value pair inside this schema will going to be the form field
  title: yup.string().required().min(4),
  // title must be string and required and the minimum length is 4
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test('is-num-1-5', 'Rating must be a number 1 -5', val => {
      // val : rating value
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
  // test return true or false, if true validated, if false not validated
  // test('<title>','<feedback>')
});

const ReviewForm = ({addReview}) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          title: '',
          body: '',
          rating: '',
        }}
        // now here we have to pass the validation schema that we have just created above
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          addReview(values);
          actions.resetForm();
        }}>
        {formikProps => {
          return (
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder="Review title"
                placeholderTextColor="#b5b3b3"
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
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

export default ReviewForm;
