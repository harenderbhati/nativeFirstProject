import { Text, View, Button,Image } from "react-native"
import { addToCart } from "./action"
import { useDispatch } from "react-redux"

export const Products = (props) => {
    const item=props.item
    const index=props.index
    const dispatch= useDispatch();
    const handleAddToCart=(item)=>{
        dispatch(addToCart(item))
    }

    return (
        <View style={{    padding:10 , borderBottomColor:"orange", borderWidth:2 ,alignItems:"center", justifyContent:"center",alignContent:"center" ,marginBottom:80}} key={index}>
            <Text style={{ fontSize: 25 }}>{item.name}</Text>
            <Text>{item.color}</Text>
            <Text>{item.price}</Text>
            <Image style={{ height: 100, width: 100 }} source={{ uri: item.image }} />
                <Button title='Add to Cart' onPress={()=>handleAddToCart(item)} />
        </View>
    )
}