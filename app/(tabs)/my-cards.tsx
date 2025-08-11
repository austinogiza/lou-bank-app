import React, { useState } from "react"
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from "react-native"
import { ChevronDown } from "lucide-react-native"
import tw from "twrnc"
import AuthWrapper from "@/src/components/wrapper/auth-wrapper"
import CardTransactionRow from "@/src/components/my-cards/card-transaction-row"
import { BankColorsThemes } from "@/src/style/color"
import ScreensWrapper from "@/src/components/wrapper/screens-wrapper"
import CardSelection from "@/src/components/my-cards/card-selection"

const { width } = Dimensions.get("window")

const CardTransactionsScreen = () => {
  const [filterExpanded, setFilterExpanded] = useState(false)

  let transactions: any = []

  return (
    <ScreensWrapper>
      <CardSelection />
      <View
        style={[
          { backgroundColor: BankColorsThemes.transactionBg },
          ,
          tw`mt-10 w-full py-4 pt-6 rounded-t-3xl`,
        ]}
      >
        <View
          style={tw`flex-row justify-between items-center w-full px-4 mb-4`}
        >
          <Text style={tw`text-white text-xl font-medium`}>Transactions</Text>
          <TouchableOpacity
            onPress={() => setFilterExpanded(!filterExpanded)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-gray-400 text-sm mr-1`}>Filter</Text>
            <ChevronDown
              size={16}
              color="#9ca3af"
              style={{
                transform: [{ rotate: filterExpanded ? "180deg" : "0deg" }],
              }}
            />
          </TouchableOpacity>
        </View>
        <ScrollView style={[tw`w-full`]}>
          {/* Card Section */}

          {/* Transactions Section */}
          <View style={tw`mt-8`}>
            {/* Transaction Groups */}
            {transactions.map((group: any, groupIndex: any) => (
              <View key={groupIndex} style={tw`mb-6`}>
                <Text style={tw`text-gray-200 text-sm px-4 mb-2`}>
                  {group.date}
                </Text>

                {group.items.map((transaction: any) => (
                  <CardTransactionRow
                    key={transaction.id}
                    transactionId={transaction.id}
                    transactionTitle={transaction.title}
                    transactionSubtitle={transaction.subtitle}
                    positive={transaction.positive}
                    amount={transaction.amount}
                  />
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </ScreensWrapper>
  )
}

export default CardTransactionsScreen
