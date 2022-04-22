import http from "./httpServices";

export default function LoginUser (data){
    return http.post('/user/login', data)
};