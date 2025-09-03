import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { endpoint } from "../constant"

const isValidToken = (token: string | null | undefined): boolean =>
  Boolean(token && typeof token === "string" && token.trim() !== "")

const getTokenFromStore = async (): Promise<string | null> => {
  const token = await AsyncStorage.getItem("louBankToken")
  if (!token) return null
  return `Bearer ${token}`
}

// Axios instance
export const authAxios = axios.create({
  baseURL: endpoint,
})

authAxios.interceptors.request.use(
  async (config) => {
    const token = await getTokenFromStore()

    if (isValidToken(token)) {
      config.headers.Authorization = token as string
    }

    return config
  },
  (error) => Promise.reject(error)
)
