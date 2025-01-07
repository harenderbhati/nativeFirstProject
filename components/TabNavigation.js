import { StyleSheet, View, Text } from "react-native"
import {NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


export const TabNavigation =()=>{
     const Tab= createMaterialTopTabNavigator()
        return(
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Login" component={Login}/>
                    <Tab.Screen name="SignUp" component={SignUp }/>
                    <Tab.Screen name="Other" component={SignUp }/>
                </Tab.Navigator>
            </NavigationContainer>
        )
}




const Login =() =>{
    return (
        <View style={styles.heading}>
            <Text style={styles.text} >
            Login Screen
            </Text>
        </View>
    )
}


const SignUp =()=>{
    return (
        <View style={styles.heading}>
            <Text style={styles.text} >
               SignUp Screen
            </Text>
        </View>
    )
}


const styles= StyleSheet.create({
    heading:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:30
    }
})