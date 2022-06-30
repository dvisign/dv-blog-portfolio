import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import reducer from "@slice/reducers";

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});

// const createStore = () => store;
// export type RootState = ReturnType<typeof reducer>;
// export type AppDispatch = typeof store.dispatch;
// const wrapper = createWrapper(createStore);
// export default wrapper;
const wrapper = createWrapper(() => store);
export default wrapper;
