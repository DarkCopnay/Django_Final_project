import axios from 'axios'

export const AxiosInit = axios.create({
    baseURL: 'http://localhost:8000/api/',
})

AxiosInit.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')

    if (token) {
        config.headers.Authorization = localStorage.getItem('token');
    } else {
        localStorage.removeItem('token');
    }

    return config;
})


export const GetTourList = async () => {
    try {
        const response = await AxiosInit.get('tours/')

        return response;
    } catch(err) {
        console.error(err);
    }
}



export const Authorization = async (data) => {
    const request = await AxiosInit.post('auth/login/', data)

    try {
        return request
    } catch(err) {
       return request
    }
}

export const Registration = async (data) => {
    const request = await AxiosInit.post('auth/register/', data)

    try {
        return request
    } catch(err) {
        return request
    }
}

export const GetProfle = async (id) => {
    try {
        const response = await AxiosInit.get(`users/${id}/`)

        return response
    } catch(err) {
        console.log(err)
    }
}