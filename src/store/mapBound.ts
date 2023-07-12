import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const mapBound = createSlice({
  name: "mapBound",
  initialState: {food : [{x : "", y : ""}], place: [{x: "", y: ""}]},
  reducers: {
    setFoodBound(state, action: PayloadAction<{x: string, y: string}[]>) {
      state.food = action.payload;
    },
    setPlaceBound(state, action: PayloadAction<{x: string, y: string}[]>) {
      state.place = action.payload;
    }
  },
});

export let { setFoodBound, setPlaceBound } = mapBound.actions;
export default mapBound;
