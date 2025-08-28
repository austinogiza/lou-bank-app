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
    <ScrollView
      style={tw`flex-1 bg-black px-2`}
      contentContainerStyle={tw`pb-20`}
    >
      <View style={tw`flex-1 bg-black px-2 pt-18`}>
        <Text style={tw`text-white text-lg font-semibold `}>
          All Transaction
        </Text>

        <View style={tw` flex justify-center items-center w-full`}>
          <TransactionSearch />
          <TransactionFilters
            active={activeFilter}
            toggleFilter={toggleFilter}
          />
          <View style={tw`w-full mt-6`}>
            <Text style={tw`text-gray-200 text-base`}>21 June, 2025</Text>
            <TransactionGroup />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default TransactionHistory
