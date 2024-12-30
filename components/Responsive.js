import React from "react";
import { View ,Text, StyleSheet} from "react-native";


const Responsive =()=>{

    return(
        <View style={styles.main}>
            <View style={styles.box1}>
                <View style={styles.InnerBox1}></View>
                <View style={styles.InnerBox2}></View>
                <View style={styles.InnerBox3}></View>
                <View style={styles.InnerBox4}></View>
            </View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
        </View>
    );
}


const styles= StyleSheet.create({
    main:{
        flex:1
    },
    box1:{
        flex:1, backgroundColor:"green" , flexDirection:"row"
    },
    box2:{
        flex:1, backgroundColor:"blue"
    },
    box3:{
        flex:1, backgroundColor:"red"
    },
    InnerBox1:{
        flex:1,
        backgroundColor:'orange',
        margin:10
    },
    InnerBox2:{
        flex:1,
        backgroundColor:'blue',
        margin:10
    },
    InnerBox3:{
        flex:1,
        backgroundColor:'pink',
        margin:10
    },
    InnerBox4:{
        flex:1,
        backgroundColor:'purple',
        margin:10
    }
})



export default Responsive;