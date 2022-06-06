import { configureStore } from "@reduxjs/toolkit";
// import {userReducer} from './reducers/user'
import {postsReducer} from './reducers/posts'

const store = configureStore({
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck : false
    }),
    reducer : {
        // user : userReducer,
        posts : postsReducer
    }
})

export default store