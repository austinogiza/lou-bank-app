import { Platform, StyleSheet } from "react-native"
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

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const dispatch = useAppDispatch()
  const { loading, token, kycDone } = useAppSelector((state) => state.auth)
  const router = useRouter()

  const isAuthenticated = !!token

  // ✅ Run check once on mount
  useEffect(() => {
    dispatch(authCheckState())
  }, [dispatch])

  // ✅ Handle navigation only when auth state changes
  useEffect(() => {
    if (!loading) {
      if (isAuthenticated && kycDone) {
        // router.replace("/(tabs)")
      } else if (isAuthenticated && !kycDone) {
        // router.replace("/profile-setup")
      } else {
        router.replace("/login")
      }
    }
  }, [loading, isAuthenticated, kycDone, router])

  return (
    <>
      <Toaster />
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <PinProvider>
        <ReactQueryProvider>
          <SafeAreaProvider style={styles.container}>
            {children}
          </SafeAreaProvider>
        </ReactQueryProvider>
      </PinProvider>
    </>
  )
}

export default AppProvider

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
