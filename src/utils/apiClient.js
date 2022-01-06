import axios from 'axios'

const api=()=>{
    const url="http://localhost:8080/"
    const axiosInstance= axios.create({
        baseURL:url,
        responseType:"json"
    });
    return axiosInstance
}

export default api;