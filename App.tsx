

import React, { useState } from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView
} from 'react-native';
import CompanyData from './components/companyData';
import ExStyles from './style'


function App(): React.JSX.Element {

  const [name, setName]=useState('')
  const [password,setPassword]=useState('')
  const [email,setEmail]=useState('')
  const [display,setDisplay]=useState(false)
  const [showPassword,setShowPassword]=useState(false)

   const fruit =()=>{
    console.warn("Hello world");
    
   }

   const resetFormData=()=>{
    setDisplay(false)
    setEmail('')
    setName('')
    setPassword('')

   }
   const showPasswordFunc=()=>{
    setShowPassword(preValue=>!preValue)
   }

   const employiesDetails=[
    {
      name:"Harry",
      email:"harrythakur@gmail.com",
      id:1
    },
    {
      name:"Karishma",
      email:"harrythakur@gmail.com",
      id:2
    },
    {
      name:"Nishu",
      email:"harrythakur@gmail.com",
      id:3
    },
    {
      name:"Shilpa",
      email:"harrythakur@gmail.com",
      id:40
    },
    {
      name:"Sonu",
      email:"harrythakur@gmail.com",
      id:47
    },
    {
      name:"Kunal",
      email:"harrythakur@gmail.com",
      id:49
    },
    {
      name:"Raju",
      email:"harrythakur@gmail.com",
      id:41
    },
    {
      name:"Shyam",
      email:"harrythakur@gmail.com",
      id:42
    },
    {
      name:"Birjesh",
      email:"harrythakur@gmail.com",
      id:429
    },
    {
      name:"Jiya",
      email:"harrythakur@gmail.com",
      id:422
    },
    {
      name:"JiyaSH;",
      email:"harrythakur@gmail.com",
      id:422
    },
    {
      name:"JiyaJJI",
      email:"harrythakur@gmail.com",
      id:422233
    },
    {
      name:"JiyaKMS",
      email:"harrythakur@gmail.com",
      id:4221
    },
    {
      name:"Jiya",
      email:"harrythakur@gmail.com",
      id:42289
    },
    
   ]

  return (
    
    <View>
      {/* <Text style={{fontSize:30}}>Hello React Native</Text>
      <Text style={styles.textbox}>Like</Text>
      <Text style={ExStyles.textbox}>Share</Text>
      <Text style={{fontSize:30}}>Comment!!!</Text>
      <CompanyData/>
      <Button title='On Press Event' onPress={fruit}  color={'green'} />
      <Text style={{fontSize:30, color:'green'}}>Your name is:{name}</Text> */}
      {/* <Text style={{fontSize:25, color:'green', textAlign:'center'}}>Handle Form Data</Text>
      <TextInput
      placeholder='Enter your Name'
      style={styles.TextInput}
      value={name}
      onChangeText={(text)=>{setName(text)}}
      />
      <TextInput
      placeholder='Enter your email'
      style={styles.TextInput}
      value={email}
      onChangeText={(text)=>{setEmail(text)}}
      />
      <TextInput
      placeholder='Enter your password'
      secureTextEntry={showPassword}
      style={styles.TextInput}
      value={password}
      onPress={showPasswordFunc}
      onChangeText={(text)=>{setPassword(text)}}
      />
      <View style={{marginBottom:10}}>
        <Button color={'green'} title='Print Value' onPress={()=>setDisplay(true)}/>
      </View>
      <Button title='Clear input Value' onPress={()=>resetFormData()} />
        <View>

        {
          display? <View>
            <Text style={{fontSize:25}}>Your Name is :{name}</Text>
            <Text style={{fontSize:25}}>Your Email is :{email}</Text>
            <Text style={{fontSize:25}}>Your password is :{password}</Text>
          </View>
          : null
        }
        </View> */}
        <View>
          <FlatList
          data={employiesDetails}
          renderItem={({item})=> <View style={styles.box}> 
          <Text style={styles.item}>{item.name}</Text>
          <Text style={styles.item}>{item.email}</Text>
            </View>
        }
          // keyExtractor={item=>item.id}
          />
          {/* <ScrollView>
            <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>

          {
            employiesDetails.map((items,index)=><Text style={styles.mapList}>{items.name}</Text>)
          }
          </View>
          </ScrollView> */}
        </View>
        
    </View>
  );

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


export default App;
