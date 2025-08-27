import React, { useState } from "react"
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native"
import tw from "twrnc"
import { Ionicons } from "@expo/vector-icons"
import AppProvider from "@/src/components/providers/app-provider"
import TransactionActions from "@/src/components/transaction/transaction-actions"
import TransactionFilters from "@/src/components/transaction/transaction-filters"
import TransactionGroup from "@/src/components/transaction/transaction-group"
import TransactionSearch from "@/src/components/transaction/transaction-search.tsx"

const TransactionHistory = () => {
  const [activeFilter, setActiveFilter] = useState<number>(0)
  const toggleFilter = (number: number) => {
    if (number === activeFilter) return
    setActiveFilter(number)
  }
  return (
    <View style={tw`flex-1 bg-black px-4 pt-18`}>
      <Text style={tw`text-white text-lg font-semibold px-4`}>
        All Transaction
      </Text>
      <TransactionSearch />
      <TransactionFilters active={activeFilter} toggleFilter={toggleFilter} />
      {/* <TransactionActions /> */}

      <View style={tw` mt-6`}>
        <Text style={tw`text-gray-200 text-base mb-3`}>21 June, 2025</Text>
        <TransactionGroup />
      </View>
    </View>
  )
}

export default TransactionHistory
