import { bankStore } from "@/src/store/store"
import React from "react"
import { Provider } from "react-redux"

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <Provider store={bankStore}>{children}</Provider>
}
