import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import React from "react"
import tw from "twrnc"
import { BankColorsThemes } from "@/src/style/color"

const TransactionSearch = () => {
  return (
    <View
      style={[
        tw`bg-neutral-900 h-[48px] w-full items-start justify-center rounded-2xl px-4 py-2 mt-3 mx-4`,
        styles.container,
      ]}
    >
      <TextInput
        placeholder="Search..."
        placeholderTextColor="#888"
        style={tw`text-white`}
      />
    </View>
  )
}

export default TransactionSearch

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: BankColorsThemes.alpha[900],
  },
})
