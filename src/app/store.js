import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "../features/feeds/feedSlice";

export const store = configureStore({
  reducer: {
    feeds: feedReducer,
  },
});
