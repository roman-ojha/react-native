import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {globalStyles} from '../styles/global';

const Home = ({navigation}) => {
  const [reviews, setReviews] = useState([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum',
      key: '1',
    },
    {
      title: 'Gotta Catch Them All (again)',
      rating: 4,
      body: 'lorem ipsum',
      key: '2',
    },
    {title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3'},
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        // now here we will render 'reviews' item using 'FlatList' component and display the title of the review and when user click on that review title we want to navigate to the specific review detail which contain all the detail information about that review
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity
            key={item.key}
            // now to pass the data we have to pass using 'navigate' method
            onPress={() =>
              // we have to pass object which will contain the data that we want to pass while navigating
              navigation.navigate('ReviewDetail', item)
            }>
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
