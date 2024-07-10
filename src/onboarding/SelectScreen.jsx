import { View, Text, Image } from 'react-native'
import React from 'react'
import SolidButton from '../common/SolidButton'
import { useNavigation } from '@react-navigation/native'
import Signup from '../Auth/Signup'
import { responsiveHeight } from 'react-native-responsive-dimensions'

const SelectScreen = () => {
  const navigation = useNavigation()

  // signUp
  const handelSignUp = ()=>{
    navigation.navigate('signup')
  }

  //login

  const handelLogin = ()=>{
    navigation.navigate('login')
  }

  return (
    <View style={{ flex: 1 }}>
      <Image source={require('../images/travel.jpg')} style={{ width: '100%', height: 400 }} />

      <View style={{ backgroundColor: 'white', marginTop: -20, height: '100%', padding: 25, borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
        <Text style={{ fontSize: 30, color: 'black', fontFamily: 'Outfit-Bold', textAlign: 'center', marginTop:20 }}>AI Travel Planner</Text>

        <Text style={{color:'#7d7d7d' , fontFamily:'Outfit-Regular' , textAlign:'center', fontSize:17, marginTop:20}}>{'Discove Ypur Next Adventure effortlessly. Personalized itineraies at Your Fingertips. Travel Smater with AI Driven insights.'}</Text>

        {/* button */}
        <View style={{marginTop:responsiveHeight(5)}}>

        <SolidButton title={'Getting Started'} onclick={handelLogin}/>

        </View>
        
      </View>
    </View>
  )
}

export default SelectScreen