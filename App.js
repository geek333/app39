import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import '@expo/vector-icons';
import {
  createAppContainer
} from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import RegForm from './app/components/RegForm';
import Login from './app/components/Login';
import Routers from './app/components/Routers';

const RootStack = createStackNavigator({
  RegForm:{
      screen: RegForm,
  }, 
  Login: {
    screen: Login,
  },
  Routers: {
    screen: Routers,
  },
},
{
    initialRouteName: 'RegForm',
  }
  )

const App = createAppContainer(RootStack);

class app extends React.Component {
  render(){
    return ( <App/>);
    //   <View style={styles.container}>
    //     <RegForm/>
    //   </View>
    // );
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

export default App;
