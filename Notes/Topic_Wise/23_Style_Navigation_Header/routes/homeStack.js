import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import ReviewDetail from '../screens/ReviewDetail';

const HomeStack = createStackNavigator();
function MyHomeStack() {
  return (
    <NavigationContainer>
      {/* if we have to style both the screen header we might have to put same style on different screen again and again but there solution is we can use 'screenOptions' as default options which will apply style on all of the screen header */}
      <HomeStack.Navigator
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
            // so here we can pass property value
            title: 'GameZone',
            // we can also override the default options inside here
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
    </NavigationContainer>
  );
}

export default MyHomeStack;
