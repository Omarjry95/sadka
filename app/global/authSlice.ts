import {AuthProps} from "@app/global/models";
import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "@app/redux/models";

const initialState: AuthProps = {
    isAuthenticated: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        allowUser: (state) => {
            state.isAuthenticated = true;
        },
        disconnectUser: (state) => {
            state.isAuthenticated = false;
        }
    }
});

const { actions, reducer } = authSlice;

export const { allowUser, disconnectUser } = actions;

export const authSelector = (state: RootState) => state.auth;

export default reducer;