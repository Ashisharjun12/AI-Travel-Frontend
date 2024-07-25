import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import GoBack from '../common/GoBack'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import TextInputComp from '../common/TextInputComp'
import SolidButton from '../common/SolidButton'
import { useNavigation } from '@react-navigation/native'
import Loader from '../components/Loader'
import { handelForgotPasswordReq } from '../Api/Api'

const Forgotpass = () => {
    const navigation = useNavigation()


    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false);

    const allFieldFilled = () => {
        return email.length > 0
    }

    const data = {email}


    //handel forgot password
    const handelpass = async () => {

        setLoading(true)

        try {

            const res = await handelForgotPasswordReq(data)
            console.log(res.data)
            navigation.navigate('login')


        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Network request failed');

        } finally {
            setLoading(false);
        }


    }



    return (
        <View>
            <Loader visible={loading} />




            <View style={{ padding: 25, backgroundColor: 'white', height: '100%' }}>
                <View style={{ paddingTop: 10, gap: responsiveHeight(2), flexDirection: 'row', alignItems: 'center', gap: responsiveWidth(12) }}>
                    <GoBack />
                    <Text style={{ color: 'black', fontSize: 28, fontFamily: 'Outfit-Bold' }}>Forgot Pasword</Text>

                </View>

                {/* email */}

                <View style={{ top: responsiveHeight(2) }}>

                    <TextInputComp txtTitle={'Email'} placeTitle={'Enter Your Email'} value={email} onChangeTxt={setEmail} />

                    <SolidButton title={'Submit'} disabled={!allFieldFilled()} btnStyle={!allFieldFilled() && styles.disable} onclick={handelpass} />


                </View>



            </View>



        </View>
    )
}

export default Forgotpass

const styles = StyleSheet.create({
    disable: {
        backgroundColor: '#686D76'
    }
})