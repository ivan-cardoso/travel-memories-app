import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const getAllPosts = createAsyncThunk("GET_POSTS", async ()=>{
    try {
        const posts = await Axios.get('/api/posts')
        return posts.data
    } catch (error) {
        throw error
    }
})

export const getSinglePost = createAsyncThunk("GET_SINGLE_POST", async (id)=>{
    try {
        const posts = await Axios.get(`/api/posts/${id}`)
        return posts.data
    } catch (error) {
        throw error
    }
})