import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import DraggableFlatList from 'react-native-draggable-flatlist'
 
class ValueList2 extends Component {
 
  state = {
    data: ["Family , Firends , Cooperation","Achivements , Goals ,Purpose","Choices , Self Reliance , Free WIll","Play , Pleasure , Enjoyment", "Safety , Confort , Shelter"].map((d, index) => ({
      key: `item-${index}`,
      label: d,
     }))
  }
 
  renderItem = ({ item, index, move, moveEnd, isActive }) => {
    return (
      
      <TouchableOpacity
        style={{ 
          height: 60, 
          backgroundColor: isActive ? '##f2f2f2' : item.backgroundColor,
          alignItems: 'center', 
          justifyContent: 'center' 
        }}
        onLongPress={move}
        onPressOut={moveEnd}
      >
        <Text style={{ 
          fontWeight: 'bold', 
          color: '#006600',
          fontSize:14,
        }}>{item.label}</Text>
      </TouchableOpacity>

     
    )
  }
 
  render() {
    return (
      <View style={{ flex: 1 }}>
        
        <View> 
          <Text style={{fontSize:28}}>Your Values</Text>
        </View>
        <View> 
          <Text style={{fontSize:14}}>Think about what is more important to you and order the items from mpst to leas important</Text>
        </View>
        
        <DraggableFlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => `draggable-item-${item.key}`}
          scrollPercent={5}
          onMoveEnd={({ data }) => this.setState({ data })}
        />
          <View>
          <TouchableOpacity>
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    )
  }
}
 
export default ValueList2