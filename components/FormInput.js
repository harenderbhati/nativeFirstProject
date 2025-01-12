import {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export const FormInput = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');


  //-----------Errors States----------------

  const [nameError,setNameError]=useState(false)
  const [emailError,setEmailError]=useState(false)
  const [ageError,setAgeError]=useState(false)

//    const getApiData =async()=>{
//       const url="http://10.0.2.2:3000/users"
//       let result =await fetch(url)
//       result= await result.json()
//       console.warn("result",result)
//    }
//    getApiData()

  const saveData = async () => {
    if (!name){
        setNameError(true)
    }else{
        setNameError(false)
    }
    if (!age){
        setAgeError(true)
    }else{
        setAgeError(false)
    }
    if (!email){
        setEmailError(true)
    }else{
        setEmailError(false)
    }
    if(!name || !age || !email){
       return false;
    }

    // console.warn('hello', name, age, email);
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, age, email}),
    });
    setName("")
    setAge(0)
    setEmail("")
  };

  return (
    <View>
      <Text style={{fontSize: 30}}>Post Api with Input Feilds..</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={text => setName(text)}
        placeholder="enter your name"
      />
      {
        nameError?<Text style={styles.errorText}> Please Enter a valid name</Text>:null
      }
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={text => setAge(text)}
        placeholder="enter your age"
      />
      {
        ageError? <Text style={styles.errorText}>Please Enter a valid age</Text>:null
      }
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="enter your email"
      />
      {
        emailError ? <Text style={styles.errorText}> Please Enter a valid email</Text>:null
      }
      <Button title="Save Data" onPress={saveData} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'skyblue',
    borderWidth: 2,
    margin: 20,
    marginBottom:5
  },
  errorText:{
    color:"red",
    marginLeft:20
  }
});
