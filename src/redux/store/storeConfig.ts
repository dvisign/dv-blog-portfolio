import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import userReducer from "@slice/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

const wrapper = createWrapper(() => store);
export default wrapper;
export type RootState = ReturnType<typeof store.getState>;
