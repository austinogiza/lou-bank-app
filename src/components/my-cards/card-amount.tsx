import { StyleSheet, Text, View } from "react-native"
import React, { FC } from "react"
import tw from "twrnc"
interface CardAmountProps {
  positive?: boolean
  amount?: string
}
const CardAmount: FC<CardAmountProps> = (props) => {
  const { positive, amount } = props
  return (
    <Text
      style={tw`${
        positive ? "text-green-400" : "text-white"
      } font-medium text-base`}
    >
      {amount}
    </Text>
  )
}

export default CardAmount

const styles = StyleSheet.create({})
