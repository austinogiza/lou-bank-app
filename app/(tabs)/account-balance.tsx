import React from "react"
import { View, Text, ScrollView } from "react-native"
import tw from "twrnc"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import HeaderInfo from "@/src/components/helpers/header-info"
import { ArrowLeft, EllipsisVertical } from "lucide-react-native"
import ScreensWrapper from "@/src/components/wrapper/screens-wrapper"
import { BankColorsThemes } from "@/src/style/color"
import BalanceActions from "@/src/components/transaction/balance-actions"
import TransactionInfo from "@/src/components/transaction/transaction-info"

const AccountBalance = () => {
  return (
    <ScreensWrapper>
      <View style={tw`flex-1 bg-black w-full px-4`}>
        <HeaderInfo
          title="Account"
          iconLeft={
            <ArrowLeft width={18} height={18} color={BankColorsThemes.white} />
          }
          iconRight={
            <EllipsisVertical
              width={18}
              height={18}
              color={BankColorsThemes.white}
            />
          }
        />

        <ScrollView contentContainerStyle={tw`pb-12`}>
          {/* Balance Section */}
          <View style={tw` mt-4`}>
            <Text style={tw`text-gray-400`}>Your Balance</Text>
            <Text style={tw`text-white text-4xl font-bold mt-1`}>
              $45,756.84
            </Text>
          </View>

          {/* Quick Actions */}
          <BalanceActions />

          {/* Credit Card */}
          <View style={tw`bg-purple-600 w-full rounded-2xl  mt-8 p-6`}>
            <Ionicons
              name="wifi"
              size={20}
              color="white"
              style={tw`self-end`}
            />
            <Text style={tw`text-white text-lg tracking-widest mt-6`}>
              1234 5678 9000 0000
            </Text>
            <View style={tw`flex-row justify-between mt-6`}>
              <View>
                <Text style={tw`text-white`}>Adom Shafi</Text>
                <Text style={tw`text-white mt-1`}>12/24</Text>
              </View>
              <MaterialCommunityIcons
                name="credit-card-chip"
                size={32}
                color="white"
              />
            </View>
          </View>

          <TransactionInfo />
        </ScrollView>
      </View>
    </ScreensWrapper>
  )
}

export default AccountBalance
