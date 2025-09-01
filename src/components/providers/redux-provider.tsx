import { bankStore } from "@/src/store/store"
import React from "react"
import { Provider } from "react-redux"
import { GestureHandlerRootView } from "react-native-gesture-handler"

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={bankStore}>{children}</Provider>
    </GestureHandlerRootView>
  )
}
