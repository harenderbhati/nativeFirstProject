import {Text, View} from 'react-native';

export const Home = (props) => {
  console.log(props.route.params)
  const {name,age}=props.route.params
  
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Home Screen</Text>
      <Text>
        Name:{name}
      </Text>
      <Text>
        Age:{age}
      </Text>
    </View>
  );
};
