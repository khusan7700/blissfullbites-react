import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import HomePage from "./screens/homePage";
import HomePageReducer from "./screens/homePage/slice";
import { curryGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import reduxLogger from "redux-logger";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    // @ts-ignore
    getDefaultMiddleware().concat(reduxLogger),
  reducer: {
    HomePage: HomePageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
