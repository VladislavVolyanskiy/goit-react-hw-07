import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};
const filterSlice = createSlice({
  initialState,
  name: "changeFilter",
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});
export const selectNameFilter = (state) => state.filters.name;
export const { changeFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
