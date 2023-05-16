import globalReducer from "@app/global/globalSlice";
import {combineReducers} from "@reduxjs/toolkit";
import api from "@app/api";

const reducers = {
    [api.reducerPath]: api.reducer,
    global: globalReducer
}

export default combineReducers<typeof reducers>(reducers);