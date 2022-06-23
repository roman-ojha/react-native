import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../shared/Card';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <MaterialIcons
          name="close"
          size={24}
          style={{...styles.modalToggle, ...styles.modalClose}}
          onPress={() => setModalOpen(false)}
        />
        {/* so Modal can be either visible or not visible */}
        {/* so if it is true then by default it will take the entire screen */}
        <View style={styles.modalContent}>
          <Text style={globalStyles.titleText}>Hello from the model:</Text>
        </View>
      </Modal>
      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />
      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity
            key={item.key}
            onPress={() => navigation.navigate('ReviewDetail', item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalToggle: {
    color: 'black',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 10,
  },
  modalContent: {
    flex: 1,
  },
});

export default Home;
