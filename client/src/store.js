import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "./slices/apiSlice";

import authSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
  },
  //   devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
