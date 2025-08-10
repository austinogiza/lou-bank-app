import { StyleSheet, Text, TextInput, View } from "react-native"
import React, { FC } from "react"
import { BankColorsThemes } from "../color"

interface MainInputProps {
  placeholder?: string
  name?: string
  value?: string
  onChangeText?: (text: string) => void
  secureTextEntry?: boolean
  error?: string
}

const MainInput: FC<MainInputProps> = (props) => {
  const {
    placeholder,
    value,
    onChangeText,
    secureTextEntry = false,
    error,
  } = props
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={styles.mainInput}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 12,
    width: "100%",
  },
  mainInput: {
    height: 44,
    borderColor: BankColorsThemes.neutral[900],
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,

    backgroundColor: BankColorsThemes.neutral[100],
  },

  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
})

export default MainInput
