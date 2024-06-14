import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./slice/counterSlice";
import userSlice from "./slice/userSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    users: userSlice,
  },
});

export default store;
