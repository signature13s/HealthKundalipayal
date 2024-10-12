import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/Login';
import Register from './src/Register';
import Onboarding1 from './src/Onboarding1';
import Language from './src/Language';
import Onboarding2 from './src/Onboarding2';
import Onboarding3 from './src/Onboarding3';
import Onboarding4 from './src/Onboarding4';
import Onboarding5 from './src/Onboarding5';
import Onboarding6 from './src/Onboarding6';
import Onboarding7 from './src/Onboarding7';
//import Onboarding8 from './src/Onboarding8';
import Onboarding9 from './src/Onboarding9';
import Onboarding10 from './src/Onboarding10';
import Onboarding11 from './src/Onboarding11';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding1"
      screenOptions={{headerShown: false}}>
        <Stack.Screen name='Onboarding1' component={Onboarding1} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Language' component={Language} />
        <Stack.Screen name='Onboarding2' component={Onboarding2} />
        <Stack.Screen name='Onboarding3' component={Onboarding3} />
        <Stack.Screen name='Onboarding4' component={Onboarding4} />
        <Stack.Screen name='Onboarding5' component={Onboarding5} />
        <Stack.Screen name='Onboarding6' component={Onboarding6} />
        <Stack.Screen name='Onboarding7' component={Onboarding7} />
        <Stack.Screen name='Onboarding9' component={Onboarding9} />
        <Stack.Screen name='Onboarding10' component={Onboarding10} />
        <Stack.Screen name='Onboarding11' component={Onboarding11} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});