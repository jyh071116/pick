import { configureStore } from "@reduxjs/toolkit";
import partialFullpage from "./partialFullpage";

export const store = configureStore({
  reducer: {
    partialFullpage: partialFullpage.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
