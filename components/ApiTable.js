import {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Button ,Modal, TextInput} from 'react-native';

export const ApiTable = () => {
  const [data, setData] = useState([]);
  const [showModal,setShowModal]=useState(false)
  const [selectedUsers,setSelectedusers]=useState( undefined)

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

  const updateUser=(data)=>{
      setShowModal(true)
      setSelectedusers(data)
  }


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
              <View key={index} style={{flex: 1}}>
                <Button onPress={()=> deleteUser(item.id)} title="Delete" />
              </View>
              <View style={{flex: 1}}>
                <Button onPress={()=>updateUser(item)} title="Update" />
              </View>
            </View>
          ))
        : null}

          //----------Modal for the update Api---------------------
          <Modal visible={showModal} transparent={true} >
            <UserModal  setShowModal={setShowModal} selectedUsers={selectedUsers} />
          </Modal>

    </View>
  );
};


 const UserModal =(props)=>{

      const [name,setName]=useState("")
      const [age,setAge]=useState(undefined)
     

      useEffect(()=>{
        if(props.selectedUsers){
          setName(props.selectedUsers.name)
          setAge(props.selectedUsers.age.toString())
        }

      },[props.selectedUsers])

        console.warn("Data",name,age)
  return(
    <View style={styles.centeredView}>
              <View style={styles.modalView}>
              <TextInput style={styles.textData} value={name} />
              <TextInput style={styles.textData} value={age} />
              {/* <TextInput style={styles.textData} /> */}
              <View style={{marginTop:10}}>
                <View style={{marginBottom:10}}>
                  <Button title='Update' />
                </View>
              <Button onPress={()=>props.setShowModal(false)}  title='Close' />
              </View>
              </View>
            </View>
  )
 }

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
  centeredView:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    marginTop:50
  },
  modalView:{
    backgroundColor:"orange",
    padding:20,
    borderRadius:5,
    elevation:10,
    opacity:0.80,
  },
  textData:{
    // fontSize:30,
    borderColor:"white",
    borderRadius:5,
    backgroundColor:"#ccc",
    width:300,
    margin:10
  }
});
