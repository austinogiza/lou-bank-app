import React from "react"
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native"
import tw from "twrnc"
import { BankColorsThemes } from "@/src/style/color"
import ScreensWrapper from "@/src/components/wrapper/screens-wrapper"
import WelcomeTop from "@/src/components/home/welcome-top"

const HomeScreen = () => {
  return (
    <ScreensWrapper>
      <ScrollView style={tw`flex-1 bg-black px-4  w-full`}>
        {/* Top Row */}

        <WelcomeTop />
        {/* Balance Section */}
        <View style={tw`mt-6 w-full`}>
          <Text style={tw`text-gray-400 `}>Your Balance</Text>
          <Text style={tw`text-white text-4xl font-extrabold`}>$45,756.84</Text>
        </View>

        {/* Expense Cards */}
        <View style={tw`flex-row mt-6`}>
          {/* Left Card */}
          <View
            style={tw`flex-1 bg-black border border-gray-700 rounded-2xl p-4 mr-2`}
          >
            <Text style={tw`text-white text-lg font-semibold`}>
              All Expense
            </Text>
            <Text style={tw`text-gray-400 text-xs mt-1`}>
              Total expense this month only
            </Text>
            <Text style={tw`text-white text-3xl font-bold mt-3`}>$60,692</Text>
          </View>
          {/* Right Card */}
          <View
            style={tw`flex-1 bg-black border border-gray-700 rounded-2xl p-4 ml-2`}
          >
            <Text style={tw`text-white text-lg font-semibold`}>Monthly</Text>
            <Text style={tw`text-gray-400 text-xs mt-1`}>
              Total expense summary
            </Text>
            <Text style={tw`text-white text-3xl font-bold mt-3`}>$70,000</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={tw`flex-row mt-6`}>
          <TouchableOpacity
            style={tw`flex-1 border border-blue-500 rounded-full py-3 mr-2 items-center`}
          >
            <Text style={tw`text-blue-500 font-semibold`}>Send Money</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex-1 border border-purple-500 rounded-full py-3 ml-2 items-center`}
          >
            <Text style={tw`text-purple-500 font-semibold`}>Receive Money</Text>
          </TouchableOpacity>
        </View>

        {/* Transaction History */}
        <View style={tw`mt-8`}>
          <View style={tw`flex-row justify-between items-center mb-3`}>
            <Text style={tw`text-white font-semibold text-lg`}>
              Transaction History
            </Text>
            <Text style={tw`text-purple-400 text-sm`}>See all</Text>
          </View>

          {/* Single Transaction */}
          <View
            style={tw`flex-row items-center bg-black border border-gray-700 rounded-2xl p-4 mb-3`}
          >
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
              }}
              style={tw`w-10 h-10 rounded-full bg-white mr-3`}
              resizeMode="contain"
            />
            <View style={tw`flex-1`}>
              <Text style={tw`text-white font-semibold`}>Netflix</Text>
              <Text style={tw`text-gray-400 text-xs`}>Today, 7:10 pm</Text>
            </View>
            <Text style={tw`text-green-400 font-semibold`}>+$120</Text>
          </View>
        </View>
      </ScrollView>
    </ScreensWrapper>
  )
}

export default HomeScreen
