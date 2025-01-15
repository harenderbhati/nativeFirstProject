import { Button, Text, View } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useState } from "react"


export const AsyncStorageComponent =()=>{

    const [users,setUsers]=useState('')

        const setdata = async()=>{
            await AsyncStorage.setItem("name","Harry Thakur")
        }

        const getdata=async()=>{
            const name = await AsyncStorage.getItem("name")
            setUsers(name)
            console.warn(name)
        }
        const removedata = async ()=>{
            await AsyncStorage.removeItem("name")
            setUsers('')
        }
    return(
        <View>
            <Text style={{fontSize:30}}>Async Storage..|| {users}</Text>
            <View style={{margin:5}} ><Button title="Set Data" onPress={setdata} /></View>
            <View style={{margin:5}} ><Button title="Get Data" onPress={getdata} /></View>
            <View style={{margin:5}} ><Button title="Remove Data" onPress={removedata} /></View>
            
            
        </View>
    )

}