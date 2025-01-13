import { useRef } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen"


export const RefComponent=()=>{
     const input = useRef()

     const updateInput =()=>{
        input.current.focus()
        input.current.setNativeProps({
            color:"green",
            
        })
        console.warn("called!!!");
        
     }
    return(
        <View>
        <TextInput style={styles.inputText} ref={input} placeholder="enter your name" />
        <TextInput style={styles.inputText} placeholder="enter your password" />
        <View>
            <Button title="Submit" onPress={updateInput} />
        </View>
        </View>

    )
}

const styles =StyleSheet.create({
    inputText:{
        margin:10,
        borderWidth:2,
        borderColor:"skyblue",
        borderRadius:5
    }
})