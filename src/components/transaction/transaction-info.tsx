import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React, { FC } from "react"
import TransactionGroup from "./transaction-group"
import { BankColorsThemes } from "@/src/style/color"
import tw from "twrnc"
import { useRouter, type Href } from "expo-router"
interface TransactionInfoProps {
  transactionData?: any[]
}
const TransactionInfo: FC<TransactionInfoProps> = (props) => {
  const { transactionData } = props
  const router = useRouter()

  const goToAllTransactions = () => {
    router.push("/(tabs)/transaction-history")
  }
  return (
    <View>
      <View style={tw`flex-row justify-between items-center  mt-8`}>
        <Text style={tw`text-white font-semibold text-lg`}>
          Transaction History
        </Text>
        <TouchableOpacity onPress={goToAllTransactions}>
          <Text style={[tw` text-sm`, styles.seeMoreText]}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={tw` mt-4`}>
        <TransactionGroup />
      </View>
    </View>
  )
}

export default TransactionInfo
const styles = StyleSheet.create({
  seeMoreText: {
    color: BankColorsThemes.primary[500],
    fontSize: 14,
    fontWeight: "600",
  },
})
