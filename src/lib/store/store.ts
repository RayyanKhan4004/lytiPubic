import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./slices/authSlice";
import { authApi } from "../rtkQuery/authApi";
import { userApi } from "../rtkQuery/userApi";
import { orderApi } from "../rtkQuery/orderApi";
import { dashboardApi } from "../rtkQuery/dashboardApi";
import { challengeApi } from "../rtkQuery/challengeApi";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth: AuthSlice,
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [orderApi.reducerPath]: orderApi.reducer,
  [dashboardApi.reducerPath]: dashboardApi.reducer,
  [challengeApi.reducerPath]: challengeApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      authApi.middleware,
      userApi.middleware,
      orderApi.middleware,
      dashboardApi.middleware,
      challengeApi.middleware
    ),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
