import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import GoBack from '../common/GoBack'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { selectOption } from '../constants/options'
import OptionCard from './OptionCard'
import { TripContex } from '../contex/TripContex'
import SolidButton from '../common/SolidButton'
import { useNavigation } from '@react-navigation/native'

const SelectTraveller = () => {
    const navigation = useNavigation()
    const [selectTraveller, setSelectTraveller] = useState()

    const { tripData, setTripData } = useContext(TripContex)

    useEffect(() => {
        setTripData({
            ...tripData,
            traveler: selectTraveller
        }
        )

    }, [selectTraveller])

    const handelContinue = () => {
        navigation.navigate('selectDate')

    }


    //methods

    const validatebtn = () => {
        return selectTraveller == null;
    }
    return (
        <View style={{ padding: 25, backgroundColor: 'white', height: '100%' }}>
            <View style={{ paddingTop: 10, gap: responsiveHeight(2) }}>
                <GoBack />
                <Text style={{ color: 'black', fontSize: 28, fontFamily: 'Outfit-Bold' }}>Who's Travelling ?</Text>
            </View>


            {/* select number of travellerls */}

            <View style={{ marginTop: responsiveHeight(2), marginBottom: responsiveHeight(2) }}>
                <Text style={{ fontSize: 20, color: 'black', fontFamily: 'Outfit-Bold' }}>{'Choose Your Travels'}</Text>
            </View>

            {/* flatlist data */}
            <FlatList data={selectOption}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => { setSelectTraveller(item) }} style={{ marginVertical: 10 }}>
                        <OptionCard selectedOption={selectTraveller} option={item} />

                    </TouchableOpacity>
                )}
            />

            {/* continue btn */}
            <SolidButton title={'Continue'} btnStyle={{ marginBottom: responsiveHeight(4), backgroundColor: !validatebtn() ? 'black' : '#686D76' }} onclick={handelContinue} disabled={validatebtn()} />

        </View>
    )
}

export default SelectTraveller