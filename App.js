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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});