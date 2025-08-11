import React, { useState, useEffect } from "react"
import { View, Text } from "react-native"
import tw from "twrnc"

import { useRouter } from "expo-router"
import { useAuthPin } from "@/src/context/pin-context"
import PinDots from "@/src/components/auth-pin/pin-dots"
import Keypad from "@/src/components/auth-pin/pin-keypad"
import AuthWrapper from "@/src/components/wrapper/auth-wrapper"

const AuthPin = () => {
  const navRouter = useRouter()
  const { setFirstPin } = useAuthPin()
  const [pin, setPin] = useState("")

  useEffect(() => {
    if (pin.length === 4) {
      setFirstPin(pin)
      setTimeout(() => {
        setPin("")
        navRouter.navigate("/auth-confirm-pin")
      }, 120)
    }
  }, [pin])

  const handleKey = (d: string) => {
    if (pin.length < 4) setPin((p) => p + d)
  }
  const handleBack = () => setPin((p) => p.slice(0, -1))

  return (
    <AuthWrapper>
      <View
        style={[
          tw`flex-1 items-center justify-center px-6 pt-18`,
          { paddingTop: 80 },
        ]}
      >
        <Text style={tw`text-center text-lg text-slate-300`}>
          Enter Passcode
        </Text>
        <PinDots length={pin.length} />
        <Keypad onKey={handleKey} onBackspace={handleBack} />
      </View>
    </AuthWrapper>
  )
}

export default AuthPin
