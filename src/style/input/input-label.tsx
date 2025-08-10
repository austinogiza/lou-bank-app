import { StyleSheet, Text, View } from "react-native"
import React, { FC } from "react"
import tw from "twrnc"
import { BankColorsThemes } from "../color"
interface InputLabelProps {
  title?: string
}
const InputLabel: FC<InputLabelProps> = (props) => {
  const { title } = props
  return (
    <View style={tw`w-full`}>
      <Text style={styles.labelText}>{title}</Text>
    </View>
  )
}

export default InputLabel

const styles = StyleSheet.create({
  labelText: {
    color: BankColorsThemes.white,
    fontSize: 16,
    marginBottom: 6,
    fontWeight: "500",
  },
})
