import { createReducer } from "@reduxjs/toolkit";

import {createUser,googleRegister } from '../actions/user'

export const userReducer = createReducer({}, {
    [createUser.fulfilled] : (state, action) => action.payload,
    [googleRegister.fulfilled] : (state, action) => action.payload
})