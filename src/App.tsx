import React, { useState } from 'react';
import { TripContex } from './contex/TripContex.js';
import MainNavigator from './navigation/MainNavigator.js';
import Toast from 'react-native-toast-message';

const App = () => {
  const [tripData, setTripData] = useState([]);
  const [profile, setProfile] = useState([]);

  return (
    <TripContex.Provider value={{ tripData, setTripData, profile, setProfile }}>
      <MainNavigator />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </TripContex.Provider>
  );
};

export default App;
