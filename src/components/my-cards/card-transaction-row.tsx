import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React, { FC } from "react"
import CardIcons from "./card-icons"
import CardAmount from "./card-amount"
import tw from "twrnc"
interface CardTransactionProps {
  transactionId?: number
  transactionTitle?: string
  transactionSubtitle?: string
  positive?: boolean
  amount?: string
}
const CardTransactionRow: FC<CardTransactionProps> = (props) => {
  const {
    transactionId,
    transactionTitle,
    transactionSubtitle,
    positive,
    amount,
  } = props
  return (
    <TouchableOpacity
      //   key={transaction.id}
      style={tw`flex-row items-center justify-between px-4 py-3`}
    >
      <View style={tw`flex-row items-center`}>
        <CardIcons positive={positive} />
        <View style={tw`ml-3 `}>
          <Text style={tw`text-white text-lg font-normal`}>
            {transactionTitle}
          </Text>
          <Text style={tw`text-gray-500 text-sm`}>{transactionSubtitle}</Text>
        </View>
      </View>
      <CardAmount amount={amount} positive={positive} />
    </TouchableOpacity>
  )
}

export default CardTransactionRow

const styles = StyleSheet.create({})
