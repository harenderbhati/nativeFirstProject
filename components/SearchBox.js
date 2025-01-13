import { useState } from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"


export const SearchBox =()=>{
    const [data,setData]=useState([])
    const searchUser= async(text)=>{
         const url =`http://10.0.2.2:3000/users?q=${text}`
         let result = await fetch(url)
         result = await result.json()
         if (result){
         setData(text)
      }

        // console.warn("data",result)
    }

    return(
        <View style={{flex:1}}>
            <Text style={styles.textHeading}>SearchBox With Api!!!</Text>
            <TextInput style={styles.inputBox} placeholder="Search Here!!!" onChangeText={(text)=>searchUser(text)} />
                {/* {
                   data.length?
                   data.map((item,index)=><View key={index}>
                    <Text>{item.name}</Text>
                   </View>)
                   :null
                } */}
        </View>
    )

}

const styles= StyleSheet.create({
    inputBox:{
        borderColor:"green",
        borderWidth:2,
        margin:20,
        padding:10,
        fontSize:20,
        textAlign:"center"
    },
    textHeading:{
        textAlign:"center",
        fontSize:30,
        color:"orange"
    }
})