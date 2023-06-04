import globalReducer from "@app/global/globalSlice";
import authReducer from "@app/global/authSlice";
import userReducer from "@app/global/userSlice";
import {combineReducers} from "@reduxjs/toolkit";
import api from "@app/api";

const reducers = {
    [api.reducerPath]: api.reducer,
    global: globalReducer,
    auth: authReducer,
    user: userReducer
}

export default combineReducers<typeof reducers>(reducers);