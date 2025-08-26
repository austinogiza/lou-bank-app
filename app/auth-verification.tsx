import AuthWrapper from "@/src/components/wrapper/auth-wrapper"
import MainLoginButton from "@/src/style/button-styles/main-login"
import { BankColorsThemes } from "@/src/style/color"
import React, { useState, useRef } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native"
import tw from "twrnc"
import * as Clipboard from "expo-clipboard"

const OtpScreen = () => {
  const [code, setCode] = useState<string>("")
  const inputRef = useRef<TextInput>(null)

  const CODE_LENGTH = 4

  const handleChange = (value: string) => {
    const cleanValue = value.replace(/[^0-9]/g, "").slice(0, CODE_LENGTH)
    setCode(cleanValue)
  }

  const handlePaste = async () => {
    const text = await Clipboard.getStringAsync()
    const cleanValue = text.replace(/[^0-9]/g, "").slice(0, CODE_LENGTH)

    if (cleanValue.length === CODE_LENGTH) {
      Alert.alert(
        "Paste Code",
        `Do you want to use this code?\n\n${cleanValue}`,
        [
          { text: "Cancel", style: "cancel" },
          { text: "Use Code", onPress: () => setCode(cleanValue) },
        ]
      )
    } else {
      Alert.alert(
        "Invalid Code",
        "Clipboard does not contain a valid 4-digit code."
      )
    }
  }

  return (
    <AuthWrapper>
      <View
        style={tw`flex-1 w-full bg-black items-center justify-start px-6 pt-18`}
      >
        <Text style={tw`text-white w-full text-2xl text-center font-bold mb-4`}>
          Verification
        </Text>
        <Text style={tw`text-gray-400 mb-6`}>
          Enter {CODE_LENGTH}-digit code sent to your email
        </Text>

        {/* Hidden input */}
        <TextInput
          ref={inputRef}
          value={code}
          onChangeText={handleChange}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          maxLength={CODE_LENGTH}
          style={styles.hiddenInput}
          autoFocus
        />

        {/* Display Digits */}
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => inputRef.current?.focus()}
          style={tw`flex-row justify-center mb-4`}
        >
          {Array(CODE_LENGTH)
            .fill(0)
            .map((_, idx) => {
              const digit = code[idx] || ""
              const isFocused = code.length === idx
              return (
                <View
                  key={idx}
                  style={[
                    tw`w-14 h-14 mx-2 rounded-full items-center justify-center`,
                    {
                      borderWidth: 1.5,
                      borderColor: isFocused
                        ? BankColorsThemes.primary[500]
                        : BankColorsThemes.neutral[500],
                    },
                  ]}
                >
                  <Text style={tw`text-white text-xl font-bold`}>{digit}</Text>
                </View>
              )
            })}
        </TouchableOpacity>

        {/* Paste Button */}
        <TouchableOpacity onPress={handlePaste} style={tw`mb-8`}>
          <Text style={tw`text-purple-400 font-semibold`}>
            Paste from Clipboard
          </Text>
        </TouchableOpacity>

        <View style={styles.formContainer}>
          <MainLoginButton primary title="Verify" />
        </View>

        <TouchableOpacity>
          <Text style={tw`text-center text-xs text-slate-400 mt-3`}>
            Didn’t Receive the code?{" "}
            <Text style={tw`text-center text-xs text-white mt-1`}>
              Resend New Code
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </AuthWrapper>
  )
}

const styles = StyleSheet.create({
  hiddenInput: {
    position: "absolute",
    opacity: 0,
  },
  formContainer: {
    width: "100%",
    marginBottom: 24,
    height: 56,
  },
})

export default OtpScreen
