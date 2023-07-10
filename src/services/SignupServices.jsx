import instance from "../axiosInstance"

export default function signupPost (data){
    return instance.post('/user/register', data)
};