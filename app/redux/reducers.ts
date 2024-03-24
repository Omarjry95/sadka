import globalReducer from "@app/global/globalSlice";
import authReducer from "@app/global/authSlice";
import userReducer from "@app/global/userSlice";
import middlewareReducer from "@app/global/middlewareSlice";
import donationReducer from "@app/global/donationSlice";
import {combineReducers} from "@reduxjs/toolkit";
import { clientProtectedApi, userProtectedApi, middlewareApi } from "@app/api";

const reducers = {
    [clientProtectedApi.reducerPath]: clientProtectedApi.reducer,
    [userProtectedApi.reducerPath]: userProtectedApi.reducer,
    [middlewareApi.reducerPath]: middlewareApi.reducer,
    middleware: middlewareReducer,
    global: globalReducer,
    auth: authReducer,
    user: userReducer,
    donation: donationReducer
}

export default combineReducers<typeof reducers>(reducers);