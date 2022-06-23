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
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 18,
    borderRadius: 6,
    color: 'black',
  },
});
