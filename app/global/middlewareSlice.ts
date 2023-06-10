import MiddlewareProps from "./models/MiddlewareProps";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@app/redux/models";
import middlewareApi from "../api/middlewares";
import {WsMiddlewareResponseBaseProps} from "@app/api/models";

const initialState: MiddlewareProps = {}

export const middlewareSlice = createSlice({
    name: 'middleware',
    initialState,
    reducers: {
        setUserBearerToken: (state, action: PayloadAction<string>) => {
            state.userBearerToken = action.payload;
        }
    },
    extraReducers: (builder) => {
        // @ts-ignore
        builder.addMatcher(middlewareApi.endpoints.getClientCredentialsBearerToken.matchFulfilled,
            (state, action: PayloadAction<WsMiddlewareResponseBaseProps>) => {
            state.clientCredentialsBearerToken = action.payload.access_token;
        })
    }
});

const { actions, reducer } = middlewareSlice;

export const { setUserBearerToken } = actions;

export const middlewareSelector = (state: RootState) => state.middleware;

export default reducer;