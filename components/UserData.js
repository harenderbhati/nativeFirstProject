import {FlatList,Text,View,StyleSheet} from 'react-native'

const UserData=(props)=>{
    const item=props.item
    return(
      <View style={styles.box}> 
            <Text style={styles.item}>{item.name}</Text>
            <Text style={styles.item}>{item.email}</Text>
              </View>
    )
  }
  
  const styles = StyleSheet.create({
    textbox:{
      fontSize:32,
      color:"red"
    },
    box:{
      flexDirection:'row',
      color:'orange',
      margin:2,
      
    },
    item:{
      color:'orange',
      flex:1,
      margin:10,
      fontSize:14,
      borderRadius:4,
      borderWidth:4,
      borderColor:'orange',
      padding:10
    },
    TextInput:{
      color:'red',
      margin:12,
      borderWidth:2,
      borderColor:'blue',
      borderRadius:4,
      textAlign:'center'
    },
    mapList:{
      backgroundColor:'blue',
      margin:10,
      padding:10,
      fontSize:30,
      textAlign:'center',
      height:120,
      width:80
    }
  })
  
  export default UserData;