import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const placeOrFood = createSlice({
  name: "placeOrFood",
  initialState: "both",
  reducers: {
    changeS(state : string, action : PayloadAction<string>) {
      return action.payload;
    },
  },
});

export let { changeS } = placeOrFood.actions;
export default placeOrFood;
