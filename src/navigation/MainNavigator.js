import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../onboarding/Splash.jsx';
import SelectScreen from '../onboarding/SelectScreen.jsx';
import AppNavigator from './AppNavigator';
import Signup from '../Auth/Signup.jsx';
import Login from '../Auth/Login.jsx';
import Mytrip from '../screens/Mytrip.jsx';
import Discover from '../screens/Discover.jsx';
import Profile from '../screens/Profile.jsx';
import NewTripCard from '../components/NewTripCard.jsx';
import Search from '../create/Search.jsx';
import GoBack from '../common/GoBack.jsx';
import SelectTraveller from '../create/SelectTraveller.jsx';
import SelectDate from '../create/SelectDate.jsx';
import SelectBudget from '../create/SelectBudget.jsx';
import ReviewTrip from '../create/ReviewTrip.jsx';
import BuildTrip from '../create/BuildTrip.jsx';

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

        {/* screens */}
        <Stack.Screen
          name="Mytrip"
          component={Mytrip}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Discover"
          component={Discover}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />

        {/* new trip */}
         <Stack.Screen
          name="NewTripCard"
          component={NewTripCard}
          options={{headerShown: false}}
        /> 


        {/* create trip */}

        <Stack.Screen
          name="search"
          component={Search}
          options={{headerShown: false}}
        /> 
        <Stack.Screen
          name="selectTraveller"
          component={SelectTraveller}
          options={{headerShown: false}}
        /> 
        <Stack.Screen
          name="selectDate"
          component={SelectDate}
          options={{headerShown: false}}
        /> 
        <Stack.Screen
          name="selectBudget"
          component={SelectBudget}
          options={{headerShown: false}}
        /> 
        <Stack.Screen
          name="reviewTrip"
          component={ReviewTrip}
          options={{headerShown: false}}
        /> 
        <Stack.Screen
          name="buildTrip"
          component={BuildTrip}
          options={{headerShown: false}}
        /> 



        {/* go back */}

        <Stack.Screen
          name="back"
          component={GoBack}
          options={{headerShown: false}}
        /> 


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
