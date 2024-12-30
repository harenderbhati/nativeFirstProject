import React, { useState } from "react";
import { ActivityIndicator, Button, StyleSheet, View } from "react-native";

const ActivityLoader =()=>{
    const [show,setShow]= useState(false);

    const displayLoader =()=>{
        setShow (true);

        setTimeout(()=>{
            setShow(false)
        },2000)
    }

    return (
        <View style={styles.main}>
            <ActivityIndicator size={"large"}   animating={show}/>
            <Button
            title="Show Loader"
            onPress={displayLoader}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        alignContent:"center",
        justifyContent:"center"
    }
})

export default ActivityLoader