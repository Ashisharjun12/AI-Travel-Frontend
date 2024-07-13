import axios from "react-native-axios"

const createAccountReq = async (data) => {
    const res = await axios({
      method: 'post',
      url: 'https://travel-backend-production-d237.up.railway.app/api/v1/user/register',
      data:data

    })

    return res;
  }


  const verifyOtpReq = async (data)=>{
    const res = await axios({
        method: 'post',
        url: 'https://travel-backend-production-d237.up.railway.app/api/v1/user/activate',
        data:data
  
    })

    return res;
  }

  const loginReq = async (data)=>{
    const res = await axios({
        method: 'post',
        url: 'https://travel-backend-production-d237.up.railway.app/api/v1/user/login',
        data:data
    })
    return res;
  }


  const logoutReq = async (data)=>{
    const res = await axios({
        method: 'post',
        url: 'https://travel-backend-production-d237.up.railway.app/api/v1/user/logout',
        data:data
    })
    return res;
  }


  const updatePasswordReq = async (data)=>{
    const res = await axios({
        method: 'put',
        url: 'https://travel-backend-production-d237.up.railway.app/api/v1/user/updatePassword',
        data:data
    })
    return res;

  }


  const putTravelDetailsReq = async (data)=>{
    const res = await axios({
        method: 'post',
        url: 'https://travel-backend-production-d237.up.railway.app/api/v1/travel/traveldetails',
        data:data
    })
    return res;
  }


  export {createAccountReq ,verifyOtpReq , loginReq , logoutReq, updatePasswordReq,putTravelDetailsReq}