import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Alert} from 'react-native';
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
        // here each object represent button
        {
          text: 'Understood',
          onPress: () => {
            console.log('Alert close');
          },
        },
      ]);
      // Alert.alert(<title>,<message>)
    }
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <Header />
      <View style={styles.content}>
        {/* todo form */}
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
