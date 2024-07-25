import { View, Text, Image ,TouchableOpacity} from 'react-native'
import React, { useContext, useState } from 'react'
import GoBack from '../common/GoBack'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import SolidButton from '../common/SolidButton'
import { useNavigation } from '@react-navigation/native'
import { logoutReq } from '../Api/Api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loader from '../components/Loader'
import { ScrollView } from 'react-native-gesture-handler'
import { profileContex } from '../contex/TripContex'

const Profile = () => {

  const navigation = useNavigation()

  const [loading, setLoading] = useState(false)

  // const { profile,setProfile} = useContext(profileContex);


  const handleLogout = async () => {
    setLoading(true)



    try {
      const res = await logoutReq()

      if (res.status == 200) {
        await AsyncStorage.removeItem('access_token')

        navigation.navigate('login')
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Network request failed', error);
    } finally {
      setLoading(false);
    }

  }

  //update password

  const handlePaassword = async()=>{

    navigation.navigate('updatePassword')

  }


  //handel trip
  const handelTrip =async()=>{
    navigation.navigate('Trip')

  }


  //handel edit profile
  const handelEditProfile =async()=>{
    navigation.navigate('Edit')
  }
  return (
    <ScrollView>

    
    <View>
      <Loader visible={loading} />


      <View style={{ padding: 25, backgroundColor: 'white', height: '100%' }}>
        <View style={{ paddingTop: 10, gap: responsiveHeight(2), flexDirection: 'row', alignItems: 'center', gap: responsiveWidth(12) }}>
          <GoBack />
          <Text style={{ color: 'black', fontSize: 28, fontFamily: 'Outfit-Bold' }}>Your Profile</Text>

        </View>
        {/* your profile */}

        <View style={{ padding: 25, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f2f2f2', borderRadius: 15, marginTop: responsiveHeight(3), maxHeight: responsiveHeight(70) }}>
          <View style={{ flexDirection: 'row', gap: responsiveWidth(14), padding: 12, alignItems: 'center' }}>

            <View style={{ width: responsiveWidth(25), height: responsiveWidth(25), borderRadius: 99 }}>
              <Image source={require('../images/profile-black.png')} style={{ width: responsiveWidth(25), height: responsiveWidth(25) }} />

            </View>

            <View>

              <Text style={{ fontSize: 22, fontFamily: 'Outfit-Medium', color: 'black' }}>{'Ashish Raj'}</Text>
              <SolidButton title={'Edit'} btnStyle={{ padding: 10 }} onclick={handelEditProfile}/>


            </View>





          </View>
        </View>


        {/* some option section */}

        {/* option-1 */}

        <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#f2f2f2', borderRadius: 15, marginTop: responsiveHeight(3), }}>
          <Image source={require('../images/email.png')} style={{ width: 36, height: 36 }} />
          <Text style={{ fontSize: 17, color: 'black', fontFamily: 'Outfit-Medium' }}>{'ashishrahul748@gmail.com'}</Text>

        </View>

        {/* option mytrip */}

        <TouchableOpacity onPress={handelTrip} style={{ padding: 20, flexDirection: 'row', gap: responsiveWidth(18), alignItems: 'center', backgroundColor: '#f2f2f2', borderRadius: 15, marginTop: responsiveHeight(3), }}>
          <Image source={require('../images/trip.png')} style={{ width: 43, height: 43, marginLeft: responsiveWidth(5) }} />
          <Text style={{ fontSize: 17, color: 'black', fontFamily: 'Outfit-Medium', marginLeft: responsiveWidth(-12) }}>{'My Trips'}</Text>

        </TouchableOpacity>

        {/* option-2 (update password) */}

        <TouchableOpacity onPress={handlePaassword} style={{ padding: 20, flexDirection: 'row', gap: responsiveWidth(18), alignItems: 'center', backgroundColor: '#f2f2f2', borderRadius: 15, marginTop: responsiveHeight(3), }}>
          <Image source={require('../images/updatePass.png')} style={{ width: 36, height: 36, marginLeft: responsiveWidth(5) }} />
          <Text style={{ fontSize: 17, color: 'black', fontFamily: 'Outfit-Medium', marginLeft: responsiveWidth(-12) }}>{'Update Password'}</Text>

        </TouchableOpacity>

        {/* option-3 */}
        <View style={{ padding: 20, flexDirection: 'row', gap: responsiveWidth(4), alignItems: 'center', backgroundColor: '#f2f2f2', borderRadius: 15, marginTop: responsiveHeight(3), }}>
          <Image source={require('../images/toc.png')} style={{ width: 36, height: 36, marginLeft: responsiveWidth(5) }} />
          <Text style={{ fontSize: 17, color: 'black', fontFamily: 'Outfit-Medium' }}>{'Terms & Conditions'}</Text>

        </View>

        {/* options- 4 */}
        <View style={{ padding: 20, flexDirection: 'row', gap: responsiveWidth(4), alignItems: 'center', backgroundColor: '#f2f2f2', borderRadius: 15, marginTop: responsiveHeight(3), }}>
          <Image source={require('../images/version.png')} style={{ width: 36, height: 36, marginLeft: responsiveWidth(5) }} />
          <Text style={{ fontSize: 17, color: 'black', fontFamily: 'Outfit-Medium' }}>{'Version 0.0.1'}</Text>

        </View>

        {/* logout button */}

        <SolidButton title={'Logout'} onclick={handleLogout} />



      </View>
    </View>
    </ScrollView>
  )
}

export default Profile