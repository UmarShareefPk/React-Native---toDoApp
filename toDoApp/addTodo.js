import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card, ListItem, Button, Input, Tooltip } from 'react-native-elements';

const AddTodo = ({setShowAddToDoModal, addInTodos}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const add = ()=>{
        addInTodos({
            id : Math.random().toString(),
            title : title,
            description : description
        });
    }

    return (
      <View style={styles.container}>       
        <Button
          onPress={() => setShowAddToDoModal(false)}
          title="X"
          type="clear"
        />
       
         
        <View style={styles.container}>
        <Input placeholder='Title' defaultValue={title} onChangeText={value => setTitle(value)}/>
        <Input multiline placeholder='Description' defaultValue={description} onChangeText={value => setDescription(value)}/>
        
        <Button title="Add" onPress={add} />
           
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        flexDirection: "column",
        justifyContent: 'flex-start' ,
        alignItems:"center",
        width:400,
        marginTop:30,
        backgroundColor:"#efefef"
    }
});

export default AddTodo
