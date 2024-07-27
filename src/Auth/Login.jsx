import { View, Text, StyleSheet, Image ,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import TextInputComp from '../common/TextInputComp'
import SolidButton from '../common/SolidButton'
import BorderButton from '../common/BorderButton'
import { useNavigation } from '@react-navigation/native'
import Loader from '../components/Loader'
import { loginReq } from '../Api/Api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'



const Login = () => {



  const navigation = useNavigation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false);

  const allFieldFilled = () => {
    return email.length > 0 && password.length > 0
  }


  //date send
  const data = {
    email,
    password
  }


  // signup
  const handelSignUp = ()=>{
    navigation.navigate('signup')
  }

  const handleLogin = async()=>{
    setLoading(true)

    try {

      const res = await loginReq(data)
      console.log("access token " ,res.data.accessToken);

      if(res.status ==200){
        await AsyncStorage.setItem('access_token',res.data.accessToken)

        

        navigation.navigate('AppNavigator')
      }
      

      
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Network request failed',error);
    } finally {
      setLoading(false);
    }


    
  }


  //handel forgot password
  const handelForgotPassword = async()=>{
    navigation.navigate('Forgotpass')
   

  }

  return (
    <View>
<Loader visible={loading}/>
   
    
    <View style={{padding:15, paddingTop:60, backgroundColor:'white', height:'100%'}}>
      <Text style={{color:'black', fontFamily:'Outfit-Bold', fontSize:30}}>Let's Sign You In</Text>
      <Text style={{color:'#7d7d7d', fontFamily:'Outfit-Regular', fontSize:30, marginTop:20}}>Welcome Back 👋🏻</Text>
      <Text style={{color:'#7d7d7d', fontFamily:'Outfit-Regular', fontSize:30, marginTop:20}}>You Have been missed</Text>

      {/* email */}
      <View>
        <TextInputComp txtTitle={'Email'} value={email} onChangeTxt={setEmail} placeTitle={'Enter Your Email'}/>

        {/* password */}
        <TextInputComp txtTitle={'Password'} value={password} onChangeTxt={setPassword} placeTitle={'Enter Your Password'} secure={false}/>

        <TouchableOpacity onPress={handelForgotPassword} style={{marginTop:responsiveHeight(1), marginRight:responsiveWidth(3)}}>
          {/* forgot password */}
          <Text style={{color:'black' , fontFamily:'Outfit-Medium' , fontSize:16, textAlign:'right'}}>{'Forgot Password ?'}</Text>
        </TouchableOpacity>


        {/* submit */}

        <SolidButton title={'Sign In'} onclick={handleLogin} disabled={!allFieldFilled()} btnStyle={!allFieldFilled() && styles.disable}/>

        <BorderButton title={'Create Account'} onclick={handelSignUp}/>

       

      </View>
    </View>
    </View>
  )
}

export default Login


const styles = StyleSheet.create({
  disable: {
    backgroundColor: '#686D76'
  }
})