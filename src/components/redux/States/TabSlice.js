// features/counter/counterSlice.js

import { createSlice } from "@reduxjs/toolkit";

// Initial state for the slice
const initialState = {
  tab: 0,
  logData: null,
};

// Create a slice
const tabSlice = createSlice({
  name: "tab", // A name for the slice
  initialState,
  reducers: {
    updateTab: (state, action) => {
      const { tab, logData } = action.payload;
      if (tab !== undefined) {
        state.tab = tab;
      }
      if (logData !== undefined) {
        state.logData = logData;
      }
    },
  },
});

// Export actions
export const { updateTab } = tabSlice.actions;

// Export the reducer
export default tabSlice.reducer;
