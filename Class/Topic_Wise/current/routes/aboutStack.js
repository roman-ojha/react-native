import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import About from '../screens/About';

// This is the Stack Navigation for About Stack
const HomeStack = createStackNavigator();
function MyAboutStack() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#eee',
          height: 60,
        },
        headerTintColor: '#444',
      }}>
      <HomeStack.Screen
        name="About"
        component={About}
        options={{
          title: 'About GameZone',
        }}
      />
    </HomeStack.Navigator>
  );
}

export default MyAboutStack;
