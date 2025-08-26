import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import tw from "twrnc"
import { Ionicons, FontAwesome5 } from "@expo/vector-icons"

const AddMoneyScreen = () => {
  return (
    <View style={tw`flex-1 bg-black`}>
      {/* Header */}
      <View style={tw`flex-row justify-between items-center px-4 py-4`}>
        <TouchableOpacity
          style={tw`w-10 h-10 rounded-full bg-neutral-900 items-center justify-center`}
        >
          <Ionicons name="arrow-back" size={20} color="white" />
        </TouchableOpacity>
        <Text style={tw`text-white text-base font-semibold`}>Add Money</Text>
        <TouchableOpacity
          style={tw`w-10 h-10 rounded-full bg-neutral-900 items-center justify-center`}
        >
          <Ionicons name="help-circle-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={tw`px-5 mt-6`}>
        <Text style={tw`text-white text-xl font-bold`}>
          Please select a funding method
        </Text>
        <Text style={tw`text-gray-400 mt-1`}>
          Please select how you want to add money
        </Text>

        {/* Option: Debit Card */}
        <TouchableOpacity
          style={tw`flex-row items-center justify-between bg-neutral-900 border border-gray-700 rounded-xl px-4 py-4 mt-6`}
        >
          <View style={tw`flex-row items-center`}>
            <Ionicons name="card-outline" size={22} color="white" />
            <View style={tw`ml-3`}>
              <Text style={tw`text-white font-semibold text-base`}>
                By Debit Card
              </Text>
              <Text style={tw`text-gray-400 text-xs`}>
                Fastest method way to fund your account using your debit cards
              </Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={18} color="white" />
        </TouchableOpacity>

        {/* Option: Bank Transfer */}
        <TouchableOpacity
          style={tw`flex-row items-center justify-between bg-neutral-900 border border-gray-700 rounded-xl px-4 py-4 mt-4`}
        >
          <View style={tw`flex-row items-center`}>
            <FontAwesome5 name="university" size={20} color="white" />
            <View style={tw`ml-3`}>
              <Text style={tw`text-white font-semibold text-base`}>
                By Bank Transfer
              </Text>
              <Text style={tw`text-gray-400 text-xs`}>
                Safely transfer money from your otherbank accounts
              </Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={18} color="white" />
        </TouchableOpacity>

        {/* Divider with Or */}
        <View style={tw`flex-row items-center my-8`}>
          <View style={tw`flex-1 h-px bg-gray-800`} />
          <Text style={tw`text-gray-400 px-3`}>Or</Text>
          <View style={tw`flex-1 h-px bg-gray-800`} />
        </View>

        {/* Apple Pay Button */}
        <TouchableOpacity
          style={tw`flex-row items-center justify-center bg-neutral-900 rounded-full py-4`}
        >
          <Ionicons name="logo-apple" size={22} color="white" />
          <Text style={tw`text-white text-base font-semibold ml-2`}>
            Fund with App Pay
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AddMoneyScreen
