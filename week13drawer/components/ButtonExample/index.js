import React, { useState, useEffect }  from "react";
import { StyleSheet, Text, View, Button } from 'react-native';


export default function ButtonExample() {

  // Functional Component. Use useState() to setup state
  let [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `Count is ${counter}`;
  }, [counter]);

  // Show the current counter.
  // For every click of the button, update the counter.
  return (
    <View>
      <Text style={styles.headerText}>Count: {counter}</Text>

    <View style={{ flex: 1, margin: 5 }}>
      <Button title="Add" 
      onPress={() => {setCounter(counter + 1)} }
      />
   </View>

    <View style={{ flex: 1}}>
      <Button title="Reset" 
      onPress={() => {setCounter(counter = 0)} } 
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    color: "#FF0000",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonStyle: {
    marginTop :20,
  }
});

