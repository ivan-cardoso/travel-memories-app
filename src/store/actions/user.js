import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
import jwt_decode from "jwt-decode";

export const createUser = createAsyncThunk('CREATE_USER', async (values) => {
    try {
        const user = await Axios.post('/api/user/signUp', values)
        localStorage.setItem('userToken', user.data.token)
        return user.data
    } catch (error) {
        console.log('ERR', error)
    }
})

export const loginUser = createAsyncThunk('LOGIN_USER', async (values) => {
    try {
        const user = await Axios.post('api/user/signIn', values)
        localStorage.setItem('userToken', user.data.token)
        return user.data
    } catch (error) {
        console.log('ERR', error)
    }
})

export const googleAuth = createAsyncThunk('GOOGLE_AUTH', async (values) => {
    const userGoogle = jwt_decode(values.credential)
    const { name, email } = userGoogle
    try {
        const user = await Axios.post('api/user/googleAuth', { name, email, 'password': values.clientId })
        console.log('REDUX', user.data)
        localStorage.setItem('userToken', user.data.token)
        return user.data
    } catch (error) {
        console.log('ERR', error)
    }
})

