import AuthWrapper from "@/src/components/wrapper/auth-wrapper"
import MainLoginButton from "@/src/style/button-styles/main-login"
import React, { useState, useRef } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native"
import tw from "twrnc"

const OtpScreen = () => {
  const [code, setCode] = useState<string>("")
  const inputRef = useRef<TextInput>(null)

  const CODE_LENGTH = 4

  const handleChange = (value: string) => {
    // Allow only numbers, max length = CODE_LENGTH
    const cleanValue = value.replace(/[^0-9]/g, "").slice(0, CODE_LENGTH)
    setCode(cleanValue)
  }

  return (
    <AuthWrapper>
      <View style={tw`flex-1 bg-black items-center justify-center px-6`}>
        <Text style={tw`text-white text-2xl font-bold mb-4`}>Verification</Text>
        <Text style={tw`text-gray-400 mb-6`}>
          Enter {CODE_LENGTH}-digit code sent to your email
        </Text>

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
          style={tw`flex-row justify-center mb-8`}
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
                      borderColor: isFocused ? "#7c3aed" : "#444",
                    },
                  ]}
                >
                  <Text style={tw`text-white text-xl font-bold`}>{digit}</Text>
                </View>
              )
            })}
        </TouchableOpacity>

        {/* Verify Button */}
        <TouchableOpacity
          style={tw`bg-purple-600 w-full py-4 rounded-full`}
          disabled={code.length !== CODE_LENGTH}
          onPress={() => console.log("Verify with code:", code)}
        >
          <MainLoginButton primary title="Verify" />
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
  },
})

export default OtpScreen
