import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ButtonExample from './components/ButtonExample';

function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.headerText}>Home</Text>
      <Button
        title="Running Laps Tracker"
        onPress={() => props.navigation.navigate('Laps')}
        style={styles.buttonStyle}
      />
       <Button
        title="Weight Reps Tracker"
        onPress={() => props.navigation.navigate('Reps')}
        style={styles.buttonStyle}
      />
    </View>
  );
}

function Exercise1Screen(props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.headerText}>Running Laps Tracker</Text>
      <ButtonExample />
      <Button
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
        style={styles.buttonStyle}
      />
       <Button
        title="Weight Reps Tracker"
        onPress={() => props.navigation.navigate('Reps')}
        style={styles.buttonStyle}
      />
    </View>
  );
}
function Exercise2Screen(props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.headerText}>Weight Reps Tracker</Text>
      <ButtonExample />
      <Button
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
        style={styles.buttonStyle}
      />
       <Button
        title="Running Laps Tracker"
        onPress={() => props.navigation.navigate('Laps')}
        style={styles.buttonStyle}
      />
    </View>
  );
}


const Stack = createStackNavigator();

function Home() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Laps" component={Exercise1Screen} />
        <Stack.Screen name="Reps" component={Exercise2Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
  },
  buttonStyle: {
    marginTop :30,
  }
});
