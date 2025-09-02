import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { endpoint } from "../constant"

const isValidToken = (token: string | null | undefined): boolean =>
  Boolean(token && typeof token === "string" && token.trim() !== "")

const getTokenFromStore = async (): Promise<string> => {
  const token = await AsyncStorage.getItem("louBankToken")
  return isValidToken(token) ? `Bearer ${token}` : "Bearer "
}

export const authAxios = axios.create({
  baseURL: endpoint,
})

authAxios.interceptors.request.use(
  async (config) => {
    const token = await getTokenFromStore() // Fixed: await the promise

    if (token && token !== "Bearer ") {
      // Optional: better check
      config.headers.Authorization = token
    }

    return config
  },
  (error) => Promise.reject(error)
)
