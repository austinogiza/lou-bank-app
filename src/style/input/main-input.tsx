import { StyleSheet, Text, TextInput, View } from "react-native"
import React, { FC } from "react"
import { BankColorsThemes } from "../color"
import { Controller } from "react-hook-form"

interface MainInputProps {
  placeholder?: string
  name?: string | undefined
  value?: string
  onChangeText?: (text: string) => void
  secureTextEntry?: boolean
  error?: string
  control: any // This should be the type of your form control, e.g., Control<FormData>
}

const MainInput: FC<MainInputProps> = (props) => {
  const {
    placeholder,
    value,
    onChangeText,
    secureTextEntry = false,
    error,
    control,
    name,
  } = props
  return (
    <View style={styles.inputContainer}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
            secureTextEntry={secureTextEntry}
            style={[styles.mainInput, error && { borderColor: "red" }]}
            placeholderTextColor={BankColorsThemes.neutral[500]}
          />
        )}
        name={`${name}`}
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

    backgroundColor: BankColorsThemes.black,
  },

  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
})

export default MainInput
