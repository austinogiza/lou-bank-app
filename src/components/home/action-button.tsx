import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React, { FC } from "react"
import tw from "twrnc"
import { ArrowDownLeft, ArrowUpRight } from "lucide-react-native"
import { BankColorsThemes } from "@/src/style/color"
interface ActionButtonProps {
  title?: string
  receive?: boolean
  onPress?: () => void
}
const ActionButton: FC<ActionButtonProps> = (props) => {
  const { title, receive, onPress } = props
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        tw`flex-1  flex-row justify-center gap-2 border  rounded-full py-4 ml-2 items-center`,
        receive ? tw`border-purple-500` : tw`border-blue-500`,
      ]}
    >
      <View>
        {receive ? (
          <>
            <ArrowDownLeft color={BankColorsThemes.white} size={20} />
          </>
        ) : (
          <>
            <ArrowUpRight
              color={BankColorsThemes.white}
              size={20}
              style={tw`text-white`}
            />
          </>
        )}
      </View>
      <Text style={tw`text-white text-sm font-semibold`}>
        {receive ? "Receive" : "Send"} Money
      </Text>
    </TouchableOpacity>
  )
}

export default ActionButton

const styles = StyleSheet.create({})
