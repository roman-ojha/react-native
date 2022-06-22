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
import SandBox from './components/SandBox';

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
    // 'SandBox' component contain all flexbox related stuff
    // <SandBox />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            {/* so using this flexbox we will solve the issue of not scrolling up to the bottom 'FlatList' because of 'Header' component is taking the space and FlatList component will hide on the button of the screen by default */}
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
    // so by using flex of 1 in content not it will take the available space from the screen
    // backgroundColor: 'red',
    padding: 40,
  },
  list: {
    flex: 1,
    // but if we will apply flex 1 to the list now we are saying is take this container and expand to take what is available in the screen
    // backgroundColor: 'yellow',
    marginTop: 20,
  },
});

export default App;
