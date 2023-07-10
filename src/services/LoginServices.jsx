import instance from "../axiosInstance"

export default function LoginUser (data){
    return instance.post('/user/login', data)
};