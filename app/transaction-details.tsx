import React from "react"
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native"
import tw from "twrnc"
import { Ionicons } from "@expo/vector-icons"

const TransactionDetails = () => {
  return (
    <View style={tw`flex-1 bg-black`}>
      {/* Header */}
      <View style={tw`flex-row justify-between items-center px-4 py-4`}>
        <TouchableOpacity
          style={tw`w-10 h-10 rounded-full bg-neutral-900 items-center justify-center`}
        >
          <Ionicons name="arrow-back" size={20} color="white" />
        </TouchableOpacity>
        <Text style={tw`text-white text-base font-semibold`}>Details</Text>
        <TouchableOpacity
          style={tw`w-10 h-10 rounded-full bg-neutral-900 items-center justify-center`}
        >
          <Ionicons name="ellipsis-vertical" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={tw`flex-grow items-center px-6`}>
        {/* Avatar */}
        <Image
          source={{ uri: "https://i.pravatar.cc/200?img=5" }}
          style={tw`w-20 h-20 rounded-full mt-4`}
        />

        {/* Amount */}
        <Text style={tw`text-white text-2xl font-bold mt-4`}>+$140.00</Text>
        <Text style={tw`text-gray-400 text-sm mt-1`}>
          Money received from Adom Shafi
        </Text>

        {/* Status */}
        <Text style={tw`text-green-500 text-base font-semibold mt-3`}>
          SUCCESS
        </Text>

        {/* Transaction Info */}
        <View style={tw`mt-6 items-center`}>
          <Text style={tw`text-white text-base font-semibold`}>
            $140.00{" "}
            <Text style={tw`text-gray-300 font-normal`}>
              Charged From Your Visa Card
            </Text>
          </Text>
          <Text style={tw`text-white font-semibold mt-1`}>Ends With 4586</Text>
        </View>

        {/* Meta Info */}
        <View style={tw`flex-row justify-between w-full mt-8 px-2`}>
          <Text style={tw`text-gray-400`}>
            Date :{" "}
            <Text style={tw`text-white font-semibold`}>27 June, 2025</Text>
          </Text>
          <Text style={tw`text-gray-400`}>
            Request ID :{" "}
            <Text style={tw`text-white font-semibold`}>1588 6954</Text>
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Floating Buttons */}
      <View style={tw`flex-row justify-center items-center mb-6`}>
        <TouchableOpacity
          style={tw`w-14 h-14 rounded-full bg-neutral-900 items-center justify-center mx-2`}
        >
          <Ionicons name="arrow-back" size={22} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`w-14 h-14 rounded-full bg-purple-600 items-center justify-center mx-2`}
        >
          <Ionicons name="download-outline" size={22} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TransactionDetails
