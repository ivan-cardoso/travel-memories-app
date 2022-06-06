import { createReducer } from "@reduxjs/toolkit";

import {getAllPosts} from '../actions/posts'

export const postsReducer = createReducer([], {
    [getAllPosts.fulfilled] : (state, action) => action.payload,
})