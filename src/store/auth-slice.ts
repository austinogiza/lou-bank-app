// features/auth/authSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { toast } from "sonner-native"
import { AuthLoginURL, AuthSignupURL } from "../api/constant"

interface AuthState {
  token: string | null
  loading: boolean
  error: string | null
}

const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
}

// --- Async Thunks ---

// Login
export const authLogin = createAsyncThunk<
  string,
  { email: string; password: string; navigation?: any },
  { rejectValue: string }
>(
  "auth/login",
  async ({ email, password, navigation }, { rejectWithValue }) => {
    try {
      const res = await axios.post(AuthLoginURL, { email, password })
      const token = res.data.key

      const expirationDate = new Date(
        new Date().getTime() + 7 * 24 * 60 * 60 * 1000
      )

      await AsyncStorage.setItem("louBankToken", token)
      await AsyncStorage.setItem(
        "louBankTokenDate",
        expirationDate.toISOString()
      )

      if (navigation) {
        navigation.navigate("/(tabs)") // adjust route
      }

      return token
    } catch (err: any) {
      const authError =
        err.response?.data?.non_field_errors?.[0] || "Login failed"
      toast.error(authError)
      return rejectWithValue(authError)
    }
  }
)

// Signup
export const authSignup = createAsyncThunk<
  string,
  { email: string; password1: string; password2: string; navigation?: any },
  { rejectValue: string }
>("auth/signup", async (payload, { rejectWithValue }) => {
  try {
    const res = await axios.post(AuthSignupURL, payload)
    const token = res.data.key
    console.log("API success:payload", payload, res)
    console.log("API success:", token)
    await AsyncStorage.setItem("louBankToken", token)
    await AsyncStorage.setItem(
      "louBankTokenDate",
      new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
    )

    payload.navigation?.navigate("Dashboard")

    return token
  } catch (err: any) {
    console.log("API error:", err?.response?.data)
    if (err.response?.data?.email?.[0]) {
      toast.error(err.response?.data?.email?.[0])
      return rejectWithValue(err.response?.data?.email?.[0])
    } else if (err.response?.data?.password1?.[0]) {
      toast.error(err.response?.data?.password1?.[0])
      return rejectWithValue(err.response?.data?.password1?.[0])
    } else {
      toast.error("Signup failed")
      return rejectWithValue("Signup failed")
    }
  }
})

// Logout
export const authLogout = createAsyncThunk("auth/logout", async () => {
  try {
    await AsyncStorage.clear()
  } catch (e) {
    // ignore logout server error
  }
  await AsyncStorage.clear()
  return null
})

// Check session
export const authCheckState = createAsyncThunk("auth/check", async () => {
  const token = await AsyncStorage.getItem("louBankToken")
  const expirationDateString = await AsyncStorage.getItem("louBankTokenDate")

  if (!token || !expirationDateString) {
    await AsyncStorage.clear()
    return null
  }

  const expirationDate = new Date(expirationDateString)
  if (expirationDate <= new Date()) {
    await AsyncStorage.clear()
    return null
  }

  return token
})

// --- Slice ---
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(authLogin.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(authLogin.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false
        state.token = action.payload
      })
      .addCase(authLogin.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || "Login failed"
      })

      // Signup
      .addCase(authSignup.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(authSignup.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false
        state.token = action.payload
      })
      .addCase(authSignup.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || "Signup failed"
      })

      // Logout
      .addCase(authLogout.fulfilled, (state) => {
        state.token = null
        state.loading = false
      })

      // Check session
      .addCase(authCheckState.fulfilled, (state, action) => {
        state.token = action.payload
      })
  },
})

export const { clearError } = authSlice.actions
export default authSlice.reducer
