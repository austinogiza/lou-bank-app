import { Platform, StyleSheet, Text, View } from "react-native"
import React, { FC } from "react"
import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"
import ReactQueryProvider from "./tanstack-query"
interface AppProviderProps {
  children?: React.ReactNode
}
const AppProvider: FC<AppProviderProps> = (props) => {
  const { children } = props
  return (
    <>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <ReactQueryProvider>
        <SafeAreaProvider>{children}</SafeAreaProvider>
      </ReactQueryProvider>
    </>
  )
}

export default AppProvider

const styles = StyleSheet.create({})
