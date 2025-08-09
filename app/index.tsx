import { Pressable, StyleSheet, Text, View } from "react-native"
import React from "react"
import { BankColorsThemes } from "../src/style/color"
import MainLoginButton from "@/src/style/button-styles/main-login"

const Welcome = () => {
  return (
    <View style={styles.welcomeContainer}>


      <View style={ styles.spacingMargin}><MainLoginButton title="Login" primary/></View>
      <View style={ styles.spacingMargin}> <MainLoginButton title="Become a client of the bank" />
</View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: BankColorsThemes.mainBG,
    padding: 16,
 width: "100%",
    color: BankColorsThemes.brandMain,
  },
  spacingMargin: {
    marginVertical: 6,
    width: "100%",
  },
  signUpButton: {
    backgroundColor: BankColorsThemes.mainBG,
    padding: 10,
    borderRadius: 5,
    color: BankColorsThemes.brandMain,
    height: 48,
  },
  loginButton: {
    backgroundColor: BankColorsThemes.mainBG,
    padding: 10,
    borderRadius: 5,
    color: BankColorsThemes.brandMain,
  },
})
