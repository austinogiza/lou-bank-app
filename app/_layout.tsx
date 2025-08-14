import FontAwesome from "@expo/vector-icons/FontAwesome"
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native"
import { useFonts } from "expo-font"
import { Stack, useRouter } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import "react-native-reanimated"
import { Pressable, useColorScheme } from "react-native"
import AppProvider from "@/src/components/providers/app-provider"
import { ArrowLeft } from 'lucide-react-native';
import { BankColorsThemes } from "@/src/style/color"
import HeaderLogo from "@/src/components/images/header-logo"
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
    SpaceMono: require("../src/assets/fonts/SpaceMono-Regular.ttf"),
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
    return null
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  const colorScheme = useColorScheme()
  const router=useRouter()
  const goBack = () => {
    if (router.canGoBack()) {
      router.back()
    } else {
        router.navigate('/')
    }

}
  return (
   <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AppProvider>
        <Stack screenOptions={{ headerShown: false }}>
           <Stack.Screen name="auth-pin" options={{
            headerTitle: () => <HeaderLogo />,
          }} />
           <Stack.Screen name="auth-confirm-pin" options={{
            headerTitle: () => <HeaderLogo />,
          }} />
<Stack.Screen name="pin-success" options={{
            headerTitle: () => <HeaderLogo />,
          }} />
          <Stack.Screen name="index" options={{
            headerShown:true, headerShadowVisible:false,
            headerTitle: () => <HeaderLogo />,
            headerTitleAlign: "center",
              headerTitleStyle: { color: BankColorsThemes.white, fontSize: 24, fontWeight: "600" },
              headerTintColor: BankColorsThemes.white,
              headerStyle: { backgroundColor: BankColorsThemes.black },
          }} />

          <Stack.Screen name="signup"
            options={{
              headerShown: true,
              headerLeft: () => <Pressable onPress={goBack}><ArrowLeft width={20} height={20} color={BankColorsThemes.white} /></Pressable>,
              headerTitle: "Let's get started",
              headerTitleAlign: "center",
              headerTitleStyle: { color: BankColorsThemes.white, fontSize: 24, fontWeight: "600" },
              headerTintColor: BankColorsThemes.white,
              headerStyle: { backgroundColor: BankColorsThemes.black },
              headerShadowVisible: false,
            }} />
          <Stack.Screen name="login"
            options={{
              headerShown: true,
              headerLeft: () => <Pressable onPress={goBack}><ArrowLeft width={20} height={20} color={BankColorsThemes.white} /></Pressable>,

              headerTitleAlign: "center",
              headerTitleStyle: { color: BankColorsThemes.white, fontSize: 24, fontWeight: "600" },
              headerTintColor: BankColorsThemes.white,
              headerStyle: { backgroundColor: BankColorsThemes.black },
              headerShadowVisible: false,
              headerTitle: "Welcome back",
             }} />

          <Stack.Screen name="(tabs)" />

        </Stack>
      </AppProvider>
    </ThemeProvider>
  )
}
