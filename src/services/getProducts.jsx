import http from "./httpServices";

export default function (){
    return http.get('/products')
}