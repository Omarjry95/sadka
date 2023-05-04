import { createSlice } from '@reduxjs/toolkit';
import {GlobalBehavior} from "@app/global/models";
import {useSelector} from "react-redux";
import {RootState} from "@app/redux/models";

const initialState: GlobalBehavior = {
    isLoading: false
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        showLoading: (state) => {
            state.isLoading = true;
        },
        hideLoading: (state) => {
            state.isLoading = false;
        },
    }
});

const { actions, reducer } = globalSlice;

export const { showLoading, hideLoading } = actions;

export const globalSelector = (state: RootState) => state.global;

export default reducer;