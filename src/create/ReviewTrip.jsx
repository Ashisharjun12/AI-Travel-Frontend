import { View, Text, Image } from 'react-native'
import React, { useContext } from 'react'
import GoBack from '../common/GoBack'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native'
import { TripContex } from '../contex/TripContex'
import moment from 'moment'
import SolidButton from '../common/SolidButton'

const ReviewTrip = () => {
    const navigation = useNavigation()

    const { tripData, setTripData } = useContext(TripContex)

    const buildTrip =()=>{
        navigation.navigate('buildTrip')
    }

    return (
        <View style={{ padding: 25, backgroundColor: 'white', height: '100%' }}>
            <View style={{ paddingTop: 10, gap: responsiveHeight(2) }}>
                <GoBack />
                <Text style={{ color: 'black', fontSize: 28, fontFamily: 'Outfit-Bold' }}>Review Your Trip</Text>
            </View>

            {/* review your trip details */}

            <View style={{gap:responsiveHeight(3)}}>

                 {/* destination */}

            <View style={{ flexDirection: 'row', marginTop: responsiveHeight(4), alignItems: 'center', gap: responsiveWidth(12) }}>
                <Image source={require('../images/dest.png')} style={{ width: 50, height: 50 }} />
                <View>
                    <Text style={{ fontSize: 20, color: 'grey', fontFamily: 'Outfit-Regular' }}>{'Destination'}</Text>
                    <Text style={{ fontSize: 20, color: 'black', fontFamily: 'Outfit-Medium' }}>{tripData?.locationInfo?.name}</Text>
                </View>


            </View>

            {/*  dates and days*/}
            <View style={{ flexDirection: 'row', marginTop: responsiveHeight(4), alignItems: 'center', gap: responsiveWidth(12) }}>
                <Image source={require('../images/date.png')} style={{ width: 50, height: 50 }} />
                <View>
                    <Text style={{ fontSize: 20, color: 'grey', fontFamily: 'Outfit-Regular' }}>{'Selected Date'}</Text>
                    <Text style={{ fontSize: 20, color: 'black', fontFamily: 'Outfit-Medium' }}>{moment(tripData?.startDate).format('DD MMM') + "  To  " + moment(tripData?.endDate).format('DD MMM')} ( {tripData?.totalNumberOfDays + " days"} )</Text>
                </View>


            </View>

            {/* travel info */}

            <View style={{ flexDirection: 'row', marginTop: responsiveHeight(4), alignItems: 'center', gap: responsiveWidth(12) }}>
                <Image source={require('../images/travel.png')} style={{ width: 60, height: 60 }} />
                <View>
                    <Text style={{ fontSize: 20, color: 'grey', fontFamily: 'Outfit-Regular' }}>{'Who is Travelling'}</Text>
                    <Text style={{ fontSize: 20, color: 'black', fontFamily: 'Outfit-Medium' }}>{tripData?.traveler?.title}</Text>
                </View>


            </View>


            {/* budget */}

            <View style={{ flexDirection: 'row', marginTop: responsiveHeight(4), alignItems: 'center', gap: responsiveWidth(12) }}>
                <Image source={require('../images/budget.png')} style={{ width: 60, height: 60 }} />
                <View>
                    <Text style={{ fontSize: 20, color: 'grey', fontFamily: 'Outfit-Regular' }}>{'Budget'}</Text>
                    <Text style={{ fontSize: 20, color: 'black', fontFamily: 'Outfit-Medium' }}>{tripData?.budget?.title}</Text>
                </View>


            </View>






            </View>


            {/* build trip button */}
            <SolidButton title={'Build My Trip'} btnStyle={{marginTop:responsiveHeight(20)}} onclick={buildTrip}/>

           


        </View>
    )
}

export default ReviewTrip