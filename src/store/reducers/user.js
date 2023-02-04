import { createSlice } from "@reduxjs/toolkit";

import { createUser, googleAuth, loginUser } from '../actions/user'


const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null

const initialState = {
    loading: false,
    userInfo: null,
    userToken,
    error: null,
    success: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('userToken')
            state.loading = false
            state.userInfo = null
            state.userToken = null
            state.error = null
        },
        setCrendentials: (state, { payload }) => {
            state.userInfo = {'email' : payload.user.email, 'id' : payload.user.id}
        }
    },
    extraReducers: {
        // REGISTER USER
        [createUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [createUser.fulfilled]: (state) => {
            state.loading = false
            state.success = true
        },
        [createUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },

        // LOGIN USER
        [loginUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [loginUser.fulfilled]: (state, {payload}) => {
            state.loading = false
            // console.log('PAYLOAD', payload)
            state.userToken = payload.token
            state.userInfo = {'email' : payload.user.email, 'id' : payload.user._id}
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },

        //GOOGLE AUTH
        [googleAuth.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [googleAuth.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userInfo = { 'email': payload.email, 'id': payload.id }
            state.userToken = payload.token
        },
        [googleAuth.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        }
    }
})

export const { logout, setCrendentials } = userSlice.actions

export default userSlice.reducer

// export const userReducer = createReducer({}, {
//     [createUser.fulfilled]: (state, action) => action.payload,
//     [googleAuth.fulfilled]: (state, action) => action.payload
// })