import { createSlice } from "@reduxjs/toolkit";

const AdonActions = createSlice({
  name: "Ads",
  initialState: { selectedAddOns: [] },
  reducers: {
    toggleAddOn: (state, action) => {
      const addon = action.payload;
      const exists = state.selectedAddOns.find(
        (item) => item.name === addon.name,
      );
      if (exists) {
        state.selectedAddOns = state.selectedAddOns.filter(
          (item) => item.name !== addon.name,
        );
      } else {
        state.selectedAddOns.push(addon);
      }
    },
  },
});

export const { toggleAddOn } = AdonActions.actions;
export default AdonActions.reducer;
