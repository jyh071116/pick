import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const searchVal = createSlice({
  name: "searchVal",
  initialState: "",
  reducers: {
    changeSearchVal(state: string, action: PayloadAction<string>) {
      return action.payload;
    },
  },
});

export let { changeSearchVal } = searchVal.actions;
export default searchVal;
