import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import userReducer from "@slice/userSlice";
import commonSlice from "@slice/commonSlice";

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    user: userReducer,
    common: commonSlice,
  })(state, action);
};

export default reducer;

export type RootState = ReturnType<typeof reducer>;
