import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetail from '../screens/ReviewDetail';
import Header from '../shared/Header';

const HomeStack = createStackNavigator();
function MyHomeStack() {
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
        name="Home"
        component={Home}
        // options={{
        //   headerTitle: () => <Header />,
        // }}
        // so here rather then just placing title as string we will replace that title with headerTitle and place our custom header
        // to be able to access 'navigation' object inside 'Header' component we will rather pass function on options
        options={({navigation}) => {
          // now here we can access the navigation object
          return {
            // and now we will pass navigation object as props tot he 'Header' component
            headerTitle: () => (
              <Header navigation={navigation} title="GameZone" />
            ),
          };
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
