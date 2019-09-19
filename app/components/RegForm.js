import React from 'react';
import { StyleSheet,
    Text, 
    View,
    TextInput,
    TouchableOpacity, 
    AsyncStorage,
    ToastAndroid, 
    Alert,} from 'react-native';

import {Actions} from 'react-native-router-flux';
import Router from './Routers'
import validation from './validation'
import validate from './validation_wrapper'
import TextField from './textfield'

export default class RegForm extends React.Component {

constructor(props) {
    super(props);

    this.state = {
      name:'',
      nameError:'',
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
      confirmPassword: '',
      confirmPasswordError:''
    }
  }

  register = () =>{

    const { name }  = this.state ;
    const { email }  = this.state ;
    const { password }  = this.state ;
    const {confirmPassword} = this.state

    if(name === '' || email === '' || password === '') {
        Alert.alert(
        'Error',
        'All Fields are mandatory',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
    }else if(confirmPassword !== password) {
        Alert.alert(
        'Error',
        'Password and Confirm password should match',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
    }else{
      this.props.navigation.navigate('Login')
    }
  }

  signIn()
  {
    Actions.login();
  }
    render(){

        return (
            <View style={styles.RegForm}>
               <Text style={styles.header}>Registration</Text>
               
               <TextInput style={styles.textinput} underlineColorAndroid={'transparent'} placeholder="Your Name" 
               onChangeText={(value) => this.state.name = value}
               />
               
               <TextInput style={styles.textinput} underlineColorAndroid={'transparent'} placeholder="Your Email" 
               onChangeText={(value) => this.state.email = value}
               />
             
               <TextInput style={styles.textinput} secureTextEntry={true} underlineColorAndroid={'transparent'} placeholder="Password" 
               onChangeText={(text) => this.state.password = text}/>
             
               <TextInput style={styles.textinput} secureTextEntry={true} underlineColorAndroid={'transparent'} placeholder="Confirm Password" 
               onChangeText={(text) => this.state.confirmPassword = text}/>
             
              <TouchableOpacity style={styles.button}
              onPress={this.register}>
                  <Text style={styles.btntext}>Sign Up</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}
              onPress={() => this.props.navigation.navigate('Login')}>

                  <Text style={styles.btntext}>Sign In</Text>
              </TouchableOpacity>
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
      //color:'#fff',
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
