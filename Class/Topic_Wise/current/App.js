import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

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

  return (
    <View style={styles.container}>
      {/* header */}
      <Header />
      <View style={styles.content}>
        {/* todo form */}
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
