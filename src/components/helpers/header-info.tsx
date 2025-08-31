import { Pressable, StyleSheet, Text, View } from "react-native"
import React, { FC, ReactNode } from "react"
import { BankColorsThemes } from "@/src/style/color"
import tw from "twrnc"
interface HeaderInfoProps {
  iconLeft?: ReactNode
  iconRight?: ReactNode
  title?: string
  onPressRight?: () => void
  onPressLeft?: () => void
  rightEnabled?: boolean
}
const HeaderInfo: FC<HeaderInfoProps> = (props) => {
  const {
    iconLeft,
    iconRight,
    onPressLeft,
    onPressRight,
    title,
    rightEnabled,
  } = props
  return (
    <View
      style={tw`flex-row items-center justify-between w-full mb-3 mt-2 h-7`}
    >
      <View style={tw`flex-row justify-center items-center py-4`}>
        {iconLeft ?
          <Pressable onPress={onPressLeft} style={styles.backWrap}>
            {iconLeft}
          </Pressable>
          :
          null}

      </View>
      <Text style={tw`text-white text-base font-semibold`}>{title}</Text>
      <View style={tw`flex-row justify-center items-center  py-4`}>
        {iconRight ?
          <Pressable
            onPress={onPressRight}
            style={[styles.backWrap, rightEnabled && styles.rightEnabledStyle]}
          >
            {iconRight}
          </Pressable> :
          null}
      </View>
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
  rightEnabledStyle: {
    opacity: 0,
  },
})
