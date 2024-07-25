import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import GoBack from '../common/GoBack'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const Edit = () => {
    return (
        <View>

            <View style={{ padding: 25, backgroundColor: 'white', height: '100%' }}>
                <View style={{ paddingTop: 10, gap: responsiveHeight(2), flexDirection: 'row', alignItems: 'center', gap: responsiveWidth(12) }}>
                    <GoBack />
                    <Text style={{ color: 'black', fontSize: 28, fontFamily: 'Outfit-Bold' }}>Edit Profile</Text>

                </View>

                {/* profile edit */}

                <View>

                    <View style={{ gap: responsiveWidth(14), padding: 10, justifyContent: 'center', alignItems: 'center' }}>

                        <View style={{ width: responsiveWidth(36), height: responsiveWidth(36), borderRadius: 99, marginTop: responsiveHeight(3) }}>
                            <Image source={require('../images/profile-black.png')} style={{ width: responsiveWidth(36), height: responsiveWidth(36) }} />

                        </View>
                        <TouchableOpacity>
                            <Image source={require('../images/pic.png')} style={{ width: responsiveWidth(12), height: responsiveWidth(12), position: 'absolute', top: responsiveHeight(-13), left: responsiveWidth(9) }} />

                        </TouchableOpacity>
                    </View>
                </View>

                {/* name  edit */}

                <View  style={{ padding: 20, flexDirection: 'row', gap: responsiveWidth(18), alignItems: 'center', backgroundColor: '#f2f2f2', borderRadius: 15, }}>
          <Image source={require('../images/name.png')} style={{ width: 35, height: 35, marginLeft: responsiveWidth(5) }} />
          <Text style={{ fontSize: 17, color: 'black', fontFamily: 'Outfit-Medium', marginLeft: responsiveWidth(-7) }}>{'Ashish Raj'}</Text>
          <TouchableOpacity>

          <Image source={require('../images/editname.png')} style={{ width: 26, height: 26, marginLeft: responsiveWidth(5) }} />

          </TouchableOpacity>
      

        </View>



            </View>
        </View>
    )
}

export default Edit