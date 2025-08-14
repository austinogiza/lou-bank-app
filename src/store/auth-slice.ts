import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"
import { toast } from "sonner"
import { loginURL } from "@/constants/constants"
import { getExpiresFromUrl } from "@/utils/utils"
import { fetchUserDetails } from "@/utils/fetch-user-details"
import type { any } from "@/utils/types"

type AuthError = unknown

type AuthState = {
  token: string | null
  user: null
  profilePhoto: string | null
  loading: boolean
  error: AuthError | null
}

const initialState: AuthState = {
  token: null,
  user: null,
  profilePhoto: null,
  loading: false,
  error: null,
}

function safeParse<T>(raw: string | null): T | null {
  try {
    return raw ? (JSON.parse(raw) as T) : null
  } catch {
    return null
  }
}

/** LOGIN */
export const authLogin = createAsyncThunk<
  { token: string; user: any },
  { username?: string; password?: string; navigation?: (path: string) => void }
>(
  "auth/login",
  async ({ username, password, navigation }, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.post(loginURL, {
        username: String(username ?? "").trim(),
        password,
      })

      const expirationDate = new Date(
        new Date(res?.data?.jwt?.expirationDate).getTime()
      )
      const token: string = res?.data?.jwt?.token
      const user: any = res?.data?.user

      const needsPasswordChange = (user as any)?.needsPasswordChange

      localStorage.setItem("feedToken", token)
      localStorage.setItem("feedTokenDate", expirationDate.toISOString())
      localStorage.setItem("userInfo", JSON.stringify(user))
      localStorage.setItem(
        "passwordChange",
        JSON.stringify(needsPasswordChange)
      )

      const profileKey = (user as any)?.profile_s3_key
      if (profileKey) {
        const timestamp = getExpiresFromUrl(profileKey)
        const formattedDate = new Date(Number(timestamp) * 1000).toISOString()
        localStorage.setItem("userProfilePhoto", JSON.stringify(profileKey))
        localStorage.setItem("profilePhotoExpire", formattedDate)
        dispatch(setProfilePhoto(profileKey))
      }

      navigation?.("/home")
      return { token, user }
    } catch (err: any) {
      return rejectWithValue(err?.response?.data ?? err?.message ?? err)
    }
  }
)

/** CHECK AUTH FROM LOCALSTORAGE */
export const authCheckState = createAsyncThunk<
  { token: string; user: any | null },
  void
>("auth/checkState", async (_, { dispatch, rejectWithValue }) => {
  try {
    const token = localStorage.getItem("feedToken")
    const expirationDateString = localStorage.getItem("feedTokenDate")
    const rawUser = localStorage.getItem("userInfo")

    if (!token || !expirationDateString) {
      await dispatch(authLogout()).unwrap()
      // Use reject to drive error state to null later via matcher if you want
      return rejectWithValue("No token")
    }

    const expirationDate = new Date(expirationDateString)
    if (expirationDate <= new Date()) {
      await dispatch(authLogout()).unwrap()
      return rejectWithValue("Token expired")
    }

    const storedUser = safeParse<any>(rawUser)
    let freshUser: any | null = storedUser ?? null

    // Refresh user details & profile photo just like the old code
    const userId = Number((storedUser as any)?.userId)
    if (!Number.isNaN(userId) && userId > 0) {
      const res = await fetchUserDetails(userId)
      const userInfo: any = res?.userData
      freshUser = userInfo ?? storedUser ?? null

      const newPhoto = (userInfo as any)?.profile_s3_key
      if (newPhoto) {
        const timestamp = getExpiresFromUrl(newPhoto)
        const formattedDate = new Date(Number(timestamp) * 1000).toISOString()
        localStorage.setItem("userProfilePhoto", JSON.stringify(newPhoto))
        localStorage.setItem("profilePhotoExpire", formattedDate)
        dispatch(setProfilePhoto(newPhoto))
      }
    }

    return { token, user: freshUser }
  } catch (err) {
    await dispatch(authLogout()).unwrap()
    return rejectWithValue("Auth check failed")
  }
})

/** LOGOUT */
export const authLogout = createAsyncThunk<void, void>(
  "auth/logout",
  async () => {
    localStorage.removeItem("feedToken")
    localStorage.removeItem("feedTokenDate")
    localStorage.removeItem("userInfo")
    localStorage.removeItem("passwordChange")
    localStorage.removeItem("userProfilePhoto")
    localStorage.removeItem("profilePhotoExpire")
    toast.info("Logged out. Kindly login to continue")
  }
)

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setProfilePhoto(state, action: PayloadAction<string | null>) {
      state.profilePhoto = action.payload
    },
    resetAuthError(state) {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    // login
    builder.addCase(authLogin.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(authLogin.fulfilled, (state, action) => {
      state.loading = false
      state.token = action.payload.token
      state.user = action.payload.user
      state.error = null
    })
    builder.addCase(authLogin.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload ?? action.error
    })

    // check state
    builder.addCase(authCheckState.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(authCheckState.fulfilled, (state, action) => {
      state.loading = false
      state.token = action.payload.token
      state.user = action.payload.user
      state.error = null
    })
    builder.addCase(authCheckState.rejected, (state) => {
      // We already logged out inside the thunk if needed
      state.loading = false
      state.token = null
      state.user = null
    })

    // logout
    builder.addCase(authLogout.fulfilled, (state) => {
      Object.assign(state, initialState)
    })
  },
})

export const { setProfilePhoto, resetAuthError } = authSlice.actions
export default authSlice.reducer
