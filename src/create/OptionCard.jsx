import { View, Text } from 'react-native'
import React from 'react'

const OptionCard = ({option, selectedTraveller}) => {
  return (
    <View style={[{padding:25, flexDirection:'row', justifyContent:'space-between', alignItems:'center', backgroundColor:'#f2f2f2', borderRadius:15},selectedTraveller?.id==option?.id && {borderWidth:3}]}>
      <View>
        <Text style={{fontSize:20 , fontFamily:'Outfit-Bold', color:'black'}}>{option?.title}</Text>
        <Text style={{fontSize:15 , fontFamily:'Outfit-Regular', color:'grey'}}>{option?.desc}</Text>
        

      </View>
      <Text style={{color:'black' , fontSize:35}}>{option?.icon}</Text>
    </View>
  )
}

export default OptionCard