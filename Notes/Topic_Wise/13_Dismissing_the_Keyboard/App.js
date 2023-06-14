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
    // In this ap if keyboard is open and we will try to click outside normal component but only keyboard will not get close
    // so to solve that problem what we can do is we can wrap all the component will touchable component
    // but that touchable component will be Touchable with out feed back, so when we will press inside this touchable component then it wouldn't start to effect the opacity that are inside it
    <TouchableWithoutFeedback
      onPress={() => {
        // so if we will press any where in the screen then we will dismiss the keyboard
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
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});

export default App;
