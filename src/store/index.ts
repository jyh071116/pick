import { configureStore } from "@reduxjs/toolkit";
import partialFullpage from "./partialFullpage";
import searchVal from "./searchVal";
import foodMarkers from "./foodMarkers";
import placeMarkers from "./placeMarkers";
import mapBound from "./mapBound";
import placeOrFood from "./placeOrFood";

export const store = configureStore({
  reducer: {
    partialFullpage: partialFullpage.reducer,
    searchVal: searchVal.reducer,
    foodMarkers: foodMarkers.reducer,
    placeMarkers: placeMarkers.reducer,
    mapBound: mapBound.reducer,
    placeOrFood: placeOrFood.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
