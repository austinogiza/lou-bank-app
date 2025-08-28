import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React from "react"
import tw from "twrnc"
import { ArrowLeft } from "lucide-react-native"
import { BankColorsThemes } from "@/src/style/color"
const TransactionCustom = () => {
  return (
    <View style={tw`flex-row justify-center items-center px-4 py-4`}>
      <Pressable style={styles.backWrap}>
        <ArrowLeft width={18} height={18} color={BankColorsThemes.white} />
      </Pressable>
    </View>
  )
}

export default TransactionCustom

const styles = StyleSheet.create({
  backWrap: {
    height: 40,
    width: 40,
    borderRadius: 99,
    backgroundColor: BankColorsThemes.black,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: BankColorsThemes.white,
  },
  text: {
    color: BankColorsThemes.white,
    fontSize: 16,
  },
})
