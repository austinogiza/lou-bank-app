import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import tw from "twrnc"

import { useRouter } from "expo-router"
import PinDots from "@/src/components/auth-pin/pin-dots"
import Keypad from "@/src/components/auth-pin/pin-keypad"
import { useAuthPin } from "@/src/context/pin-context"
import AuthWrapper from "@/src/components/wrapper/auth-wrapper"
import { BankColorsThemes } from "@/src/style/color"

const AuthConfirmPin = () => {
  const navRouter = useRouter()
  const { firstPin, setFirstPin } = useAuthPin()
  const [pin, setPin] = useState("")
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (pin.length === 4) {
      if (pin === firstPin) {
        setFirstPin(null)
        setTimeout(() => navRouter.replace("/pin-success"), 120)
      } else {
        setError("Passcodes don’t match. Try again.")
        setTimeout(() => {
          setPin("")
          setError(null)
        }, 900)
      }
    }
  }, [pin])

  const handleKey = (d: string) => {
    if (pin.length < 4) setPin((p) => p + d)
  }
  const handleBack = () => setPin((p) => p.slice(0, -1))

  return (
    <View
      style={[
        tw`flex-1 items-center justify-center px-6 pt-18`,
        { paddingTop: 80 },
        styles.container,
      ]}
    >
      <Text style={tw`text-center text-lg text-slate-300`}>
        Confirm Passcode
      </Text>
      <PinDots length={pin.length} />
      {error ? (
        <Text style={tw`text-center text-red-400 mt-4`}>{error}</Text>
      ) : null}
      <Keypad onKey={handleKey} onBackspace={handleBack} />
    </View>
  )
}
export default AuthConfirmPin
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: BankColorsThemes.black,
  },
})
