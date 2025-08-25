import React, { useState, useEffect } from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import tw from "twrnc"

import { useRouter } from "expo-router"
import AuthWrapper from "@/src/components/wrapper/auth-wrapper"
import MainLoginButton from "@/src/style/button-styles/main-login"

const AuthVerification = () => {
  const navRouter = useRouter()

  const confirmPin = () => {
    navRouter.push("/auth-pin")
  }

  return (
    <AuthWrapper>
      <View
        style={[
          tw`flex-1 items-center justify-center px-6 pt-18`,
          { paddingTop: 80 },
        ]}
      >
        <Text style={tw`text-4xl font-bold text-white mb-3`}>Verification</Text>
        <Text style={tw`text-center text-lg text-slate-300`}>
          Enter 4 digit code that send on your email
        </Text>
        <TouchableOpacity>
          <Text style={tw`text-center text-xs text-slate-400 mt-3`}>
            Didn’t Receive the code?{" "}
            <Text style={tw`text-center text-xs text-white mt-1`}>
              Resend New Code
            </Text>
          </Text>
        </TouchableOpacity>
        <View style={styles.formContainer}>
          <MainLoginButton onPress={confirmPin} title="Verify" primary />
        </View>
      </View>
    </AuthWrapper>
  )
}

export default AuthVerification

const styles = StyleSheet.create({
  formContainer: {
    width: "100%",
    marginBottom: 24,
  },
})
