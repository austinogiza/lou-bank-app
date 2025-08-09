import { StyleSheet, Text, View } from "react-native"
import React, { FC } from "react"
import AppWrapper from "../wrapper/app-wrapper"
import { SafeAreaProvider } from "react-native-safe-area-context"
import ReactQueryProvider from "./tanstack-query"
interface AppProviderProps {
  children?: React.ReactNode
}
const AppProvider: FC<AppProviderProps> = (props) => {
  const { children } = props
  return (
    <>
      <ReactQueryProvider>
        <SafeAreaProvider>
          <AppWrapper>{children}</AppWrapper>
        </SafeAreaProvider>
      </ReactQueryProvider>
    </>
  )
}

export default AppProvider

const styles = StyleSheet.create({})
