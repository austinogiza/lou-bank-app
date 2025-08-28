import React, { useState } from "react"
import { View, Text, ScrollView } from "react-native"
import tw from "twrnc"

import TransactionFilters from "@/src/components/transaction/transaction-filters"
import TransactionGroup from "@/src/components/transaction/transaction-group"
import TransactionSearch from "@/src/components/transaction/transaction-search.tsx"
import HeaderInfo from "@/src/components/helpers/header-info"
import { BankColorsThemes } from "@/src/style/color"
import { ArrowLeft, CalendarDays } from "lucide-react-native"

const TransactionHistory = () => {
  const [activeFilter, setActiveFilter] = useState<number>(0)
  const toggleFilter = (number: number) => {
    if (number === activeFilter) return
    setActiveFilter(number)
  }
  return (
    <View style={tw`flex-1 bg-black px-2 pt-10 w-full`}>
      <View style={tw`flex-row items-center justify-between w-full mb-8 mt-2`}>
        <HeaderInfo
          icon={
            <ArrowLeft width={18} height={18} color={BankColorsThemes.white} />
          }
        />
        <Text style={tw`text-white text-base font-semibold`}>
          Transaction History
        </Text>
        <HeaderInfo
          icon={
            <CalendarDays
              width={18}
              height={18}
              color={BankColorsThemes.white}
            />
          }
        />
      </View>
      <ScrollView
        style={tw`flex-1 bg-black `}
        contentContainerStyle={tw`pb-20`}
      >
        <View style={tw`flex-1 bg-black w-full`}>
          <Text style={tw`text-white text-lg font-semibold mb-1 `}>
            All Transaction
          </Text>

          <View style={tw` flex justify-center items-center w-full`}>
            <TransactionSearch />
            <TransactionFilters
              active={activeFilter}
              toggleFilter={toggleFilter}
            />
            <View style={tw`w-full mt-10`}>
              <Text style={tw`text-gray-200 text-base`}>21 June, 2025</Text>
              <TransactionGroup />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default TransactionHistory
