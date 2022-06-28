import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@interface/user";

const initialState: Array<User> = [
  {
    id: 1,
    name: "divisign",
  },
];
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userAction: (state, action: PayloadAction<User>) => {
      const { id, name } = action.payload;
      state.push({ id, name });
    },
  },
});

const { actions, reducer } = userSlice;
export const { userAction } = actions;
export default reducer;
