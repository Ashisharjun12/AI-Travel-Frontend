import axios from 'react-native-axios';

let BASE_URL = 'https://ro-victor-allowance-introduces.trycloudflare.com';

const createAccountReq = async data => {
  try {
    const res = await axios({
      method: 'post',
      url: `${BASE_URL}/api/v1/user/register`,
      data: data,
    });
    console.log('createAccountReq response:', res.data);
    return res;
  } catch (error) {
    console.error('createAccountReq error:', error);
    throw error;
  }
};

const verifyOtpReq = async data => {
  try {
    const res = await axios({
      method: 'post',
      url: `${BASE_URL}/api/v1/user/activate`,
      data: data,
    });
    console.log('verifyOtpReq response:', res.data);
    return res;
  } catch (error) {
    console.error('verifyOtpReq error:', error);
    throw error;
  }
};

const loginReq = async data => {
  try {
    const res = await axios({
      method: 'post',
      url: `${BASE_URL}/api/v1/user/login`,
      data: data,
    });
    console.log('loginReq response:', res.data);
    return res;
  } catch (error) {
    console.error('loginReq error:', error);
    throw error;
  }
};

const logoutReq = async data => {
  try {
    const res = await axios({
      method: 'post',
      url: `${BASE_URL}/api/v1/user/logout`,
      data: data,
    });
    console.log('logoutReq response:', res.data);
    return res;
  } catch (error) {
    console.error('logoutReq error:', error);
    throw error;
  }
};

const updatePasswordReq = async data => {
  try {
    const res = await axios({
      method: 'put',
      url: `${BASE_URL}/api/v1/user/updatePassword`,
      data: data,
    });
    console.log('updatePasswordReq response:', res.data);
    return res;
  } catch (error) {
    console.error('updatePasswordReq error:', error);
    throw error;
  }
};

const putTravelDetailsReq = async data => {
  try {
    const res = await axios({
      method: 'post',
      url: `${BASE_URL}/api/v1/travel/traveldetails`,
      data: data,
    });
    console.log('putTravelDetailsReq response:', res.data);
    return res;
  } catch (error) {
    console.error('putTravelDetailsReq error:', error);
    throw error;
  }
};

const getTravelDetails = async () => {
  try {
    const res = await axios({
      method: 'get',
      url: `${BASE_URL}/api/v1/travel/getTraveldetails`,
    });
    console.log('getTravelDetailsReq response:', res.data);
    return res.data;
  } catch (error) {
    console.error('putTravelDetailsReq error:', error);
    throw error;
  }
};


const handelForgotPasswordReq = async data => {
  try {
    const res = await axios({
      method: 'put',
      url: `${BASE_URL}/api/v1/user/resetPassword`,
      data: data,
    });
    return res;
  } catch (error) {
    console.error('genrate forgot password error:', error);
    throw error;
  }
};




export {
  createAccountReq,
  verifyOtpReq,
  loginReq,
  logoutReq,
  updatePasswordReq,
  putTravelDetailsReq,
  getTravelDetails,
  handelForgotPasswordReq,
  
};
