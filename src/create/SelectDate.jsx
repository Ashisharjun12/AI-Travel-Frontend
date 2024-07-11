import { View, Text } from 'react-native'
import React, { createContext, useContext, useState } from 'react'
import GoBack from '../common/GoBack'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import CalendarPicker from "react-native-calendar-picker";
import SolidButton from '../common/SolidButton';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { TripContex } from '../contex/TripContex';

const SelectDate = () => {
    const navigation = useNavigation()

    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()

    const { tripData, setTripData } = useContext(TripContex)

    const onDateChange = (date, type) => {
        console.log(date)

        if (type == 'START_DATE') {
            setStartDate(moment(date))
        } else (
            setEndDate(moment(date))
        )

    }




    const handelContinue = () => {
        if (!startDate && !endDate) {
            return console.log('please select the date')
        }
        const totalNumberOfDays = endDate.diff(startDate, 'days')
        console.log(totalNumberOfDays + 1)

        setTripData({ ...tripData, startDate: startDate, endDate: endDate, totalNumberOfDays: totalNumberOfDays + 1 })

        navigation.navigate('selectBudget')

    }
    return (
        <View style={{ padding: 25, backgroundColor: 'white', height: '100%' }}>
            <View style={{ paddingTop: 10, gap: responsiveHeight(2) }}>
                <GoBack />
                <Text style={{ color: 'black', fontSize: 28, fontFamily: 'Outfit-Bold' }}>Travel Dates</Text>
            </View>

            {/* select dates */}
            <View style={{ marginTop: responsiveHeight(5) }}>

                <CalendarPicker onDateChange={onDateChange}
                    allowRangeSelection={true}
                    minDate={new Date()}
                    maxRangeDuration={12}
                    selectedRangeStyle={{
                        backgroundColor: 'black'
                    }}
                    selectedDayTextStyle={{ color: 'white' }}
                />

            </View>

            {/* continue btn */}
            <SolidButton title={'Continue'} btnStyle={{ marginTop: responsiveHeight(32), backgroundColor: (startDate || endDate) ? 'black' : '#686D76' }} disabled={!startDate || !endDate} onclick={handelContinue} />

        </View>
    )
}

export default SelectDate