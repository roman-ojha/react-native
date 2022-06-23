import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Header = ({navigation, title}) => {
  const openMenu = () => {
    // this function will open drawer
    // to open Drawer we can use 'navigation' which we previously use
    // but we don't have access the 'navigation' object by default
    // we know that 'navigation' object is only be access inside component that are being registered as screen inside our navigation stack
    // so we will pass navigation as props from 'HomeStack' component
    // navigation.openDrawer();
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      {/* Icon for the menu */}
      <MaterialIcons
        name="menu"
        color="#333"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    // here we are filling all the default header size which stack navigator gives us
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 16,
  },
});

export default Header;
