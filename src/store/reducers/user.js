import { createReducer } from "@reduxjs/toolkit";

import {createUser} from '../actions/user'

export const userReducer = createReducer({}, {
    [createUser.fulfilled] : (state, action) => action.payload 
})