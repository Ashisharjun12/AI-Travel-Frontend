import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import TextInputComp from '../common/TextInputComp'
import SolidButton from '../common/SolidButton'
import BorderButton from '../common/BorderButton'
import { useNavigation } from '@react-navigation/native'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import Loader from '../components/Loader'
import axios from "react-native-axios"
import { createAccountReq } from '../Api/Api'

const Signup = () => {

  const [email, setEmail] = useState('')
  const [fullname, setFullname] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false);

  const allFieldFilled = () => {
    return fullname.length > 0 && email.length > 0 && password.length > 0
  }


  const data = {
    fullname,
    email,
    password
  }


  const navigation = useNavigation()

  const handleLogin = () => {

    navigation.navigate('login')

  }

 




  const handelCreateAccount = async() => {

    setLoading(true)

    try {
      const res = await createAccountReq(data);
      console.log(res.data);
      console.log(res.data.activationToken);
      navigation.navigate('otp' , {activation_token:res.data.activationToken});
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Network request failed');
    } finally {
      setLoading(false);
    }

  }
  return (
    <View >
      <Loader visible={loading} />
      <View style={{ padding: 25, paddingTop: 50 }}>

        <Text style={{ fontFamily: 'Outfit-Bold', fontSize: 30, color: 'black' }}>Create New Account </Text>


        {/* create account */}

        <View style={{ marginTop: responsiveHeight(5) }}>
          {/* fullname */}
          <TextInputComp txtTitle={'FullName'} placeTitle={'Enter Your Name'} value={fullname} onChangeTxt={setFullname} />

          {/* email */}
          <TextInputComp txtTitle={'Email'} placeTitle={'Enter Your Email'} value={email} onChangeTxt={setEmail} />

          {/* password */}
          <TextInputComp txtTitle={'Password'} placeTitle={'Enter Your Password'} secure={true} value={password} onChangeTxt={setPassword} />


        </View>

        <View>
          <SolidButton disabled={!allFieldFilled()} title={'Create Account'} btnStyle={!allFieldFilled() && styles.disable} onclick={handelCreateAccount} />

          <BorderButton title={'Login'} onclick={handleLogin} />
        </View>

      </View>

    </View>
  )
}

export default Signup



const styles = StyleSheet.create({
  disable: {
    backgroundColor: '#686D76'
  }
})