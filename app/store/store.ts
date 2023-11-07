import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./feature/slice";

const store = configureStore({
  reducer: userReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof userReducer>;

export default store;
