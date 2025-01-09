import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"

 

 export const FormInput =()=>{
    const [name,setName]= useState("")
    const [age,setAge]= useState(0)
    const [email,setEmail]= useState("")

    const saveData=async()=>{
        console.warn("hello",name,age,email)
        const url ="http://192.168.84.25:3000/users"
        let result = await fetch(
            url, {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(name,age,email)
            }
        )
    }

    return(
        <View>
            <Text style={{fontSize:30}}>
                Post Api with Input Feilds..
            </Text>
            <TextInput style={styles.input} value={name} onChangeText={(item)=>setName(item)} placeholder="enter your name"/>
            <TextInput style={styles.input} value={age} onChangeText={(item)=>setAge(item)} placeholder="enter your age"/>
            <TextInput style={styles.input} value={email} onChangeText={(item)=>setEmail(item)} placeholder="enter your email"/>
            <Button title="Save Data"  onPress={saveData} />
        </View>
    )
 }

 const styles= StyleSheet.create({
    input:{
        borderColor:"skyblue",
        borderWidth:2,
        margin:20
    }
 })