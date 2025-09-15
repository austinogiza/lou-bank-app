// features/auth/authSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { toast } from "sonner-native"
import { AddUserInfoURL, AuthLoginURL, AuthSignupURL } from "../api/constant"
import { authAxios } from "../api/queries/auth-axios"

interface AuthState {
  token: string | null
  loading: boolean
  onboarded: boolean
  kycDone: boolean
  error: string | null
}

const initialState: AuthState = {
  token: null,
  loading: false,
  onboarded: false,
  kycDone: false,
  error: null,
}

// ----------------------
// Logout
// ----------------------
export const authLogout = createAsyncThunk("auth/logout", async () => {
  try {
    await AsyncStorage.clear()
  } catch (e) {}
  return null
})

// ----------------------
// Login
// ----------------------
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
      const user = await authAxios.get(AddUserInfoURL)
      console.log("User info:", user, user.data)

      // const expirationDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
      // await AsyncStorage.setItem("louBankToken", token)
      // await AsyncStorage.setItem(
      //   "louBankTokenDate",
      //   expirationDate.toISOString()
      // )

      // mark KYC as false until completed
      // await AsyncStorage.setItem("kycDone", "false")

      // if (navigation) {
      //   navigation.navigate("/(tabs)")
      // }

      return token
    } catch (err: any) {
      const authError =
        err.response?.data?.non_field_errors?.[0] || "Login failed"
      toast.error(authError)
      return rejectWithValue(authError)
    }
  }
)

// ----------------------
// Signup
// ----------------------
export const authSignup = createAsyncThunk<
  string,
  { email: string; password1: string; password2: string; navigation?: any },
  { rejectValue: string }
>("auth/signup", async (payload, { rejectWithValue }) => {
  try {
    const res = await axios.post(AuthSignupURL, payload)
    const token = res.data.key

    await AsyncStorage.setItem("louBankToken", token)
    await AsyncStorage.setItem(
      "louBankTokenDate",
      new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
    )

    // mark KYC as false until completed
    await AsyncStorage.setItem("kycDone", "false")

    payload.navigation?.navigate("profile-setup")
    return token
  } catch (err: any) {
    console.log("API Signup error:", err?.response?.data)
    toast.error("Signup failed")
    return rejectWithValue("Signup failed")
  }
})

export const authCheckState = createAsyncThunk("auth/check", async () => {
  const token = await AsyncStorage.getItem("louBankToken")
  const expirationDateString = await AsyncStorage.getItem("louBankTokenDate")
  const kycDone = await AsyncStorage.getItem("kycDone")
  // await AsyncStorage.clear()
  if (!token || !expirationDateString) {
    await AsyncStorage.clear()
    return { token: null, kycDone: false }
  }

  const expirationDate = new Date(expirationDateString)
  if (expirationDate <= new Date()) {
    await AsyncStorage.clear()
    return { token: null, kycDone: false }
  }

  return { token, kycDone: kycDone === "true" }
})

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

      .addCase(authLogout.fulfilled, (state) => {
        state.token = null
        state.kycDone = false
        state.loading = false
      })

      .addCase(authCheckState.fulfilled, (state, action) => {
        state.loading = false
        state.token = action.payload.token
        state.kycDone = action.payload.kycDone
      })
      .addCase(authCheckState.rejected, (state) => {
        state.loading = false
        state.token = null
        state.kycDone = false
      })
  },
})

export const { clearError } = authSlice.actions
export default authSlice.reducer
