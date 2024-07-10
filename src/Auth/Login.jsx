import { View, Text } from 'react-native'
import React from 'react'
import TextInputComp from '../common/TextInputComp'
import SolidButton from '../common/SolidButton'
import BorderButton from '../common/BorderButton'
import { useNavigation } from '@react-navigation/native'


const Login = () => {

  const navigation = useNavigation()

  // signup
  const handelSignUp = ()=>{
    navigation.navigate('signup')
  }

  return (
    
    <View style={{padding:15, paddingTop:60, backgroundColor:'white', height:'100%'}}>
      <Text style={{color:'black', fontFamily:'Outfit-Bold', fontSize:30}}>Let's Sign You In</Text>
      <Text style={{color:'#7d7d7d', fontFamily:'Outfit-Regular', fontSize:30, marginTop:20}}>Welcome Back 👋🏻</Text>
      <Text style={{color:'#7d7d7d', fontFamily:'Outfit-Regular', fontSize:30, marginTop:20}}>You Have been missed</Text>

      {/* email */}
      <View>
        <TextInputComp txtTitle={'Email'} placeTitle={'Enter Your Email'}/>

        {/* password */}
        <TextInputComp txtTitle={'Password'} placeTitle={'Enter Your Password'} secure={true}/>


        {/* submit */}

        <SolidButton title={'Sign In'} />

        <BorderButton title={'Create Account'} onclick={handelSignUp}/>

      </View>
    </View>
  )
}

export default Login