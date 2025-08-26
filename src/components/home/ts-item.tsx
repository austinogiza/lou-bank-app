import React from "react"
import { View, Text, Pressable, Image } from "react-native"
import tw from "twrnc"

export interface Transaction {
  id: string
  title: string
  datetime: string
  amount: number
  type: "credit" | "debit"
  icon?: string
}

export const TransactionItem: React.FC<{
  tx: Transaction
  onPress?: (tx: Transaction) => void
}> = ({ tx, onPress }) => {
  const sign = tx.type === "credit" ? "+" : "-"
  const color = tx.type === "credit" ? "text-[#31D982]" : "text-red-500"

  return (
    <Pressable
      onPress={() => onPress?.(tx)}
      style={tw`flex-row items-center p-5 mb-4 rounded-3xl border border-[#1F2023] bg-[#070707]`}
    >
      <View
        style={tw`w-16 h-16 rounded-full bg-[#171717] items-center justify-center mr-4`}
      >
        <Text style={tw`text-white text-lg`}>{tx.icon || "🅽"}</Text>
      </View>
      <View style={tw`flex-1`}>
        <Text style={tw`text-white text-lg font-medium`}>{tx.title}</Text>
        <Text style={tw`text-[#7E8391] text-xs mt-1`}>{tx.datetime}</Text>
      </View>
      <Text style={tw`${color} text-lg font-semibold`}>
        {sign}${Math.abs(tx.amount)}
      </Text>
    </Pressable>
  )
}
