import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import About from '../screens/About';
import Header from '../shared/Header';

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
        // headerTitle: () => <Header />,
      }}>
      <HomeStack.Screen
        name="About"
        component={About}
        // options={{
        //   title: 'About GameZone',
        // }}
        options={({navigation}) => {
          return {
            headerTitle: () => (
              <Header navigation={navigation} title="About GameZone" />
            ),
          };
        }}
      />
    </HomeStack.Navigator>
  );
}

export default MyAboutStack;