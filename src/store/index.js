import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck : false
    }),
    reducer : (
        user : userReducer,
        posts : postsReducer
    )
})

export default store