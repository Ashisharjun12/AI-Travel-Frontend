import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../onboarding/Splash.jsx';
import SelectScreen from '../onboarding/SelectScreen.jsx';
import AppNavigator from './AppNavigator';
import Signup from '../Auth/Signup.jsx';
import Login from '../Auth/Login.jsx';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="selectScreen"
          component={SelectScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AppNavigator"
          component={AppNavigator}
          options={{headerShown: false}}
        />
    {/* login & signup */}
    <Stack.Screen
          name="signup"
          component={Signup}
          options={{headerShown: false}}
        />
    <Stack.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}
        />

       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
