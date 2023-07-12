import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const foodMarkers = createSlice({
  name: "foodMarkers",
  initialState: [],
  reducers: {
    setFoodMarkers(state, action: PayloadAction<[]>) {
      return action.payload;
    },
  },
});

export let { setFoodMarkers } = foodMarkers.actions;
export default foodMarkers;
