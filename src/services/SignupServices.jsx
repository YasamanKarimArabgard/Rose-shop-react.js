import http from "./httpServices";

export default function signupPost (data){
    return http.post('/user/register', data)
};