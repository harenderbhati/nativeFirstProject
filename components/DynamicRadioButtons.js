import React, { useState } from "react";
import { View,TouchableOpacity,Text,StyleSheet } from "react-native";

const DynamicRadioButtons =()=>{

        const skills =[
            {
                id:1,
                name:"JAVA"
            },
            {
                id:2,
                name:"PHP"
            },
            {
                id:3,
                name:"Node"
            },
            {
                id:4,
                name:"SQL"
            }
        ]
     
         const [selectedRadio, setSelectedRadio]=useState(1)
    return (
    <View style={styles.main}>
          {
            skills.map((item,index)=><TouchableOpacity key={index} onPress={()=>setSelectedRadio(item.id)}>
            <View style={styles.radioWrapper}>
              <View style={styles.Radio}>
                {
                    selectedRadio===item.id ?<View style={styles.bgRadio}></View>:null
                }
                
              </View>
              <Text style={styles.RadioText}>{item.name}</Text>
            </View>
          </TouchableOpacity>)
          }
          
        </View>
    )
}


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
    justifyContent:"center"
   
  },
  bgRadio: {
    height: 28,
    width: 28,
    backgroundColor: 'red',
    borderRadius: 20,
    margin: 4,
  },
});

export default DynamicRadioButtons