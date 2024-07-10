import { View, Text, FlatList , TouchableOpacity} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import GoBack from '../common/GoBack'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { selectOption, spendList } from '../constants/options'
import OptionCard from './OptionCard'
import SolidButton from '../common/SolidButton'
import { TripContex } from '../contex/TripContex'
import { useNavigation } from '@react-navigation/native'

const SelectBudget = () => {
    const navigation = useNavigation()
    const [budget ,setBudget]= useState()

    const {tripData , setTripData} = useContext(TripContex)

    useEffect(()=>{
        selectOption&&setTripData({
            ...tripData ,
                budget:budget
            }
        )

    }, [ budget])

    const handelContinue = ()=>{
        navigation.navigate('reviewTrip')


    }
  return (
    <View style={{ padding: 25, backgroundColor: 'white', height: '100%' }}>
      <View style={{ paddingTop: 10, gap: responsiveHeight(2) }}>
                <GoBack />
                <Text style={{ color: 'black', fontSize: 28, fontFamily: 'Outfit-Bold' }}>Budget</Text>
                <Text style={{ color: 'black', fontSize: 20, fontFamily: 'Outfit-Bold' }}>{'Choose Spending Habits for Trips'}</Text>
            </View>

            {/* flatlist */}
            <FlatList data={spendList}
            renderItem={({item, index})=>(
                <TouchableOpacity onPress={()=>{setBudget(item)}} style={{marginVertical:10}}>
                    <OptionCard selectedOption={budget} option={item}/>


                </TouchableOpacity>
  )}
            
            />

            {/* continue btn */}
            <SolidButton title={'Continue'} btnStyle={{marginBottom:responsiveHeight(4)}} onclick={handelContinue}/>
    </View>
  )
}

export default SelectBudget