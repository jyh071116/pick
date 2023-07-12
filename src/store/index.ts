import { configureStore } from "@reduxjs/toolkit";
import partialFullpage from "./partialFullpage";
import searchVal from "./searchVal";
import foodMarkers from "./foodMarkers";
import placeMarkers from "./placeMarkers";

export const store = configureStore({
  reducer: {
    partialFullpage: partialFullpage.reducer,
    searchVal: searchVal.reducer,
    foodMarkers: foodMarkers.reducer,
    placeMarkers: placeMarkers.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
