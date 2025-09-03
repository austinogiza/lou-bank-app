import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { BankColorsThemes } from "@/src/style/color"
import AppLogo from "@/src/components/images/app-logo"

const AppSplashScreen = () => {
  return (
    <View style={styles.container}>
      <AppLogo />
    </View>
  )
}

export default AppSplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: BankColorsThemes.primary[500],
  },
})
