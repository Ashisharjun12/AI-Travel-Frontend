import { View, Text , TouchableOpacity} from 'react-native'
import React from 'react'

const SolidButton = ({title, onclick}) => {
  return (
    <TouchableOpacity onPress={onclick} style={{backgroundColor:'black', padding:15 , borderRadius:99, marginTop:'25%'}}>
      <Text style={{color:'white', textAlign:'center', fontFamily:'Outfit-Regular', fontSize:17,}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default SolidButton