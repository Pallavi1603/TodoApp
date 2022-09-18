import { useState }  from "react";
import {View,TextInput,StyleSheet,FlatList,Text,KeyboardAvoidingView,TouchableOpacity,} from "react-native";



const Search=()=>{
  const [data,setData] =useState( [
    { id: '1', title: 'Milk' },
    { id: '2', title: 'Coffee' },
    { id: '3', title: 'Apple' },
    { id: '4', title: 'Bread' }
  ]);
  
  const [textInput,setTextInput]=useState();
 
  const addData=()=>{
    console.log(textInput);
    const newData={
      id:Math.random(),
      title:textInput,
      completed:false
    };
    setData([...data,newData]);
  }
 
  

    return(
       <View style={styles.body}>
          <TextInput
            placeholder="Search"
            style={styles.search}/>
           <FlatList
           style={styles.flat}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>{item.title}</Text>

          </View>

        )}
      />
       <View style={styles.writeTaskWrapper}>
           
               <TextInput
            placeholder="Write a text"
            style={styles.input}
            value={textInput}
            onChangeText={(text)=>setTextInput(text)}/>
            <TouchableOpacity >
              <View style={styles.addWrapper}>
            <Text style={styles.addText} onPress={addData}>
                    +
                </Text>
                </View>
            </TouchableOpacity>
            </View>
     
         
       </View>
        
    )
}

const styles=StyleSheet.create({
    body:{
      paddingHorizontal:60,
       paddingTop:40 
    },
    search:{
        borderWidth:2,
        height:53,
        width:330,
        fontSize:20,
        color:"black",
        borderColor:"#ffffff",
        backgroundColor:"white",
        borderRadius:10,
      
        
    },
    listItem: {
        marginTop: 10,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        width: '80%',
        marginHorizontal:30,
        borderRadius:10
      },
      flat:{
          marginTop:80
      },
      listItemText: {
        fontSize: 18,
      
      },
      writeTaskWrapper: {
        position: 'absolute',
        top:100,
        left:60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        
      },
      input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 10,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 300,
      },
      addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
        marginLeft:60,
      },

     

})
export default Search;