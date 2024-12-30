import React, {useState} from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';

const ModalComponent = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.main}>
      <Modal transparent={true} visible={showModal} animationType='fade'>
        <View style={styles.centredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello Harry!!!!!</Text>
            <Button title="Close Modal" onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>
      <View style={styles.buttonView}>
        <Button title="Show Modal" onPress={() => setShowModal(true)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  centredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: 'skyblue',
    padding: 60,
    borderRadius: 20,
    shadowColor: 'blue',
    elevation: 5,
  },
  modalText: {
    fontSize: 30,
    marginBottom: 30,
  },
});

export default ModalComponent;
