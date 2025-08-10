import {  StyleSheet,  View,  } from "react-native"

import React from "react"
import { BankColorsThemes } from "../src/style/color"
import MainLoginButton from "@/src/style/button-styles/main-login"
import { useRouter } from "expo-router"
import AppLogo from "@/src/components/images/app-logo"
import AuthWrapper from "@/src/components/wrapper/auth-wrapper"


const Welcome = () => {
  const router = useRouter();
  const goToLogin = () => {
    // Logic to navigate to the login screen
    router.navigate('/login')
  }
  const goToSignUp = () => {
    // Logic to navigate to the sign-up screen
     router.navigate('/signup')
  }
  return (
    <AuthWrapper>
      <View style={styles.welcomeShowcase}>
<AppLogo/>

        <View style={styles.spacingMargin}><MainLoginButton onPress={goToLogin} title="Login" primary /></View>
      <View style={ styles.spacingMargin}> <MainLoginButton onPress={goToSignUp} title="Become a client of the bank" />
      </View>
    </View></AuthWrapper>
  )
}
export default Welcome
const styles = StyleSheet.create({

  welcomeShowcase: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    width: "100%",
    marginVertical:88,
    color: BankColorsThemes.black,
},
  welcomeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: BankColorsThemes.black,
    padding: 16,
    width: "100%",
    color: BankColorsThemes.brandMain,
  },
  spacingMargin: {
    marginVertical: 8,
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
