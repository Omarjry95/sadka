import {DonationProps} from "@app/global/models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@app/redux/models";

const initialState: DonationProps = {
  isSpontaneous: true
}

export const donationSlice = createSlice({
  name: 'donation',
  initialState,
  reducers: {
    setIsDonationSpontaneous: (state, action: PayloadAction<boolean>) => {
      state.isSpontaneous = action.payload;
    }
  }
});

const { actions, reducer } = donationSlice;

export const { setIsDonationSpontaneous } = actions;

export const donationSelector = (state: RootState) => state.donation;

export default reducer;