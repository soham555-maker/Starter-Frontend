import { configureStore } from "@reduxjs/toolkit";
import demoFetchSlice from "../Features/DemoFetch/DemoFetchSlice";

export const store = configureStore({
    reducer: {
        demoFetch: demoFetchSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
    });