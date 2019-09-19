import React from 'react';
import { StyleSheet,
    Text, 
    View,
    TextInput,
    TouchableOpacity, } from 'react-native';

export default class RegForm extends React.Component {
    render(){

        return (
            <View style={styles.RegForm}>
               <Text style={styles.header}>Registration</Text>
               
               
               <TextInput style={styles.textinput} underlineColorAndroid={'transparent'} placeholder="Your Email" />
             
               <TextInput style={styles.textinput} secureTextEntry={true} underlineColorAndroid={'transparent'} placeholder="Password" />
             
              <TouchableOpacity style={styles.button}>
                  <Text style={styles.btntext}>Sign In</Text>
              </TouchableOpacity>


              <View>
                 <TouchableOpacity>
                        <Text>Sign UP</Text>
                 </TouchableOpacity>
              </View>
            </View>
          );
    }
  
}

const styles = StyleSheet.create({
  RegForm: {
    alignSelf : 'stretch',
  },
  header:{
      fontSize :24,
      color : '#59cbbd',
      paddingBottom : 10,
      marginBottom : 40,
      borderBottomColor : '#199187',
      borderBottomWidth: 1,
  },
  textinput :{
      alignSelf: "stretch",
      height:40,
      marginBottom:30,
      color:'#fff',
      borderBottomColor:'#59cbbd',
      borderBottomWidth:1,
  },
  button:
  {
    alignSelf:"stretch",
    alignItems:"center",
    padding:20,
    backgroundColor:'#59cbbd',
    marginTop:30,
  },
  btntext:
  {
    color:'#fff',
    fontWeight:"bold",
  }
});
