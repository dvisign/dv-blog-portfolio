import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import reducer from "@slice/reducers";

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});

const wrapper = createWrapper(() => store);
export default wrapper;
export type RootState = ReturnType<typeof store.getState>;
