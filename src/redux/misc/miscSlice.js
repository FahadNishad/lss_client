import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDropDownOpen: false,
};

const miscSlice = createSlice({
  name: "misc",
  initialState,
  reducers: {
    setIsDropDownOpen: (state, action) => {
      state.isDropDownOpen = action.payload;
    },
  },
});

export const { setIsDropDownOpen } = miscSlice.actions;
export default miscSlice.reducer;
