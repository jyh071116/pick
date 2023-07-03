import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const partialFullpage = createSlice({
  name: "partialFullpage",
  initialState: false,
  reducers: {
    changeState(state : boolean, action : PayloadAction<boolean>) {
      return action.payload;
    },
  },
});

export let { changeState } = partialFullpage.actions;
export default partialFullpage;
