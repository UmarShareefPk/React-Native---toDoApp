import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, FlatList, Modal } from 'react-native';
import { Card, ListItem, Button, Icon, Tooltip, Input } from 'react-native-elements';
import AddTodo from './addTodo';

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [showAddToDoModal, setShowAddToDoModal] = useState(false);

    useEffect(() => {
        const toDos = [
            {id:1 , title : "Open laptop", description:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available"},
            {id:2 , title : "Setup table", description:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."},
            {id:3 , title : "Run Windows", description:"What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
            {id:4 , title : "Play CSGO", description:"Counter-Strike: Global Offensive is a multiplayer first-person shooter developed by Valve and Hidden Path Entertainment. It is the fourth game in the Counter-Strike series. Developed for over two years, Global Offensive was released for Windows, macOS, Xbox 360, and PlayStation 3 in August 2012, and for Linux"},
            
        ] ;
        
        setTodos(toDos);
       
    }, []);

    const addInTodos = (todo) =>{
        console.log(todo);
        setTodos([todo, ...todos]);
        setShowAddToDoModal(false);
    }

    const renderTodo = ({item}) => {
        return (
          <Card containerStyle={styles.cardContainer}>
            <Card.Title style={styles.cardTitle}>{item.title}</Card.Title>
            <Text style={styles.cardBody}>{item.description}</Text>
          </Card>
        );
    }

    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={showAddToDoModal}
        >
          <AddTodo setShowAddToDoModal={setShowAddToDoModal} addInTodos={addInTodos} />
        </Modal>
        <Button
          buttonStyle={styles.addBtn}
          title="Add To DO"
          onPress={() => setShowAddToDoModal(true)}
        />
        <FlatList
          data={todos}
          renderItem={renderTodo}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        flexDirection: "column",
        justifyContent: 'flex-start',
        width:350,
        marginTop:30,
        backgroundColor:"#efefef"
    },
    cardContainer :{
        padding: 10,
        
    },
    cardTitle : {
        color:"indigo"
    },
    cardBody : {
        color:"slategray"
    },
    addBtn :{
        backgroundColor:"green"
    }
});

export default Home
