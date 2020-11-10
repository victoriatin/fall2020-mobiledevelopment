
import { Button, Divider } from 'react-native-elements';
import React, { useState , Component }  from 'react';
import { StyleSheet, Text, View } from 'react-native';


class VotingApp extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      Result: ''
    };
  }
 handleClick = () => {
   this.setState({ result: 'Dogs'});
}
 handleClick2 = () => {
   this.setState({ result: 'Cats'});
}
handleClick3 = () => {
  this.setState({ result: 'Reptiles/Amphibians'});
}
handleClick4 = () => {
  this.setState({ result: 'Bunny/Rat/Hamster/Guinea Pig'});
}
handleClick5 = () => {
  this.setState({ result: 'Birds'});
}
    render(){
      const {result} = this.state;
      return(
        <View>
          <Text style={styles.headerText}>Vote For Your Favorite Pet!</Text>
        <Text style={styles.baseText}>Dogs</Text>
        <View style={styles.ButtonSection}>
          <Button
             onPress={this.handleClick}
           title="Vote"
           style={styles.buttonStyle}
          />
          </View>
          <Text style={styles.baseText}>Cats</Text>
          <View style={styles.ButtonSection}>
          <Button
             onPress={this.handleClick2}
           title="Vote"
           style={styles.buttonStyle}
          />
          </View>
           <Text style={styles.baseText}>Reptiles/Amphibians</Text>
           <View style={styles.ButtonSection}>
          <Button
             onPress={this.handleClick3}
           title="Vote"
           style={styles.buttonStyle}
          />
          </View>
            <Text style={styles.baseText}>Bunny/Rat/Hamster/Guinea Pig</Text>
            <View style={styles.ButtonSection}>
          <Button
             onPress={this.handleClick4}
           title="Vote"
           style={styles.buttonStyle}
          />
          </View>
              <Text style={styles.baseText}>Birds</Text>
              <View style={styles.ButtonSection}>
          <Button
             onPress={this.handleClick5}
           title="Vote"
           style={styles.buttonStyle}
          />
          </View>
          <Divider style={styles.DividerResult} />
          <Text style={styles.resultText}>Result:</Text><Text style={styles.headerText}> {result} </Text>
        </View> 
        );
    }
}
export default VotingApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: "#008b8b",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },

  baseText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    padding: 5
  },

  resultText: {
    fontSize: 40,
    color: "#dc143c",
    fontWeight: "bold",
    textAlign: "center"
  },
  ButtonSection: {
    width: '100%',
    justifyContent: "center",
    alignItems: "center"
 },
  buttonStyle: {
    color: "White",
    textAlign: "center",
    backgroundColor: "Blue"
  },
  DividerResult: {
    backgroundColor: "black",
    margin: 10,
    padding: 2
  }
});
