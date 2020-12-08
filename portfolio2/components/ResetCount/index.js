import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

function ResetCount(props) {
  return (
    <View>
      <Button 
      title="Reset"
      onPress={() => {props.dispatch({"type": "reset"}) }}/>
    </View>
  );
}

export default ResetCount;
