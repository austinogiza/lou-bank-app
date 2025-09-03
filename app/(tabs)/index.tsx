import React from "react"
import { View, Text, ScrollView } from "react-native"
import tw from "twrnc"
import ScreensWrapper from "@/src/components/wrapper/screens-wrapper"
import WelcomeTop from "@/src/components/home/welcome-top"
import HomeActionButtons from "@/src/components/home/home-action-buttons"
import TransactionInfo from "@/src/components/transaction/transaction-info"
import HomeExpenseCard from "@/src/components/home/home-expense-card"

const HomeScreen = () => {
  return (
    <ScreensWrapper>
      <ScrollView style={tw`flex-1 bg-black px-2  w-full`}>
        {/* Top Row */}

        <View>
          <WelcomeTop />
        </View>
        {/* Balance Section */}
        <View style={tw`mt-6 w-full mb-2`}>
          <Text style={tw`text-gray-400 text-sm  `}>Your Balance</Text>
          <Text style={tw`text-white text-4xl font-medium`}>$45,756.84</Text>
        </View>

        {/* Expense Cards */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={tw`flex-row my-4`}
        >
          <HomeExpenseCard title="All" amount="60,692" />
          <HomeExpenseCard title="Monthly" amount="70,692" />
        </ScrollView>

        {/* Action Buttons */}
        <HomeActionButtons />

        {/* Transaction History */}
        <TransactionInfo />
      </ScrollView>
    </ScreensWrapper>
  )
}

export default HomeScreen
