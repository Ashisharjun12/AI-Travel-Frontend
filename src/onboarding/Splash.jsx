import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {

  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      handleToken();
    }, 2000);
  }, []);


  //methods
  const handleToken = async () => {
    const token = await AsyncStorage.getItem('access_token')
    if (!token) {
      navigation.navigate('selectScreen');
    } else {
      navigation.navigate('AppNavigator');
    }
  }
  return (
    <View>
      <Text style={{ fontSize: 17, fontWeight: 500, color: 'black' }}>Splash</Text>
    </View>
  )
}

export default Splash