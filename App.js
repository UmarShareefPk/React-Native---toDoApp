import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './toDoApp/home';

export default function App() {
  return (
    <View style={styles.container}> 
      <View style={styles.header}>
        <Text style={styles.headerText}>Work Maintainer</Text>
      </View>     
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30,
   
  },
  header : {
    padding:10,   
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'indigo',
    width:350
  },
  headerText :{
    fontSize:25,
    color:'white'
  }
});
