import { StyleSheet, View } from "react-native"
import React, { FC } from "react"
import tw from "twrnc"

import { ArrowDownToLine, ArrowUpToLine } from "lucide-react-native"
import { BankColorsThemes } from "@/src/style/color"
interface CardIconsProps {
  positive?: boolean
}
const CardIcons: FC<CardIconsProps> = (props) => {
  const { positive } = props
  const iconStyle = {
    backgroundColor: positive
      ? BankColorsThemes.transferIn
      : BankColorsThemes.transferOut,
  }
  return (
    <View
      style={[
        tw`w-10 h-10 rounded-full items-center justify-center`,
        iconStyle,
      ]}
    >
      {positive ? (
        <>
          <ArrowDownToLine size={20} color="#000" />
        </>
      ) : (
        <>
          <ArrowUpToLine size={20} color="#000" />
        </>
      )}
    </View>
  )
}

export default CardIcons

const styles = StyleSheet.create({})
