import TabSlice from "./States/TabSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    tab: TabSlice,
  },
});

export default store;
