import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import ReviewDetail from '../screens/ReviewDetail';

const HomeStack = createStackNavigator();
function MyHomeStack() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen name="ReviewDetail" component={ReviewDetail} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

export default MyHomeStack;
