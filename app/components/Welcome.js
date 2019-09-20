import React from 'react';
import Video from 'react-native-video'

export class Welcome extends React.Component() {
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
