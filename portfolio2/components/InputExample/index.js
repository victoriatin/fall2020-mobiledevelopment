import React, {Component} from 'react';
import {Button, TextInput, Text, View, StyleSheet} from 'react-native';


export default class InputExample extends Component {
  constructor(props){
    super(props)
    this.state = {TextInputValue: ''}
  }
 

render() {
   const {TextInputValue} = this.state;
    return (
      <View>
     
      <TextInput
      style={styles.textInput}
      placeholder="Enter Personal Best"
      onChangeText={TextInputValue => this.setState({TextInputValue})}
      
      />
     
      <Text>Personal Best: {this.state.TextInputValue}</Text>
      </View>
    );
}
}
const styles = StyleSheet.create({
  textInput: {
    height: 40,
    padding: 6
  }
});