import { Platform, StyleSheet, Text, View } from "react-native"
import React, { FC, useEffect } from "react"
import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"
import ReactQueryProvider from "./tanstack-query"
import { PinProvider } from "@/src/context/pin-context"
import { Toaster } from "sonner-native"
import { useAppDispatch, useAppSelector } from "@/src/store/hooks"
import { authCheckState } from "@/src/store/auth-slice"
import { useRouter } from "expo-router"
interface AppProviderProps {
  children?: React.ReactNode
}
const AppProvider: FC<AppProviderProps> = (props) => {
  const { children } = props
  const dispatch = useAppDispatch()
  const { loading, token } = useAppSelector((state) => state.auth)
  const isAuthenticated = !loading && !!token
  const router = useRouter()
  useEffect(() => {
    dispatch(authCheckState())
    if (isAuthenticated) {
      router.navigate("/(tabs)")
    } else {
      router.navigate("/")
    }
  }, [router, isAuthenticated, dispatch])
  return (
    <>
      <Toaster />
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <PinProvider>
        <ReactQueryProvider>
          <SafeAreaProvider>{children}</SafeAreaProvider>
        </ReactQueryProvider>
      </PinProvider>
    </>
  )
}

export default AppProvider

const styles = StyleSheet.create({})
