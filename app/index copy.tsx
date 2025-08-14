import {  StyleSheet,  Text,  View,  } from "react-native"

import React from "react"
import { BankColorsThemes } from "../src/style/color"
import { useRouter } from "expo-router"
import AuthWrapper from "@/src/components/wrapper/auth-wrapper"
import MainLoginButton from "@/src/style/button-styles/main-login"
import AppLogo from "@/src/components/images/app-logo"




const Welcome = () => {
  const router = useRouter();
  const goToLogin = () => {
    router.navigate('/login')
  }
  const goToSignUp = () => {
     router.navigate('/signup')
  }
  return (
    <>


      <AuthWrapper>
      <View style={styles.welcomeShowcase}>
          <AppLogo />
          <View>
            <Text style={[styles.onBoardingTitle,styles.largeTitle] }>Trusted By Millions Users</Text>
          <Text style={[styles.onBoardingTitle, styles.bodyText] }>You can access our app from the anywhere in the world and make any type of transection without any fee or charges</Text></View>
          <View style={styles.onboardRow}>
            <View style={[styles.spacingMargin, styles.onboardCover]}><MainLoginButton onPress={goToLogin} title="Sign Up" />
          </View>
            <View style={[styles.spacingMargin, styles.onboardCover]} >
              <MainLoginButton primary onPress={goToSignUp} title="Log In" />
            </View>
          </View>

        </View>
      </AuthWrapper>
    </>
  )
}
export default Welcome
const styles = StyleSheet.create({
  onBoardingTitle: {
    width: "100%",
    color: BankColorsThemes.white,

  },
  largeTitle: {
    color: BankColorsThemes.white,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  bodyText: {
    color: BankColorsThemes.white,
    fontSize: 16,
    marginVertical: 8,
    textAlign: "center",
    paddingHorizontal: 16,
  },
  onboardCover: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "50%",

    backgroundColor: BankColorsThemes.black,},
onboardRow:{  flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  width: "100%",
    gap: 8,

    backgroundColor: BankColorsThemes.black,},
  welcomeShowcase: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    width: "100%",
    // marginVertical:88,
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
    backgroundColor: BankColorsThemes.black,
    padding: 10,
    borderRadius: 5,
    color: BankColorsThemes.brandMain,
    height: 48,
  },
  loginButton: {
    backgroundColor: BankColorsThemes.black,
    padding: 10,
    borderRadius: 5,
    color: BankColorsThemes.brandMain,
  },
})
