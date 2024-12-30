import React from   "react";
import { View,Text, TouchableHighlight, StyleSheet } from "react-native";
import style from "../style";

const ButtonComponent =()=>{

    return(
        <View style={styles.main}>
            <TouchableHighlight>
                <Text style={[styles.button,styles.success]}>
                    Success
                </Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.button, styles.primary]}>
                    Primary
                </Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.button, styles.warning ]}>
                    Warning
                </Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.button, styles.Error]}>
                    Error
                </Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={styles.button}>
                    Button
                </Text>
            </TouchableHighlight>
            
        </View>
    );
}


const styles= StyleSheet.create({
    main:{
        flex:1
    },
    button:{
        backgroundColor:"grey",
        color:"white",
        padding:10,
        margin:10,
        fontSize:20,
        borderRadius:10,
        textAlign:"center",
        elevation:10,
        shadowColor:"red",
        opacity:1

    },
    success:{
        backgroundColor:"green"
    },
    primary:{
        backgroundColor:"blue"
    },
    warning:{
        backgroundColor:"yellow"
    },
    Error:{
        backgroundColor:"red"
    }
})

export default ButtonComponent;