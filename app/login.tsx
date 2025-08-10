import { StyleSheet, Text, View } from "react-native"
import React from "react"
import AuthWrapper from "@/src/components/wrapper/auth-wrapper"
import AppLogo from "@/src/components/images/app-logo"

const Logincreen = () => {
  return (
    <AuthWrapper>
      <AppLogo />
      <View>
        <Text>Logincreen</Text>
      </View>
    </AuthWrapper>
  )
}

export default Logincreen

const styles = StyleSheet.create({})
