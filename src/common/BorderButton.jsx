import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const BorderButton = ({onclick, title}) => {
  return (
    <TouchableOpacity onPress={onclick} style={{borderRadius:9 , borderWidth:1, padding:15, marginTop:'10%'}}>
    <Text style={{color:'black', textAlign:'center', fontFamily:'Outfit-Regular', fontSize:17,}}>{title}</Text>
  </TouchableOpacity>
  )
}

export default BorderButton