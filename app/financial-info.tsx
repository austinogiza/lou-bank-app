import HeaderInfo from "@/src/components/helpers/header-info"
import ScreensWrapper from "@/src/components/wrapper/screens-wrapper"
import { BankColorsThemes } from "@/src/style/color"
import { ArrowLeft, Building2, ChevronRight, Wifi } from "lucide-react-native"
import React, { useState } from "react"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import tw from "twrnc"

type CardProp = {
  cardNumber: string
  holderName: string
  expiry: string
  isActive: boolean
}

const CreditCard = ({
  cardNumber,
  holderName,
  expiry,
  isActive = false,
}: CardProp) => {
  return (
    <View style={tw`bg-[#7A5BFF] p-6 rounded-2xl mb-4`}>
      {/* <View style={tw`bg-gradient-to-br from-[#7A5BFF] to-purple-700 p-6 rounded-2xl mb-4`}> */}
      <View style={tw`flex-row justify-between items-start mb-8`}>
        <Text style={tw`text-white text-lg font-bold`}>ZOE</Text>
        <Wifi width={20} height={20} color="white" style={tw`rotate-90`} />
      </View>

      <Text style={tw`text-white text-xl font-mono mb-4 tracking-widest`}>
        {cardNumber}
      </Text>

      <View style={tw`flex-row justify-between items-center`}>
        <Text style={tw`text-white font-medium`}>{holderName}</Text>
        <View style={tw`flex-row items-center`}>
          <Text style={tw`text-white font-medium mr-2`}>{expiry}</Text>
          <View
            style={tw`w-8 h-8 rounded-full ${
              isActive ? "bg-black" : "bg-white/30"
            }`}
          />
        </View>
      </View>
    </View>
  )
}

const BankAccount = ({
  bankName,
  accountNumber,
  onPress,
}: {
  bankName: string
  accountNumber: string
  onPress: () => any
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw`p-4 border border-gray-700 rounded-xl mb-3 flex-row items-center justify-between`}
    >
      <View style={tw`flex-row items-center`}>
        <View style={tw`p-3 rounded-lg mr-4`}>
          <Building2 width={20} height={20} color="white" />
        </View>
        <View>
          <Text style={tw`text-white font-semibold text-lg`}>{bankName}</Text>
          <Text style={tw`text-white/800 font-extralight`}>
            Account number:{" "}
            <Text style={tw`font-bold text-gray-300`}>{accountNumber}</Text>
          </Text>
        </View>
      </View>
      <ChevronRight width={20} height={20} color="#666" />
    </TouchableOpacity>
  )
}

const FinancialInfoScreen = () => {
  const [selectedCard, setSelectedCard] = useState(0)

  const cards = [
    {
      cardNumber: "1234 5678 9000 0000",
      holderName: "Adom Shafi",
      expiry: "12/24",
    },
  ]

  const bankAccounts = [
    {
      bankName: "United Commercial Bank",
      accountNumber: "9189 1278 0000 7652",
    },
    {
      bankName: "NRBC Bank LLC.",
      accountNumber: "9189 1278 0000 7652",
    },
  ]

  return (
    <ScreensWrapper>
      <ScrollView style={tw`flex-1 bg-black px-4`}>
        <HeaderInfo
          title="Financial Information"
          iconLeft={
            <ArrowLeft width={18} height={18} color={BankColorsThemes.white} />
          }
        />

        <View style={tw`mt-6`}>
          <View style={tw`flex-row justify-between items-center mb-4`}>
            <Text style={tw`text-white text-xl font-bold`}>Your Cards</Text>
            <TouchableOpacity>
              <Text style={tw`text-[#7A5BFF] font-semibold`}>Add New Card</Text>
            </TouchableOpacity>
          </View>

          <CreditCard
            cardNumber={cards[0].cardNumber}
            holderName={cards[0].holderName}
            expiry={cards[0].expiry}
            isActive={false}
          />

          <View style={tw`flex-row justify-between items-center mb-4 mt-8`}>
            <Text style={tw`text-white text-xl font-bold`}>Bank Account</Text>
            <TouchableOpacity>
              <Text style={tw`text-[#7A5BFF] font-semibold`}>Add Account</Text>
            </TouchableOpacity>
          </View>

          {bankAccounts.map((account, index) => (
            <BankAccount
              key={index}
              bankName={account.bankName}
              accountNumber={account.accountNumber}
              onPress={() => console.log(`Selected ${account.bankName}`)}
            />
          ))}
        </View>
      </ScrollView>
    </ScreensWrapper>
  )
}

export default FinancialInfoScreen
