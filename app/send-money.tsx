import React, { useState } from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import tw from "twrnc"
import { Ionicons } from "@expo/vector-icons"

const SendMoneyScreen = () => {
  const [amount, setAmount] = useState("40.00")

  const handlePress = (value: string) => {
    if (value === "back") {
      setAmount((prev) => prev.slice(0, -1) || "0")
    } else if (value === "." && amount.includes(".")) {
      return
    } else {
      setAmount((prev) => (prev === "0" ? value : prev + value))
    }
  }

  return (
    <View style={tw`flex-1 bg-black`}>
      {/* Header */}
      <View style={tw`flex-row items-center px-4 py-4`}>
        <TouchableOpacity
          style={tw`w-10 h-10 rounded-full bg-neutral-900 items-center justify-center mr-4`}
        >
          <Ionicons name="arrow-back" size={20} color="white" />
        </TouchableOpacity>
        <Text style={tw`text-white text-base font-semibold`}>Send Money</Text>
      </View>

      {/* Receiver Info */}
      <View style={tw`items-center mt-6`}>
        <Image
          source={{ uri: "https://i.pravatar.cc/200?img=4" }}
          style={tw`w-16 h-16 rounded-full`}
        />
        <Text style={tw`text-gray-400 mt-2`}>+44 456 589 254 36</Text>
        <Text style={tw`text-white text-lg font-semibold`}>
          Ellizabeth Olsen
        </Text>
      </View>

      {/* Amount */}
      <View style={tw`items-center mt-6`}>
        <Text style={tw`text-white text-3xl font-bold`}>${amount}</Text>
        <View style={tw`h-px bg-gray-700 w-4/5 my-3`} />
        <Text style={tw`text-gray-400 text-sm`}>
          Available balance:{" "}
          <Text style={tw`text-white font-semibold`}>$45,756.84</Text>
        </Text>
      </View>

      {/* Keypad */}
      <View style={tw`flex-row flex-wrap justify-center mt-10`}>
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "back"].map(
          (key) => (
            <TouchableOpacity
              key={key}
              onPress={() => handlePress(key)}
              style={tw`w-20 h-20 border border-gray-700 rounded-2xl items-center justify-center m-1`}
            >
              {key === "back" ? (
                <Ionicons name="close" size={28} color="white" />
              ) : (
                <Text style={tw`text-white text-xl font-semibold`}>{key}</Text>
              )}
            </TouchableOpacity>
          )
        )}
      </View>

      {/* Pay Button */}
      <View style={tw`absolute bottom-8 w-full px-6`}>
        <TouchableOpacity
          style={tw`bg-purple-600 py-5 rounded-full items-center`}
          onLongPress={() => console.log("Processing payment...")}
        >
          <Text style={tw`text-white font-semibold text-base`}>
            Tap & Hold To Pay
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SendMoneyScreen
