import { Pressable, StyleSheet, Text, View } from "react-native"
import React, { FC, ReactNode } from "react"
import { BankColorsThemes } from "@/src/style/color"
import tw from "twrnc"
interface HeaderInfoProps {
  icon?: ReactNode

  onPress?: () => void
}
const HeaderInfo: FC<HeaderInfoProps> = (props) => {
  const { icon, onPress } = props
  return (
    <View style={tw`flex-row justify-center items-center  py-4`}>
      <Pressable style={styles.backWrap}>{icon}</Pressable>
    </View>
  )
}

export default HeaderInfo
const styles = StyleSheet.create({
  backWrap: {
    height: 40,
    width: 40,
    borderRadius: 99,
    backgroundColor: BankColorsThemes.black,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: BankColorsThemes.alpha[900],
  },
  text: {
    color: BankColorsThemes.white,
    fontSize: 16,
  },
})
