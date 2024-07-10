import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { responsiveWidth } from 'react-native-responsive-dimensions'


const TextInputComp = ({ txtTitle, placeTitle, value, onChangeTxt, keyboardType , secure }) => {
  return (
    <View style={{ marginTop: 20, gap: 4 }}>
      <Text style={{ fontFamily: 'Outfit-Bold', color: 'black', marginLeft:responsiveWidth(2) }}>{txtTitle}</Text>
      <TextInput secureTextEntry={secure} value={value} onChangeText={onChangeTxt} placeholder={placeTitle} placeholderTextColor={'black'}  keyboardType={keyboardType ? keyboardType : 'default'} style={{ padding: 15, borderWidth: 1, color: '#7d7d7d', borderRadius: 15, fontFamily: 'Outfit-Regular' }} />
    </View>
  )
}

export default TextInputComp