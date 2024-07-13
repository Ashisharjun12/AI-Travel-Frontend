import { View, Text } from 'react-native'
import React, { useState } from 'react'
import MainNavigator from './navigation/MainNavigator.js'
import { TripContex } from './contex/TripContex.js'

const App = () => {

  const [tripData , setTripData]= useState([])


  return (
    <TripContex.Provider  value={{tripData,setTripData}}>
      <MainNavigator/>
    </TripContex.Provider>
   
  )
}

export default App