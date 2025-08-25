import FontAwesome from "@expo/vector-icons/FontAwesome"
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native"
import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import "react-native-reanimated"
import { useColorScheme } from "react-native"
import AppProvider from "@/src/components/providers/app-provider"

import { BankColorsThemes } from "@/src/style/color"
import HeaderLogo from "@/src/components/images/header-logo"
import GoBackButton from "@/src/components/helpers/go-back-button"
import AppSplashScreen from "@/src/components/splash-screen/splash-screen"
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router"

export const unstable_settings = {
  initialRouteName: "welcome",
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    NeuePlak: require("../src/assets/fonts/neue-plak/neue-plak-regular.ttf"),
    NeuePlakTextSemiBold: require("../src/assets/fonts/neue-plak/neue-plak-text-semiBold.ttf"),
    NeuePlakExtraBlack: require("../src/assets/fonts/neue-plak/neue-plak-condensed-extrablack.ttf"),

    ...FontAwesome.font,
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return <AppSplashScreen />
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  const colorScheme = useColorScheme()

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AppProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="login"
            options={{
              headerShown: true,
              headerLeft: () => <GoBackButton />,

              headerTitleAlign: "center",
              headerTitleStyle: {
                color: BankColorsThemes.white,
                fontSize: 16,
                fontWeight: "600",
              },
              headerTintColor: BankColorsThemes.white,
              headerStyle: { backgroundColor: BankColorsThemes.black },
              headerShadowVisible: false,
              headerTitle: "Login",
            }}
          />
          <Stack.Screen
            name="forgot-password"
            options={{
              headerShown: true,
              headerLeft: () => <GoBackButton />,

              headerTitleAlign: "center",
              headerTitleStyle: {
                color: BankColorsThemes.white,
                fontSize: 16,
                fontWeight: "600",
              },
              headerTintColor: BankColorsThemes.white,
              headerStyle: { backgroundColor: BankColorsThemes.black },
              headerShadowVisible: false,
              headerTitle: "Forgot Password",
            }}
          />
          <Stack.Screen
            name="reset-password"
            options={{
              headerShown: true,
              headerLeft: () => <GoBackButton />,

              headerTitleAlign: "center",
              headerTitleStyle: {
                color: BankColorsThemes.white,
                fontSize: 16,
                fontWeight: "600",
              },
              headerTintColor: BankColorsThemes.white,
              headerStyle: { backgroundColor: BankColorsThemes.black },
              headerShadowVisible: false,
              headerTitle: "Reset Password",
            }}
          />
          <Stack.Screen
            name="auth-pin"
            options={{
              headerShown: true,
              headerLeft: () => <GoBackButton />,

              headerTitleAlign: "center",
              headerTitleStyle: {
                color: BankColorsThemes.white,
                fontSize: 16,
                fontWeight: "600",
              },
              headerTintColor: BankColorsThemes.white,
              headerStyle: { backgroundColor: BankColorsThemes.black },
              headerShadowVisible: false,
              headerTitle: "Create Passcode",
            }}
          />
          <Stack.Screen
            name="auth-verification"
            options={{
              headerShown: true,
              headerLeft: () => <GoBackButton />,

              headerTitleAlign: "center",
              headerTitleStyle: {
                color: BankColorsThemes.white,
                fontSize: 16,
                fontWeight: "600",
              },
              headerTintColor: BankColorsThemes.white,
              headerStyle: { backgroundColor: BankColorsThemes.black },
              headerShadowVisible: false,
              headerTitle: "Verify",
            }}
          />

          <Stack.Screen
            name="auth-confirm-pin"
            options={{
              headerTitle: () => <HeaderLogo />,
            }}
          />
          <Stack.Screen
            name="pin-success"
            options={{
              headerTitle: () => <HeaderLogo />,
            }}
          />
          <Stack.Screen
            name="index"
            options={{
              headerShown: true,
              headerShadowVisible: false,
              headerTitle: () => <HeaderLogo />,
              headerTitleAlign: "center",
              headerTitleStyle: {
                color: BankColorsThemes.white,
                fontSize: 24,
                fontWeight: "600",
              },
              headerTintColor: BankColorsThemes.white,
              headerStyle: { backgroundColor: BankColorsThemes.black },
            }}
          />
          <Stack.Screen
            name="signup"
            options={{
              headerShown: true,
              headerLeft: () => <GoBackButton />,
              headerTitle: "Sign Up",
              headerTitleAlign: "center",
              headerTitleStyle: {
                color: BankColorsThemes.white,
                fontSize: 16,
                fontWeight: "600",
              },
              headerTintColor: BankColorsThemes.white,
              headerStyle: { backgroundColor: BankColorsThemes.black },
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen name="(tabs)" />
        </Stack>
      </AppProvider>
    </ThemeProvider>
  )
}
