import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import MyHomeStack from './homeStack';
import MyAboutStack from './aboutStack';

const RootDrawerNavigator = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer>
      <RootDrawerNavigator.Navigator
        screenOptions={{
          headerShown: false,
          swipeEnabled: true,
          drawerType: 'slide',
        }}>
        <RootDrawerNavigator.Screen name="HomeStack" component={MyHomeStack} />
        <RootDrawerNavigator.Screen
          name="AboutStack"
          component={MyAboutStack}
        />
      </RootDrawerNavigator.Navigator>
    </NavigationContainer>
  );
}

export default MyDrawer;
