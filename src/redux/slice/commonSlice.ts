import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { CommonType } from "@interface/common";
import { getSeason } from "@utils/index";
// import axios from "axios";

const dummyData = {
  navList: [
    {
      url: "/",
      name: "Home",
    },
    {
      url: "/profile",
      name: "Profile",
    },
    {
      url: "/portfolio",
      name: "Portfolio",
    },
    {
      name: "board",
      dropDownList: [
        {
          url: "/reference",
          name: "Reference",
        },
        {
          url: "/log",
          name: "Log",
        },
      ],
    },
    {
      url: "/contact",
      name: "Contact",
    },
  ],
};

export const getCommonData = createAsyncThunk(
  "GET_COMMON",
  async (_, thunkAPI) => {
    try {
      const data = await new Promise((resolve) => {
        resolve(dummyData);
      });
      // const { data } = await axios.get("http://localhost:3000/api/common");
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
    // return axios.get("http://localhost:3000/api/common");
    // return dummyData;
  },
);
const dateTime = new Date();
const initialState: CommonType = {
  navList: [],
  season: getSeason(dateTime),
};
const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    // navListAction: (state, action: PayloadAction<CommonType>) => {
    //   state.navList = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCommonData.pending, () => {
        console.log("pending");
      })
      .addCase(
        getCommonData.fulfilled,
        (state, { payload }: PayloadAction<CommonType>) => {
          return {
            ...state,
            navList: payload.navList,
          };
        },
      )
      .addCase(getCommonData.rejected, () => {
        console.log("reject");
      });
  },
});
export default commonSlice.reducer;
