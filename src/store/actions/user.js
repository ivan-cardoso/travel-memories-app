import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const createUser = createAsyncThunk('CREATE_USER', async (values) => {
    try {
        const user = await Axios.post('/api/user/signUp', values)
        return user.data
    } catch (error) {
        console.log('ERR', error)
    }
})

export const loginUser = createAsyncThunk('LOGIN_USER', async (values)=> {
    try {
        const user = await Axios.post('api/user/signIn', values)
        return user.data
    } catch (error) {
        console.log('ERR', error)
    }
}) 