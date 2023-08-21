import {CurrentUserProps} from "@app/global/models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@app/redux/models";
import userProtectedApi from "../api/userProtected";
import {WsUserDetailsBaseProps} from "@app/api/models";

type UserSliceProps = { currentUser?: CurrentUserProps };

const initialState: UserSliceProps = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserDetails: (state, action: PayloadAction<CurrentUserProps>) => {
            state.currentUser = action.payload
        },
        removeUserDetails: (state) => {
            state.currentUser = undefined
        }
    },
    extraReducers: (builder) => {
        // @ts-ignore
        builder.addMatcher(userProtectedApi.endpoints.getUserDetails.matchFulfilled,
          (state, action: PayloadAction<WsUserDetailsBaseProps>) => {
            state.currentUser = action.payload;
          })
    }
});

const { actions, reducer } = userSlice;

export const { removeUserDetails } = actions;

export const userSelector = (state: RootState) => state.user;

export default reducer;