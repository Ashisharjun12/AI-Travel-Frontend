import { View, Text , TouchableOpacity} from 'react-native'
import React from 'react'

const SolidButton = ({title, onclick, disabled,btnStyle}) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onclick} style={[{backgroundColor:'black', padding:15 , borderRadius:9, marginTop:'10%'},btnStyle]}>

      <Text style={{color:'white', textAlign:'center', fontFamily:'Outfit-Regular', fontSize:17,}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default SolidButton