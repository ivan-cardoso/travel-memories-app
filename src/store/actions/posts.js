import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const getAllPosts = createAsyncThunk("GET_POSTS", async ()=>{
    try {
        const posts = await Axios.get('https://api-3sxs63jhua-uc.a.run.app/v1/userId')
        return posts.data
    } catch (error) {
        throw error
    }
})