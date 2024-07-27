import { View, Text, Alert } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import LottieView from 'lottie-react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { TripContex } from '../contex/TripContex';
import { AI_PROMPT } from '../constants/options';
import { useNavigation } from '@react-navigation/native';
import { putTravelDetailsReq } from '../Api/Api';

const BuildTrip = () => {
  const navigation = useNavigation();
  const { tripData, setTripData } = useContext(TripContex);




  const generateTrip = async () => {
    const FINAL_PROMPT = AI_PROMPT
      .replace('{location}', tripData?.locationInfo?.name)
      .replace('{totalDays}', tripData?.totalNumberOfDays)
      .replace('{totalNights}', tripData?.totalNumberOfDays - 1)
      .replace('{traveler}', tripData?.traveler?.title)
      .replace('{budget}', tripData?.budget?.title)
      .replace('{totalDays}', tripData?.totalNumberOfDays)
      .replace('{totalNights}', tripData?.totalNumberOfDays - 1);

    console.log('Generated Prompt:', FINAL_PROMPT);




    const data = {
      FINAL_PROMPT
    }

    try {

      const res = await putTravelDetailsReq(data)

      
      navigation.navigate('AppNavigator')
      console.log(res.data)

    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Network request failed');
    }
  };

  

  useEffect(() => {
    if (tripData) {
      generateTrip();
    }
  }, [tripData]);

  return (
    <View style={{ padding: 15, height: '100%', backgroundColor: 'white' }}>
      <View>
        <View style={{ height: 420 }}>
          <LottieView style={{ flex: 1 }} source={require('../images/build.json')} autoPlay loop />
        </View>
        <View>
          <Text style={{ fontSize: 30, fontFamily: 'Outfit-Bold', color: 'black', textAlign: 'center' }}>
            Please Wait......
          </Text>
          <Text style={{ fontSize: 20, fontFamily: 'Outfit-Medium', color: 'black', textAlign: 'center', marginTop: responsiveHeight(1) }}>
            We are Building Your Trip 🛩️
          </Text>
          <Text style={{ fontSize: 20, fontFamily: 'Outfit-Bold', color: 'black', textAlign: 'center', marginTop: responsiveHeight(4) }}>
            Do Not Go Back
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BuildTrip;
