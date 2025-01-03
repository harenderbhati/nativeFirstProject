import React  from "react";
import { StyleSheet, View, Text, Platform } from "react-native";
import {WebView } from "react-native-webview"
const PlatFormComponent =()=>{
    return(
        <View style={styles.main}>
           <Text style={{fontSize:30}}>Platform : {Platform.OS}</Text>
           <WebView source={{uri:"https://reactnavigation.org/docs/hello-react-navigation"}} />
        </View>
    )
}

const styles= StyleSheet.create({
    main:{
        flex:1
    }
})

export default PlatFormComponent