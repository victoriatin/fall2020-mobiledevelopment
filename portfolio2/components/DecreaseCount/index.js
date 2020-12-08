import React from 'react';
import { View, Button } from 'react-native';

function DecreaseCount(props) {
  return (
    <View>
      <Button 
      title="Decrease"
      onPress={() => {props.dispatch({"type": "decrement"}) }}/>
    </View>
  );
}

export default DecreaseCount;
