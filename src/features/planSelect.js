import { createSlice } from "@reduxjs/toolkit";

const Plans = createSlice({
  name: "UserPlan",
  initialState: {
    activePlanName: "",
    price: "",
    isMonthly: true,
  },
  reducers: {
    setPlan: (state, action) => {
      state.activePlanName = action.payload;
    },
    setBilling: (state, action) => {
      state.isMonthly = action.payload;
    },
    setPlanPrice: (state, action) => {
      state.price = action.payload;
    },
  },
});

export const { setPlan, setBilling, setPlanPrice } = Plans.actions;
export default Plans.reducer;
