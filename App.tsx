

import React, { useState } from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
  SectionList,
  StatusBar,
  Image,
} from 'react-native';
import CompanyData from './components/CompanyData';
import ExStyles from './style'
import UserData from './components/UserData';
import Responsive from './components/Responsive';
import ButtonComponent from './components/ButtonComponent';
import RadioButtonComponent from './components/RadioButtonComponent';
import DynamicRadioButtons from './components/DynamicRadioButtons';
import ActivityLoader from './components/ActivityLoader';
import ModalComponent from './components/ModalComponent';
import PressableComponent from './components/PressableComponent';
import PlatFormComponent from './components/PlatformComponent';
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { TabNavigation } from './components/TabNavigation';
import { ApiCalling } from './components/ApiCalling';
import { FormInput } from './components/FormInput';
import { ApiTable } from './components/ApiTable';
import { SearchBox } from './components/SearchBox';
import { RefComponent } from './components/RefComponent';
import { AsyncStorageComponent } from './components/AsyncStorageComponent';
import { Header } from './components/Redux/Header';
import { Products } from './components/Redux/Products';



function App(): React.JSX.Element {

  const [name, setName]=useState('')
  const [password,setPassword]=useState('')
  const [email,setEmail]=useState('')
  const [display,setDisplay]=useState(false)
  const [showPassword,setShowPassword]=useState(false)

  const stack =createNativeStackNavigator();

  const headerFunc =()=>{
    console.warn("header btn pressed");
    
  }

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
      data:["PHP","Js","Angular"],
      email:"harrythakur@gmail.com",
      id:1
    },
    {
      name:"Karishma",
      data:["PHP","Js","Angular","Golang"],
      email:"harrythakur@gmail.com",
      id:2
    },
    {
      name:"Nishu",
      data:["Go","Rust","Ruby"],
      email:"harrythakur@gmail.com",
      id:3
    },
    {
      name:"Shilpa",
      data:["PHP","React","Next"],
      email:"harrythakur@gmail.com",
      id:40
    },
    {
      name:"Sonu",
      data:["Android","Java","native"],
      email:"harrythakur@gmail.com",
      id:47
    },
    // {
    //   name:"Kunal",
    //   email:"harrythakur@gmail.com",
    //   id:49
    // },
    // {
    //   name:"Raju",
    //   email:"harrythakur@gmail.com",
    //   id:41
    // },
    // {
    //   name:"Shyam",
    //   email:"harrythakur@gmail.com",
    //   id:42
    // },
    // {
    //   name:"Birjesh",
    //   email:"harrythakur@gmail.com",
    //   id:429
    // },
    // {
    //   name:"Jiya",
    //   email:"harrythakur@gmail.com",
    //   id:422
    // },
    // {
    //   name:"JiyaSH;",
    //   email:"harrythakur@gmail.com",
    //   id:422
    // },
    
   
    
  ]

  const products=[
    {
      name:"Samsung Mobile",
      color:"white",
      price:3000,
      image:"https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg"
    },
    {
      name:"Iphone",
      color:"golden",
      price:93000,
      image:"https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg"
    },
    {
      name:"Lava Mobile",
      color:"Blue",
      price:9000,
      image:"https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg"
    },
    {
      name:"Vivo Mobile",
      color:"red",
      price:7000,
      image:"https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg"
    },
    {
      name:"Oppo Mobile",
      color:"green",
      price:13000,
      image:"https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg"
    },
    {
      name:"Infinix Mobile",
      color:"white",
      price:88000,
      image:"https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg"
    }
  ]
  
  return (
    <View >
      <Text>Hello world</Text>
      <Header/>
      <ScrollView>
        {
          products.map((item,index)=><Products item={item} index={index}/>)
        }
      </ScrollView>
      
    </View>
      // <AsyncStorageComponent/>
      // <RefComponent/>
      // <SearchBox/>
      // <ApiTable/>
      // <FormInput/>
   

    // <ApiCalling/>
    // <TabNavigation/>

    // <NavigationContainer>
    //   <stack.Navigator
    //   screenOptions={{ 
    //     headerStyle:{
    //       backgroundColor:"green"
    //     },
    //     headerTintColor:"yellow"
    //   }}
    //   >
    //   <stack.Screen name='Login' component={Login}/>
    //   <stack.Screen name='Home' component={Home}
    //   options={{
    //     // title:"user Login",
    //     headerLeft:()=><Button title='Left' onPress={headerFunc}/>,
    //     headerRight:()=><Button title='Right' onPress={headerFunc}/>,
    //     headerStyle:{
    //       backgroundColor:"red"
    //     },
    //     headerTintColor:"white"
    //   }}
    //   />
    //   </stack.Navigator>
    // </NavigationContainer>

    


//     <View style={{flex:1 ,}}>
//     <StatusBar backgroundColor={'orange'}
//       barStyle={'default'}
//      />
//      <PlatFormComponent/>
//       {/* <Responsive/> */}
//       {/* <ButtonComponent/> */}
//       {/* <RadioButtonComponent/> */}
//       {/* <DynamicRadioButtons/> */}
//       {/* <ActivityLoader/> */}
//       {/* <ModalComponent/> */}
//        {/* <PressableComponent/> */}
//       {/* <Text style={{fontSize:30}}>Hello React Native</Text>
//       <Text style={styles.textbox}>Like</Text>
//       <Text style={ExStyles.textbox}>Share</Text>
//       <Text style={{fontSize:30}}>Comment!!!</Text>
//       <CompanyData/>
//       <Button title='On Press Event' onPress={fruit}  color={'green'} />
//       <Text style={{fontSize:30, color:'green'}}>Your name is:{name}</Text> */}
//       {/* <Text style={{fontSize:25, color:'green', textAlign:'center'}}>Handle Form Data</Text>
//       <TextInput
//       placeholder='Enter your Name'
//       style={styles.TextInput}
//       value={name}
//       onChangeText={(text)=>{setName(text)}}
//       />
//       <TextInput
//       placeholder='Enter your email'
//       style={styles.TextInput}
//       value={email}
//       onChangeText={(text)=>{setEmail(text)}}
//       />
//       <TextInput
//       placeholder='Enter your password'
//       secureTextEntry={showPassword}
//       style={styles.TextInput}
//       value={password}
//       onPress={showPasswordFunc}
//       onChangeText={(text)=>{setPassword(text)}}
//       />
//       <View style={{marginBottom:10}}>
//         <Button color={'green'} title='Print Value' onPress={()=>setDisplay(true)}/>
//       </View>
//       <Button title='Clear input Value' onPress={()=>resetFormData()} />
//         <View>

//         {
//           display? <View>
//             <Text style={{fontSize:25}}>Your Name is :{name}</Text>
//             <Text style={{fontSize:25}}>Your Email is :{email}</Text>
//             <Text style={{fontSize:25}}>Your password is :{password}</Text>
//           </View>
//           : null
//         }
//         </View> */}
//         {/* <View>
//           <FlatList
//           data={employiesDetails}
//           renderItem={({item})=> <UserData item={item} />}
         
//           />
//           <ScrollView>
//             <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>

//           {
//             employiesDetails.map((items,index)=><Text style={styles.mapList}>{items.name}</Text>)
//           }
//           </View>
//           </ScrollView>
//         </View> */}
// {/* 
//         <View>
//           <SectionList
//           sections={employiesDetails}
//            renderItem={({item})=><Text style={{fontSize:24,marginLeft:20}}>{item}</Text>}
//            renderSectionHeader={({section:{name}})=><Text style={{fontSize:30, color:'red',}}>{name}</Text>}
//           />
//         </View> */}

        
//      </View>
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
