import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const placeMarkers = createSlice({
  name: "placeMarkers",
  initialState: [],
  reducers: {
    setPlaceMarkers(state, action: PayloadAction<[]>) {
      return action.payload;
    },
  },
});

export let { setPlaceMarkers } = placeMarkers.actions;
export default placeMarkers;
