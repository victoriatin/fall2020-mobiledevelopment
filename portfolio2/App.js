import 'react-native-gesture-handler';
import React, { useState, useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button, Input } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import InputExample from './components/InputExample';
import {state, reducer} from './components/ApplicationState';
import ShowCount from './components/ShowCount';
import DecreaseCount from './components/DecreaseCount';
import ResetCount from './components/ResetCount';

function LoginScreen(props) {
  // Track the state of the loggedIn variable
 const [loggedIn, setLoggedIn] = useState(false);
 // Track what is entered as the username
 const [username, setUsername] = useState('username');
 // Track what is entered as the password
 const [password, setPassword] = useState('password');

 // Verify the correct username and password
 const verifyUser = () => {
   if (username == "username1" && password == "password1") {
     // Change the state of the LoggedIn variable
     setLoggedIn(true);
   }
 }

 return (
   <View style={styles.container}>
     {
       loggedIn ? (
         <View>
           <Text style={styles.paragraph}>You are logged in!</Text>
           <Button
       title="Go to Home"
       onPress={() => props.navigation.navigate('Home')}
     />
         </View>
       ) : (
         <View>
           <Input placeholder='Username' onChangeText={ (value) => { setUsername(value) } } />
           <Input placeholder="Password" secureTextEntry={true} onChangeText={ (value) => { setPassword(value) } } />
           <Button title="Submit" onPress={() => { verifyUser() } } />
         </View>
       )
     }
   </View>
 );
}

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
        <Button
        title="Pushups Tracker"
        onPress={() => props.navigation.navigate('Pushups')}
        style={styles.buttonStyle}
      />
        <Button
        title="Jump Rope Tracker"
        onPress={() => props.navigation.navigate('Jumprope')}
        style={styles.buttonStyle}
      />
    </View>
  );
}

function Exercise1Screen(props) {
  const [currentState, dispatch] = useReducer(reducer, state);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.headerText}>Running Laps Tracker</Text>
      <ShowCount currentState={currentState} />
        <Button
        title="Increase" onPress={() => { dispatch({"type": "increment"}) } } />
        <DecreaseCount dispatch={dispatch} />
        <ResetCount dispatch={dispatch} />
        <Card>
      <InputExample />
      </Card>
      <Card.Divider />
      <Button
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
        style={styles.buttonStyle}
      />
   
    </View>
  );
}
function Exercise2Screen(props) {
  const [currentState, dispatch] = useReducer(reducer, state);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.headerText}>Weight Reps Tracker</Text>
      <ShowCount currentState={currentState} />
        <Button
        title="Increase" onPress={() => { dispatch({"type": "increment"}) } } />
        <DecreaseCount dispatch={dispatch} />
        <ResetCount dispatch={dispatch} />
        <Card>
      <InputExample />
      </Card>
      <Card.Divider />
      <Button
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
        style={styles.buttonStyle}
      />
  
    </View>
  );
}
function Exercise3Screen(props) {
  const [currentState, dispatch] = useReducer(reducer, state);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.headerText}>Pushups Tracker</Text>
      <ShowCount currentState={currentState} />
        <Button
        title="Increase" onPress={() => { dispatch({"type": "increment"}) } } />
        <DecreaseCount dispatch={dispatch} />
        <ResetCount dispatch={dispatch} />
        <Card>
      <InputExample />
      </Card>
      <Card.Divider />
      <Button
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
        style={styles.buttonStyle}
      />
    
    </View>
  );
}

function Exercise4Screen(props) {
  const [currentState, dispatch] = useReducer(reducer, state);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.headerText}>Jump Rope Tracker</Text>
      <ShowCount currentState={currentState} />
        <Button
        title="Increase" onPress={() => { dispatch({"type": "increment"}) } } />
        <DecreaseCount dispatch={dispatch} />
        <ResetCount dispatch={dispatch} />
        <Card>
      <InputExample />
      </Card>
      <Card.Divider />
      <Button
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
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
      <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Laps" component={Exercise1Screen} />
        <Drawer.Screen name="Reps" component={Exercise2Screen} />
        <Drawer.Screen name="Pushups" component={Exercise3Screen} />
        <Drawer.Screen name="Jumprope" component={Exercise4Screen} />
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
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
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
