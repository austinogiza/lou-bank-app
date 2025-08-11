import React from "react"
import { View, Text, Pressable } from "react-native"
import tw from "twrnc"
import AuthWrapper from "@/src/components/wrapper/auth-wrapper"
import { useRouter } from "expo-router"
import MainLoginButton from "@/src/style/button-styles/main-login"

const PinSuccess = () => {
  const navRouter = useRouter()
  const goHome = () => {
    navRouter.navigate("/(tabs)")
  }
  return (
    <>
      <AuthWrapper>
        <View style={tw`flex-1 w-full items-center justify-center px-6`}>
          <View style={tw`w-full items-center justify-center flex-1`}>
            <Text style={tw`text-white text-center text-2xl mb-2`}>
              Passcode set 🎉
            </Text>
            <Text style={tw`text-white text-center text-md`}>
              You're ready to start using your balances.
            </Text>
          </View>
          <View style={tw` flex-1 justify-end mb-20 items-end w-full `}>
            <MainLoginButton primary onPress={goHome} title="Done" />
          </View>
        </View>
      </AuthWrapper>
    </>
  )
}
export default PinSuccess
