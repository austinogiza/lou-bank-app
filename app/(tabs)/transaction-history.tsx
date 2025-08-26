import React from "react"
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native"
import tw from "twrnc"
import { Ionicons } from "@expo/vector-icons"

const TransactionHistory = () => {
  return (
    <View style={tw`flex-1 bg-black`}>
      {/* Header */}
      <View style={tw`flex-row justify-between items-center px-4 py-4`}>
        <TouchableOpacity
          style={tw`w-10 h-10 rounded-full bg-neutral-900 items-center justify-center`}
        >
          <Ionicons name="arrow-back" size={20} color="white" />
        </TouchableOpacity>
        <Text style={tw`text-white text-base font-semibold`}>
          Transaction History
        </Text>
        <TouchableOpacity
          style={tw`w-10 h-10 rounded-full bg-neutral-900 items-center justify-center`}
        >
          <Ionicons name="calendar-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={tw`pb-28`}>
        {/* Section Title */}
        <Text style={tw`text-white text-lg font-semibold px-4`}>
          All Transaction
        </Text>

        {/* Search Bar */}
        <View style={tw`bg-neutral-900 rounded-xl px-4 py-2 mt-3 mx-4`}>
          <TextInput
            placeholder="Search..."
            placeholderTextColor="#888"
            style={tw`text-white`}
          />
        </View>

        {/* Filters */}
        <View style={tw`flex-row px-4 mt-4`}>
          {["All", "Received", "Sent", "Type"].map((filter, idx) => (
            <TouchableOpacity
              key={idx}
              style={tw`px-4 py-2 mr-2 rounded-full ${
                idx === 0 ? "bg-purple-600" : "bg-neutral-900"
              }`}
            >
              <Text
                style={tw`${
                  idx === 0 ? "text-white" : "text-gray-300"
                } text-sm`}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Transaction Group */}
        <View style={tw`px-4 mt-6`}>
          <Text style={tw`text-gray-400 mb-2`}>21 June, 2025</Text>

          {/* Transaction Item */}
          <View
            style={tw`bg-neutral-900 flex-row items-center p-4 rounded-2xl mb-3`}
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
            <Text style={tw`text-red-400 font-semibold`}>- $120</Text>
          </View>

          {/* Another Transaction */}
          <View
            style={tw`bg-neutral-900 flex-row items-center p-4 rounded-2xl mb-3`}
          >
            <Image
              source={{ uri: "https://i.pravatar.cc/100?img=5" }}
              style={tw`w-10 h-10 rounded-full mr-3`}
            />
            <View style={tw`flex-1`}>
              <Text style={tw`text-white font-semibold`}>Tony Stark</Text>
              <Text style={tw`text-gray-400 text-xs`}>Today, 7:10 pm</Text>
            </View>
            <Text style={tw`text-green-400 font-semibold`}>+ $100.20</Text>
          </View>
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity
        style={tw`absolute bottom-6 right-6 w-14 h-14 rounded-full bg-purple-600 items-center justify-center`}
      >
        <Ionicons name="download-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  )
}

export default TransactionHistory
