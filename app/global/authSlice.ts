import {AllowUserActionPayloadProps, AuthProps} from "@app/global/models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@app/redux/models";

const initialState: AuthProps = {
    isAuthenticated: false,
    isVerified: false,
    password: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        allowUser: (state, action: PayloadAction<AllowUserActionPayloadProps>) => {
            const { isVerified, password } = action.payload;

            state.isAuthenticated = true;
            state.isVerified = isVerified;
            state.password = isVerified ? '' : password
        },
        disconnectUser: () => initialState
    }
});

const { actions, reducer } = authSlice;

export const { allowUser, disconnectUser } = actions;

export const authSelector = (state: RootState) => state.auth;

export default reducer;