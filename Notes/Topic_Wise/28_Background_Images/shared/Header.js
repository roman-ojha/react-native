import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Dimensions} from 'react-native';
const ScreenWidth = Dimensions.get('window').width;

const Header = ({navigation, title}) => {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <ImageBackground
      style={styles.header}
      source={require('../../../assets/game_bg.png')}>
      {/* -> ImageBackground component will surrounds or wrap whatever it wants inside it and apply a background image  to all of that stuff */}
      <MaterialIcons
        name="menu"
        color="#333"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        <Image
          style={styles.headerImage}
          source={require('../../../assets/heart_logo.png')}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    width: ScreenWidth,
    height: '100%',
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
  headerTitle: {
    flexDirection: 'row',
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
});

export default Header;
