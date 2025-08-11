import { Platform, StyleSheet, Text, View } from "react-native"
import React, { FC } from "react"
import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"
import ReactQueryProvider from "./tanstack-query"
import { PinProvider } from "@/src/context/pin-context"
interface AppProviderProps {
  children?: React.ReactNode
}
const AppProvider: FC<AppProviderProps> = (props) => {
  const { children } = props
  return (
    <>
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
