import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import GoBack from '../common/GoBack'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAP_API} from "@env"
import { TripContex } from '../contex/TripContex'

const Search = () => {
    const navigation = useNavigation()

    const {tripData , setTripData} = useContext(TripContex)

    useEffect(()=>{
        console.log(tripData)

    },[tripData])


    const handelSelectTraveller = ()=>{
        navigation.navigate('selectTraveller')
    }
    return (
        <View style={{backgroundColor:'white' , height:'100%', padding:25}}>

            <View style={{ paddingTop: 28, flexDirection: 'row', alignItems: 'center', gap: responsiveWidth(10),marginBottom:responsiveHeight(3) }}>
                <GoBack />
                <Text style={{ color: 'black', fontSize: 22, fontFamily: 'Outfit-Bold' }}>Search</Text>
            </View>

            {/* search */}

            <GooglePlacesAutocomplete
      placeholder='Search Your Destination...'
     
      

      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true

        console.log(data.description);
        console.log(details?.geometry?.location);
        console.log(details?.photos[0]?.photo_reference);
        console.log(details?.url);
        setTripData({
            locationInfo:{
                ...tripData, 
                name:data.description,
                coordinates:details?.geometry?.location,
                photoRef:details?.photos[0]?.photo_reference,
                url:details?.url
            }
        })

        handelSelectTraveller()
      }}

      


      query={{
        key:GOOGLE_MAP_API,
        language: 'en',
      }}
      styles={{
        textInputContainer:{
            borderWidth:1,
            borderRadius:8,
            padding:1,
            paddingLeft:12,
            
            
        }
      }}
    />



        </View>

    )
}

export default Search