import { View, Text, Image , TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const GoBack = () => {
    const navigation = useNavigation()

    const handelBack = ()=>{
        navigation.goBack()

    }
  return (
    <TouchableOpacity onPress={handelBack}>
      <Image source={require('../images/arrow.png')} style={{width:30 , height:30}} />
    </TouchableOpacity>
  )
}

export default GoBack