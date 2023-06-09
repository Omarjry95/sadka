import MiddlewareProps from "./models/MiddlewareProps";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@app/redux/models";
import middlewareApi from "../api/middlewares";
import {WsMiddlewareResponseBaseProps} from "@app/api/models";

const initialState: MiddlewareProps = {}

export const middlewareSlice = createSlice({
    name: 'middleware',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        // @ts-ignore
        builder.addMatcher(middlewareApi.endpoints.getClientCredentialsBearerToken.matchFulfilled,
            (state, action: PayloadAction<WsMiddlewareResponseBaseProps>) => {
            console.log("Getting Token !");
            state.clientCredentialsBearerToken = action.payload.access_token;
        })
    }
});

const { reducer } = middlewareSlice;

export const middlewareSelector = (state: RootState) => state.middleware;

export default reducer;