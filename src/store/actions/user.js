import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
import jwt_decode from "jwt-decode";

export const createUser = createAsyncThunk('CREATE_USER', async (values) => {
    try {
        const user = await Axios.post('/api/user/signUp', values)
        return user.data
    } catch (error) {
        console.log('ERR', error)
    }
})

export const loginUser = createAsyncThunk('LOGIN_USER', async (values) => {
    try {
        const user = await Axios.post('api/user/signIn', values)
        return user.data
    } catch (error) {
        console.log('ERR', error)
    }
})

export const googleRegister = createAsyncThunk('GOOGLE_REGISTER', async (values) => {
    const userGoogle = jwt_decode(values.credential)
    const { name, email } = userGoogle
    try {
        const user = await Axios.post('api/user/googleSignUp', { name, email, 'password' : values.clientId })
        console.log('REDUX', user.data)
        return user.data
    } catch (error) {
        console.log('ERR', error)
    }
})