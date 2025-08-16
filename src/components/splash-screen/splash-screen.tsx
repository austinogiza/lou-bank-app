import { StyleSheet, Text, View } from "react-native"
import React from "react"
import AppLogo from "../images/app-logo"

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
  },
})
