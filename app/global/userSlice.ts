import {CurrentUserProps} from "@app/global/models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@app/redux/models";

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
    }
});

const { actions, reducer } = userSlice;

export const { setUserDetails, removeUserDetails } = actions;

export const userSelector = (state: RootState) => state.user;

export default reducer;