import 'react-native-gesture-handler';
import React, { useState, useReducer } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Card, Button, Input } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import InputExample from './components/InputExample';
import {state, reducer} from './components/ApplicationState';
import ShowCount from './components/ShowCount';
import DecreaseCount from './components/DecreaseCount';
import ResetCount from './components/ResetCount';
import LogWorkout from './components/LoggedWorkout';

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
     <ImageBackground source={require('./logback.jpg')} style={styles.bimage}>
     <Text style={styles.headerText2}>Fitness Tracker App</Text>
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
     </ImageBackground>
   </View>
 );
}

function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <ImageBackground source={require('./barbel.jpg')} style={styles.bimage}>
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
      <Button
        title="Log Workouts"
        onPress={() => props.navigation.navigate('Finish')}
        style={styles.buttonStyle}
      />
      </ImageBackground>
    </View>
  );
}

function Exercise1Screen(props) {
  const [currentState, dispatch] = useReducer(reducer, state);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ImageBackground source={require('./track.jpg')} style={styles.bimage}>
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
   </ImageBackground>
    </View>
  );
}
function Exercise2Screen(props) {
  const [currentState, dispatch] = useReducer(reducer, state);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ImageBackground source={require('./weights.jpg')} style={styles.bimage}>
      <Text style={styles.headerText2}>Weight Reps Tracker</Text>
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
  </ImageBackground>
    </View>
  );
}
function Exercise3Screen(props) {
  const [currentState, dispatch] = useReducer(reducer, state);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ImageBackground source={require('./pushups.jpg')} style={styles.bimage}>
      <Text style={styles.headerText2}>Pushup Tracker</Text>
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
    </ImageBackground>
    </View>
  );
}

function Exercise4Screen(props) {
  const [currentState, dispatch] = useReducer(reducer, state);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ImageBackground source={require('./jumprope.jpg')} style={styles.bimage}>
      <Text style={styles.headerText2}>Jump Rope Tracker</Text>
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
   </ImageBackground>
    </View>
  );
}
function FinishScreen(props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ImageBackground source={require('./barbel.jpg')} style={styles.bimage}>
    <LogWorkout />
<Button
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
        style={styles.buttonStyle}
      />
      </ImageBackground>
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
        <Drawer.Screen name="Finish" component={FinishScreen} />
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
   headerText2: {
     color: 'white',
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
  },
  buttonStyle: {
    marginTop :30,
  },
  bimage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
   }
});
