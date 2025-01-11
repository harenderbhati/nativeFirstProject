import {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export const FormInput = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');

//    const getApiData =async()=>{
//       const url="http://10.0.2.2:3000/users"
//       let result =await fetch(url)
//       result= await result.json()
//       console.warn("result",result)
//    }
//    getApiData()

  const saveData = async () => {
    // console.warn('hello', name, age, email);
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, age, email}),
    });
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
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={text => setAge(text)}
        placeholder="enter your age"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="enter your email"
      />
      <Button title="Save Data" onPress={saveData} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'skyblue',
    borderWidth: 2,
    margin: 20,
  },
});
