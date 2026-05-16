import { createSlice } from "@reduxjs/toolkit";

const stepperSlice = createSlice({
  name: "stepper",
  initialState: { activePage: 0 },
  reducers: {
    nextPage: (state) => {
      state.activePage += 1;
    },
    prevPage: (state) => {
      state.activePage = Math.max(0, state.activePage - 1);
    },
    // inside stepperSlice reducers
    setPage: (state, action) => {
      state.activePage = action.payload;
    },
  },
});

export const { nextPage, prevPage, setPage } = stepperSlice.actions;
export default stepperSlice.reducer;
