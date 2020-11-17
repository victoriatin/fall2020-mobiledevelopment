import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
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


const Drawer = createDrawerNavigator();

function Home() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Laps" component={Exercise1Screen} />
        <Drawer.Screen name="Reps" component={Exercise2Screen} />
        </Drawer.Navigator>
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
