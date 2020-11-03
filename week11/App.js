import { Card, Button } from 'react-native-elements';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Victoria Tinsley</Card.Title>
        <Text>Favorite Food 1: Tofu Japchae</Text>
        <Card.Divider />
        <Text>Favorite Food 2: Salmon Nigiri</Text>
        <Card.Divider />
        <Button title="SUBMIT"></Button>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
