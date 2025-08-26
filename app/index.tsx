import { StyleSheet, Text, View } from "react-native"
import React from "react"
import AuthOnboarding from "@/src/components/auth/auth-home"
import ResetPassword from "./reset-password"
import AuthPin from "./auth-pin"
import OtpScreen from "./auth-verification"
import TransferSuccessful from "./transfer-successful"

const LouBank = () => {
  return (
    <>
      {/* <AuthOnboarding /> */}
      {/* <AuthPin /> */}
      {/* <OtpScreen /> */}
      <TransferSuccessful />
    </>
  )
}

export default LouBank

const styles = StyleSheet.create({})
