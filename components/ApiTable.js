import {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export const ApiTable = () => {
  const [data, setData] = useState([]);

  const getApiData = async () => {
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  const deleteUser= async(id)=>{
    const url = 'http://10.0.2.2:3000/users';
    let resut = await fetch(`${url}/${id}`, {
        method:"delete"
    });
    resut= await resut.json()
    if (resut){
        console.warn("User Deleted!!!")
    }
    getApiData()
  }

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <View style={styles.container}>

        <View style={styles.dataWraper}>
        <View style={{flex: 1}}>
                <Text>Name</Text>
              </View>
              <View style={{flex: 2}}>
                <Text>Age</Text>
              </View>
              <View style={{flex: 2}}>
                <Text>Operations</Text>
              </View>
        </View>

      {data.length
        ? data.map((item, index) => (
            <View style={styles.dataWraper}>
              

              <View style={{flex: 1}}>
                <Text>{item.name}</Text>
              </View>
              <View style={{flex: 1}}>
                <Text>{item.age}</Text>
              </View>
              {/* <View style={{flex: 1}}>
                <Text>{item.email}</Text>
              </View> */}
              <View style={{flex: 1}}>
                <Button onPress={()=> deleteUser(item.id)} title="Delete" />
              </View>
              <View style={{flex: 1}}>
                <Button title="Update" />
              </View>
            </View>
          ))
        : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dataWraper: {
    // flex: 1,
    padding:10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'orange',
    margin: 5,
  },
});
