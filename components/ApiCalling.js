import {useEffect, useState} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';

export const ApiCalling = () => {
  const [data, setData] = useState(undefined);

  const getAPIData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    console.warn('Hello', result);
    setData(result);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  console.warn('Data', data);
  return (
    // <ScrollView>
    //   <Text>Api Calling</Text>
    // {data.length?
    // data.map((item,index)=>
    //   <View style={{borderWidth:5, borderColor:"#ccc", margin:10}}>
    //     <Text>ID:{item.id}</Text>
    //     <Text>Title:{item.title}</Text>
    //     <Text>Body:{item.body}</Text>
    //   </View>):null}
    // </ScrollView>
    <View>
        <Text>
            Api Calling With FlatList
        </Text>
        {
            data.length?
            <FlatList 
            data={data}
            renderItem={({item})=><View style={{backgroundColor:"#ccc", borderBlockColor:"orange", borderRadius:5, borderWidth:5, margin:10}}>
                <Text style={{fontSize:30}}>ID: {item.id}</Text>
                <Text>Title: {item.title}</Text>
                <Text>Body :{item.body}</Text>
            </View>}
            />:null
        }
    </View>
  );
};
