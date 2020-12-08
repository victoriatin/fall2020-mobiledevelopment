import React from 'react';
import { StyleSheet } from 'react-native';
import {  Text } from 'react-native-elements';

function ShowCount(props) {
  return <Text style={styles.count}>{props.currentState.count}</Text>;
}

export default ShowCount;

const styles = StyleSheet.create({
  count: {
    color: 'red',
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
  },
});