import React, { useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const RadioButtonComponent = () => {
    const [selectedRadio, setSelectedRadio]=useState(1)
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={()=>setSelectedRadio(1)}>
        <View style={styles.radioWrapper}>
          <View style={styles.Radio}>
            {
                selectedRadio===1?<View style={styles.bgRadio}></View>:null
            }
            
          </View>
          <Text style={styles.RadioText}>Radio 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setSelectedRadio(2)}>
        <View style={styles.radioWrapper}>
          <View style={styles.Radio}>
          {
                selectedRadio===2?<View style={styles.bgRadio}></View>:null
            }
            
          </View>
          <Text style={styles.RadioText}>Radio 1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  RadioText: {
    fontSize: 30,
  },
  Radio: {
    height: 40,
    width: 40,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 20,
    margin: 20,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bgRadio: {
    height: 28,
    width: 28,
    backgroundColor: 'red',
    borderRadius: 20,
    margin: 4,
  },
});
export default RadioButtonComponent;
