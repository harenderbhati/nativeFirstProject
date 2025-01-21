import { useEffect, useState } from "react"
import { Text, View } from "react-native"
import { useSelector } from "react-redux"


export const Header =()=>{
    const cartData=useSelector((state)=>state.reducer)
    const [cartItem,setCartItem]=useState(0)
    useEffect(()=>{
            setCartItem(cartData.length)
    },[cartData])
    console.warn(cartData)
    return(
        <View >
            <Text style={{textAlign:"right" ,fontSize:20, backgroundColor:"orange", padding:20}}>Cart Value  :: {cartItem}</Text>
        </View>
    )
}