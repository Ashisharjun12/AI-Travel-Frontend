import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import LottieView from 'lottie-react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { TripContex } from '../contex/TripContex';

const BuildTrip = () => {

  const { tripData, setTripData } = useContext(TripContex)
  return (

    <View style={{padding:15, height:'100%', backgroundColor:'white', }}>

        <View style={{}}>
            <View style={{height:420}}>
            <LottieView style={{flex:1}} source={require('../images/build.json')} autoPlay loop />

            </View>
       <View>

       <Text style={{fontSize:30 , fontFamily:'Outfit-Bold', color:'black', textAlign:'center'}}>Please Wait......</Text>
       <Text style={{fontSize:20 , fontFamily:'Outfit-Medium' , color:'black', textAlign:'center', marginTop:responsiveHeight(1)}}>We are Building Your Trip 🛩️</Text>
       <Text style={{fontSize:20 , fontFamily:'Outfit-Bold' , color:'black', textAlign:'center', marginTop:responsiveHeight(4)}}>Do Not Go Back</Text>

       </View>
      

        </View>
      
    </View>
  )
}

export default BuildTrip