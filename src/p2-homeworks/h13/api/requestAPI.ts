import axios from "axios";

export const instance = axios.create({
    baseURL : 'https://neko-cafe-back.herokuapp.com/'
})


export const requestAPI = {
    postSuccess(success: boolean) {
        instance.post('auth/test', {success})
    }
}