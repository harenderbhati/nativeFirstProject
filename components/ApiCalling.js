import {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

export const ApiCalling = () => {
  const [data, setData] = useState(undefined);

  const getAPIData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
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
    <View>
      <Text>Api Calling</Text>
    {data?
      <View>
        <Text>ID:{data.id}</Text>
        <Text>Title:{data.title}</Text>
      </View>:null}
    </View>
  );
};
