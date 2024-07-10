import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const Splash = () => {

    const navigation = useNavigation();

    useEffect(() => {
      setTimeout(() => {
       
        navigation.navigate('selectScreen');
      }, 2000);
    }, []);
  return (
    <View>
      <Text style={{fontSize:17 , fontWeight:500 , color:'black'}}>Splash</Text>
    </View>
  )
}

export default Splash