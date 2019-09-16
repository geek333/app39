import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import RegForm from './app/components/RegForm';



export default class app extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <RegForm/>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    backgroundColor: '#fff',
    alignItems: 'center',
    padding:15,
  },
});
