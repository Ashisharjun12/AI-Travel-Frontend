import { View, Text, Image } from 'react-native'
import React from 'react'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import SolidButton from '../common/SolidButton'
import { useNavigation } from '@react-navigation/native'

const NewTripCard = () => {

    const navigation = useNavigation()

    const addTrip = ()=>{
        navigation.navigate('search')
    }


  return (
    <View style={{padding:20 , marginTop:50 , display:'flex', alignItems:'center', gap:20}}>
      <Image source={require('../images/map-black.png')} style={{width:50 ,  height:50}}/>

      <Text style={{color:'black' , fontSize:25 , fontFamily:'Outfit-Medium'}}>{'No Trip Planned Yet'}</Text>

      <Text style={{fontFamily:'Outfit-Regular' , fontSize:20, color:'grey',textAlign:'center' }}>{"Looks like It's Time to Plan a New Travel Experience! Get Started Now"}</Text>

      <SolidButton title={'Start New Trip'} onclick={addTrip}/>
    </View>
  )
}

export default NewTripCard