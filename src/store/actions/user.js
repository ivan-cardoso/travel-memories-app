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