import { StyleSheet, Text, View } from "react-native"
import React from "react"
import AuthOnboarding from "@/src/components/auth/auth-home"
import ResetPassword from "./reset-password"
import AuthPin from "./auth-pin"
import OtpScreen from "./auth-verification"

const LouBank = () => {
  return (
    <>
      {/* <AuthOnboarding /> */}
      {/* <AuthPin /> */}
      <OtpScreen />
    </>
  )
}

export default LouBank

const styles = StyleSheet.create({})
