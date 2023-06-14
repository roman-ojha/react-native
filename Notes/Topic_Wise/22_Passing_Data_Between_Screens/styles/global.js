// this file will contain all of the different style that we use in different component

import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white',
  },
  titleText: {
    fontFamily: 'Nunito SemiBold',
    fontSize: 20,
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
});
