import globalReducer from "@app/global/globalSlice";
import authReducer from "@app/global/authSlice";
import {combineReducers} from "@reduxjs/toolkit";
import api from "@app/api";

const reducers = {
    [api.reducerPath]: api.reducer,
    global: globalReducer,
    auth: authReducer
}

export default combineReducers<typeof reducers>(reducers);