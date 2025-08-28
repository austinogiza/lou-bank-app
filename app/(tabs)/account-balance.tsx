import React from "react"
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native"
import tw from "twrnc"
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons"
import HeaderInfo from "@/src/components/helpers/header-info"
import { SafeAreaView } from "react-native-safe-area-context"
import ScreensWrapper from "@/src/components/wrapper/screens-wrapper"

const AccountBalance = () => {
  return (
    <ScreensWrapper>
      <View style={tw`flex-1 bg-black`}>
        {/* <HeaderInfo
        title="Transaction History"
        iconLeft={
          <ArrowLeft width={18} height={18} color={BankColorsThemes.white} />
        }
        iconRight={
          <CalendarDays width={18} height={18} color={BankColorsThemes.white} />
        }
      /> */}
        {/* Header */}
        <View style={tw`flex-row justify-between items-center px-4 py-4`}>
          <TouchableOpacity
            style={tw`w-10 h-10 rounded-full bg-neutral-900 items-center justify-center`}
          >
            <Ionicons name="arrow-back" size={20} color="white" />
          </TouchableOpacity>
          <Text style={tw`text-white text-base font-semibold`}>Account</Text>
          <TouchableOpacity
            style={tw`w-10 h-10 rounded-full bg-neutral-900 items-center justify-center`}
          >
            <Ionicons name="ellipsis-vertical" size={20} color="white" />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={tw`pb-28`}>
          {/* Balance Section */}
          <View style={tw`px-5 mt-4`}>
            <Text style={tw`text-gray-400`}>Your Balance</Text>
            <Text style={tw`text-white text-4xl font-bold mt-1`}>
              $45,756.84
            </Text>
          </View>

          {/* Quick Actions */}
          <View style={tw`flex-row justify-around mt-6 px-5`}>
            {[
              { label: "Add", icon: "add" },
              { label: "Send", icon: "arrow-up" },
              { label: "Receive", icon: "arrow-down" },
              { label: "Pay Bill", icon: "shield-checkmark" },
            ].map((item, idx) => (
              <TouchableOpacity key={idx} style={tw`items-center`}>
                <View
                  style={tw`w-12 h-12 rounded-full border border-gray-600 items-center justify-center mb-2`}
                >
                  <Ionicons name={item.icon as any} size={20} color="white" />
                </View>
                <Text style={tw`text-white text-xs`}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Credit Card */}
          <View style={tw`bg-purple-600 rounded-2xl mx-5 mt-8 p-6`}>
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

          {/* Transaction History */}
          <View style={tw`flex-row justify-between items-center px-5 mt-8`}>
            <Text style={tw`text-white font-semibold text-lg`}>
              Transaction History
            </Text>
            <Text style={tw`text-purple-400 text-sm`}>See all</Text>
          </View>

          {/* Transactions */}
          <View style={tw`px-5 mt-4`}>
            <View
              style={tw`flex-row items-center bg-neutral-900 rounded-xl p-4 mb-3`}
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

        {/* Bottom Navigation */}
        <View
          style={tw`absolute bottom-0 left-0 right-0 flex-row justify-around bg-black py-4 border-t border-gray-800`}
        >
          <TouchableOpacity style={tw`items-center`}>
            <Ionicons name="home-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={tw`items-center`}>
            <View
              style={tw`w-14 h-14 rounded-full bg-purple-600 items-center justify-center`}
            >
              <Ionicons name="wallet-outline" size={26} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={tw`items-center`}>
            <Ionicons name="settings-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </ScreensWrapper>
  )
}

export default AccountBalance
