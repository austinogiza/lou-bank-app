import React, { useState } from "react"
import { View, Text, ScrollView } from "react-native"
import tw from "twrnc"

import TransactionFilters from "@/src/components/transaction/transaction-filters"
import TransactionGroup from "@/src/components/transaction/transaction-group"
import TransactionSearch from "@/src/components/transaction/transaction-search.tsx"
import HeaderInfo from "@/src/components/helpers/header-info"
import { BankColorsThemes } from "@/src/style/color"
import { ArrowLeft, CalendarDays } from "lucide-react-native"
import ScreensWrapper from "@/src/components/wrapper/screens-wrapper"

const TransactionHistory = () => {
  const [activeFilter, setActiveFilter] = useState<number>(0)
  const toggleFilter = (number: number) => {
    if (number === activeFilter) return
    setActiveFilter(number)
  }
  return (
    <ScreensWrapper>
      <View style={tw`flex-1 bg-black px-2  w-full`}>
        <HeaderInfo
          title="Transaction History"
          iconLeft={
            <ArrowLeft width={18} height={18} color={BankColorsThemes.white} />
          }
          iconRight={
            <CalendarDays
              width={18}
              height={18}
              color={BankColorsThemes.white}
            />
          }
        />

        <ScrollView style={tw`flex-1 bg-black `}>
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
    </ScreensWrapper>
  )
}

export default TransactionHistory
