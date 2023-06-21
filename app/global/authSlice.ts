import {AuthProps} from "@app/global/models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@app/redux/models";

const initialState: AuthProps = {
    isAuthenticated: false,
    isVerified: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        allowUser: (state, action: PayloadAction<boolean>) => {
            state.isAuthenticated = true;
            state.isVerified = action.payload;
        },
        disconnectUser: () => initialState
    }
});

const { actions, reducer } = authSlice;

export const { allowUser, disconnectUser } = actions;

export const authSelector = (state: RootState) => state.auth;

export default reducer;