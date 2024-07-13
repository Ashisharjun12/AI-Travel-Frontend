import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import GoBack from '../common/GoBack'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import TextInputComp from '../common/TextInputComp'
import SolidButton from '../common/SolidButton'
import { useNavigation } from '@react-navigation/native'
import Loader from '../components/Loader'
import { updatePasswordReq } from '../Api/Api'

const UpdatePassword = () => {

    const navigation = useNavigation()

    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [loading, setLoading] = useState(false)


    //validate btn
    const allFieldFilled = () => {
        return oldPassword.length > 4 && newPassword.length > 4
        
    }


    //data

    const data = {
        oldPassword,
        newPassword
    }


    const handleUpdatePassword = async () => {
        setLoading(true)

        try {
            const res = await updatePasswordReq(data)

            console.log("data", res.data)

            navigation.navigate('Profile')


        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Network request failed', error);
        } finally {
            setLoading(false);
        }

    }


    return (
        <View>
            <Loader visible={loading} />
            <View style={{ padding: 25, backgroundColor: 'white', height: '100%' }}>
                <View style={{ paddingTop: 10, gap: responsiveHeight(2) }}>
                    <GoBack />
                    <Text style={{ color: 'black', fontSize: 28, fontFamily: 'Outfit-Bold' }}>Update Password</Text>
                </View>

                {/* update password */}



                <View>

                    {/* old password */}

                    <TextInputComp txtTitle={'Old Password'} placeTitle={'Old Password'} value={oldPassword} onChangeTxt={setOldPassword} />

                    <TextInputComp txtTitle={'New Password'} placeTitle={'New Password'} value={newPassword} onChangeTxt={setNewPassword} />
                </View>


                {/* submit */}

                <SolidButton title={'Update'} disabled={!allFieldFilled()} btnStyle={!allFieldFilled() && styles.disable} onclick={handleUpdatePassword}/>
            </View>





        </View>
    )
}

export default UpdatePassword

const styles = StyleSheet.create({
    disable: {
        backgroundColor: '#686D76'
    }
})