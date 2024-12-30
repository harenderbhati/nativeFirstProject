
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";


const  PressableComponent =()=>{
    return (
        <View>
            <Pressable
            onPress={()=>{console.warn("OnPress Trigger")}}
            onLongPress={()=>{console.warn("Long Press Trigger")}}
            onPressIn={()=>{console.warn(" OnPress IN Trigger")}}
            onPressOut={()=>{console.warn("OnPress Out Trigger")}}
            delayLongPress={3000}
            >
                <Text style={styles.pressableBtn}>
                    Pressable Button
                </Text>
            </Pressable>
        </View>
    )
}


 const styles= StyleSheet.create({
    main:{
        flex:1,
        justifyContent:"center",
    },
    pressableBtn:{
        color:"white",
        backgroundColor:"green",
        padding:20,
        fontSize:25,
        margin:20,
        textAlign:"center",
        borderRadius:20,
        borderColor:"black",
        elevation:5
    }
 })

export  default PressableComponent