import { useState } from 'react';
import {
    Button,
    Text,
    TextInput,
    View,
  } from 'react-native';

export const Login =(props)=>{
    const [name, setName]=useState("")
    // const name="Harry Thakur";
    const age=25;
  return(
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <Text style={{fontSize:30}}>
        Login  Screen
      </Text>
      <TextInput placeholder='Enter your name' style={{borderRadius:5,borderColor:"red",borderWidth:5, margin:20}}
       onChangeText={(text)=>setName(text)}
      />
      <Button title='Go to Home Page' onPress={()=>props.navigation.navigate("Home",{name,age})} />
    </View>
  )
}