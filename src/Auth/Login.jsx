import { View, Text } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style={{padding:15, paddingTop:60, backgroundColor:'white', height:'100%'}}>
      <Text style={{color:'black', fontFamily:'Outfit-Bold', fontSize:30}}>Let's Sign You In</Text>
      <Text style={{color:'#7d7d7d', fontFamily:'Outfit-Regular', fontSize:30, marginTop:20}}>Welcome Back 👋🏻</Text>
      <Text style={{color:'#7d7d7d', fontFamily:'Outfit-Regular', fontSize:30, marginTop:20}}>You Have been missed</Text>
    </View>
  )
}

export default Login