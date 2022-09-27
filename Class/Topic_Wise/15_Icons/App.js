import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

/*
  -> NOTE: when we will create the project using expo cli then icon come as default from expo
    -> https://docs.expo.dev/guides/icons/
  -> React Native CLI:
      -> Install Package:
          -> https://github.com/oblador/react-native-vector-icons
          -> https://oblador.github.io/react-native-vector-icons/
      -> update on IOS by locking at the documentation
      -> update in :
          -> android/app/build.gradle
            -> apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
            -> implementation project(':react-native-vector-icons')
          -> android/settings.gradle
            -> include ':react-native-vector-icons'
            -> project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')
      -> Make build:
      -> Add Icon on code:
          -> for this project we had added icon in 'TodoItem' component
*/

/*
  *) Custom Icons:
      -> read this docs to add custom icons to
      -> https://www.reactnative.guide/12-svg-icons-using-react-native-vector-icons/12.1-creating-custom-iconset.html
      -> NOTE: in newer version of react native while linking fonts we don't need to use 'link' command rather we can use:
      -> npx react-native-asset
      -> this will copy the required font's into android and ios platform folder
*/

const App = () => {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play on the switch', key: '3'},
  ]);

  const pressHandler = key => {
    setTodos(previousTodos => {
      return previousTodos.filter(todo => todo.key !== key);
    });
  };

  const submitHandler = todo => {
    if (todo.length > 3) {
      setTodos(prevTodos => {
        return [{text: todo, key: `${prevTodos.length + 1}`}, ...prevTodos];
      });
    } else {
      Alert.alert('OOPS!', "Todo's must be over 3 chars long", [
        {
          text: 'Understood',
          onPress: () => {
            console.log('Alert close');
          },
        },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});

export default App;
