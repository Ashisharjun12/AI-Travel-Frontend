import { View, Text } from 'react-native'
import React, { useState } from 'react'
import GoBack from '../common/GoBack'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Loader from '../components/Loader'
import { getTravelDetails } from '../Api/Api'
import SolidButton from '../common/SolidButton'

const Trip = () => {
    const [loading, setLoading] = useState(false)
    const [travelDetails, setTravelDetails] = useState(null)


    const getDetails = async () => {
        setLoading(true);
        try {
          const data = await getTravelDetails();
          setTravelDetails(data); 
          console.log(data)
        } catch (error) {
          console.error(error);
          Alert.alert('Error', 'Network request failed');
        } finally {
          setLoading(false);
        }
      };

  return (
    <View>
         <Loader visible={loading} />
       <View style={{ padding: 25, backgroundColor: 'white', height: '100%' }}>
        <View style={{ paddingTop: 10, gap: responsiveHeight(2), flexDirection: 'row', alignItems: 'center', gap: responsiveWidth(12) }}>
          <GoBack />
          <Text style={{ color: 'black', fontSize: 28, fontFamily: 'Outfit-Bold' }}>My Trips</Text>

        </View>


        {/* trip card */}

        <View>
            <SolidButton title={'get details'} onclick={getDetails} disabled={false}/>



        </View>

        </View>




    </View>
  )
}

export default Trip