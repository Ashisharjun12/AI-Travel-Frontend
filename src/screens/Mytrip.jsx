import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import NewTripCard from '../components/NewTripCard'
import { useNavigation } from '@react-navigation/native'

const Mytrip = () => {

  const navigation = useNavigation()


  const [ userTrip , SetUserTrip]=useState([])


  const handelAddTrip = ()=>{
    navigation.navigate('search')

  }


  return (
    <View style={{
      padding: 25,
      paddingTop: 55,
      backgroundColor: 'white',
      height:'100%'
    }}>

<View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>

<Text style={{fontFamily:'Outfit-Bold', fontSize:35,color:'black'}}>My Trips</Text>
<TouchableOpacity onPress={handelAddTrip}>

<Image source={require('../images/plus.png')} style={{width:47 , height:47}}/>

</TouchableOpacity>


</View>
      
      {userTrip?.length==0 ? <NewTripCard/> : null}
    </View>
  )
}

export default Mytrip