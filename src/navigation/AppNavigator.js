import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Mytrip from '../screens/Mytrip';
import Discover from '../screens/Discover';
import Profile from '../screens/Profile';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Bottom = createBottomTabNavigator();

const AppNavigator = () => {
  const [isBottomNavVisible, setBottomNavVisible] = useState(true);

  


  return (
    <Bottom.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === 'Mytrip') {
            iconName = focused
              ? require('../images/map-black.png')
              : require('../images/map-white.png');
          } else if (route.name === 'Discover') {
            iconName = focused
              ? require('../images/globe-black.png')
              : require('../images/globe-white.png');
          } else if (route.name === 'Profile') {
            iconName = focused
              ? require('../images/profile-black.png')
              : require('../images/profile-white.png');
          }

          return <Image source={iconName} style={{ width: 24, height: 24 }} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { display: isBottomNavVisible ? 'flex' : 'none' }
      })}
    >
      <Bottom.Screen name='Mytrip' options={{ headerShown: false }}>
        {() => <Mytrip setBottomNavVisible={setBottomNavVisible} />}
      </Bottom.Screen>
      <Bottom.Screen name='Discover' options={{ headerShown: false }}>
        {() => <Discover setBottomNavVisible={setBottomNavVisible} />}
      </Bottom.Screen>
      <Bottom.Screen name='Profile' options={{ headerShown: false }}>
        {() => <Profile setBottomNavVisible={setBottomNavVisible} />}
      </Bottom.Screen>
    </Bottom.Navigator>
  );
};

export default AppNavigator;
