import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import ReviewDetail from '../screens/ReviewDetail';

// -> https://reactnavigation.org/docs/hello-react-navigation/

const HomeStack = createStackNavigator();
// now we will add 'screens' to create stack Navigator

function MyHomeStack() {
  // now here 'MyHomeStack' component is the navigation component which will handle all the navigation for us
  return (
    <NavigationContainer>
      {/* after configure navigation we will wrap that navigation into 'NavigationContainer' */}
      <HomeStack.Navigator>
        {/* now here we have to configure what different screen we want to register for stack navigator */}
        <HomeStack.Screen name="Home" component={Home} />
        {/* now here we have named route 'Home' and if we navigate to that we want to display 'Home' Component on Screen */}
        {/* NOTE: which ever component that we will put at the top will be soon be default */}
        <HomeStack.Screen name="ReviewDetail" component={ReviewDetail} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

// Now here we have to wrap 'HomeStack' into NavigationContainer
// NOTE: we have use 'HomeStack' for navigating only 'Home' & 'ReviewDetail' component but we can navigate to 'About' Component using 'HomeStack' because we have not register it as the component in stack navigator
export default MyHomeStack;
