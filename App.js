import React from 'react';
<<<<<<< HEAD
import {Video} from 'react-native-video';

export class App extends React.Component() {
    render(){

        return (
            <View style={styles.container}>
              <Video source={{uri: "https://youtu.be/Pb4N6oZCD9o"}}   // Can be a URL or a local file.
               ref={(ref) => {
                 this.player = ref
               }}                                      // Store reference
               onBuffer={this.onBuffer}                // Callback when remote video is buffering
               onError={this.videoError}               // Callback when video cannot be loaded
               style={styles.backgroundVideo} />
            </View>
          );
    }
=======
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
  
>>>>>>> 6c7f772345bc3bb319a21632bce3172f8a6ed7c1
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default App;
