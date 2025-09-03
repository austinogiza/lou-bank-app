import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./auth-slice"

export const bankStore = configureStore({
  reducer: {
    auth: authReducer,
  },
})

export type RootState = ReturnType<typeof bankStore.getState>
export type AppDispatch = typeof bankStore.dispatch
