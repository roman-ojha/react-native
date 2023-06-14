import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetail from '../screens/ReviewDetail';
import {NavigationContainer} from '@react-navigation/native';

const HomeStack = createStackNavigator();
function MyHomeStack() {
  return (
    <HomeStack.Navigator
      // because we are using 'Drawer' Navigation we don't need to have to wrap our Stack navigator with 'NavigationContainer'
      // rather we will nest 'HomeStack' & 'AboutStack' using Drawer Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#eee',
          height: 60,
        },
        headerTintColor: '#444',
      }}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'GameZone',
        }}
      />
      <HomeStack.Screen
        name="ReviewDetail"
        component={ReviewDetail}
        options={{
          title: 'Review Details',
        }}
      />
    </HomeStack.Navigator>
  );
}

export default MyHomeStack;
