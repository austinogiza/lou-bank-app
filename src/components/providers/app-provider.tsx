import { Platform, StyleSheet, Text, View } from "react-native"
import React, { FC } from "react"
import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"
import ReactQueryProvider from "./tanstack-query"
import { PinProvider } from "@/src/context/pin-context"
import { Toaster } from "sonner-native"
import ReduxProvider from "./redux-provider"
interface AppProviderProps {
  children?: React.ReactNode
}
const AppProvider: FC<AppProviderProps> = (props) => {
  const { children } = props
  return (
    <>
      <ReduxProvider>
        <Toaster />
        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
        <PinProvider>
          <ReactQueryProvider>
            <SafeAreaProvider>{children}</SafeAreaProvider>
          </ReactQueryProvider>
        </PinProvider>
      </ReduxProvider>
    </>
  )
}

export default AppProvider

const styles = StyleSheet.create({})
