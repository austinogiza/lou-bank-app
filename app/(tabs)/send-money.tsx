import React, { useState } from "react"
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Image,
} from "react-native"
import { ChevronLeft, X } from "lucide-react-native"
import tw from "twrnc"

const SendMoneyScreen = () => {
  const [amount, setAmount] = useState("15")

  const handleNumberPress = (num) => {
    if (amount === "0") {
      setAmount(num)
    } else {
      setAmount(amount + num)
    }
  }

  const handleDelete = () => {
    if (amount.length > 1) {
      setAmount(amount.slice(0, -1))
    } else {
      setAmount("0")
    }
  }

  const handleSend = () => {
    // Handle send action
    console.log(`Sending $${amount} to Maya`)
  }

  const keypadButtons = [
    { value: "1", letters: "" },
    { value: "2", letters: "ABC" },
    { value: "3", letters: "DEF" },
    { value: "4", letters: "GHI" },
    { value: "5", letters: "JKL" },
    { value: "6", letters: "MNO" },
    { value: "7", letters: "PQRS" },
    { value: "8", letters: "TUV" },
    { value: "9", letters: "WXYZ" },
    { value: "", letters: "" }, // Empty space
    { value: "0", letters: "" },
    { value: "delete", letters: "" },
  ]

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-900`}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a1a" />

      {/* Header */}
      <View style={tw`flex-row items-center justify-between px-4 py-3`}>
        <TouchableOpacity>
          <ChevronLeft size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={tw`text-white text-lg font-medium`}>Transfer</Text>
        <View style={tw`w-6`} />
      </View>

      {/* Recipient Section */}
      <View style={tw`items-center mt-8`}>
        {/* Profile Image Container */}
        <View style={tw`relative`}>
          <View
            style={tw`w-24 h-24 bg-yellow-400 rounded-full items-center justify-center`}
          >
            {/* You can replace this with an actual Image component */}
            <Text style={tw`text-4xl`}>👩</Text>
          </View>
          {/* Card indicator */}
          <View
            style={tw`absolute -bottom-2 left-1/2 -ml-6 bg-gray-800 px-2 py-1 rounded`}
          >
            <Text style={tw`text-gray-400 text-xs`}>•• 6917</Text>
          </View>
        </View>

        {/* Recipient Name */}
        <View style={tw`flex-row items-center mt-6`}>
          <Text style={tw`text-white text-lg`}>Maya</Text>
          <Text style={tw`text-2xl ml-1`}>👋</Text>
        </View>
      </View>

      {/* Amount Display */}
      <View style={tw`items-center mt-8 mb-6`}>
        <Text style={tw`text-white text-5xl font-light`}>$ {amount}</Text>
      </View>

      {/* Card Selection */}
      <View style={tw`mx-4 mb-6`}>
        <View
          style={tw`bg-gray-800 rounded-2xl p-4 flex-row items-center justify-between`}
        >
          <View style={tw`flex-row items-center`}>
            <View
              style={tw`bg-gray-700 w-12 h-8 rounded items-center justify-center mr-3`}
            >
              <Text style={tw`text-white font-bold text-xs`}>VISA</Text>
            </View>
            <View>
              <Text style={tw`text-white font-medium`}>Visa</Text>
              <Text style={tw`text-gray-400 text-sm`}>$ 5,200.15</Text>
            </View>
          </View>
          <Text style={tw`text-gray-400 text-sm`}>•• 5534</Text>
        </View>
      </View>

      {/* Send Button */}
      <TouchableOpacity
        onPress={handleSend}
        style={tw`mx-4 mb-6 bg-yellow-400 rounded-2xl py-4`}
      >
        <Text style={tw`text-gray-900 text-center font-semibold text-lg`}>
          Send
        </Text>
      </TouchableOpacity>

      {/* Keypad */}
      <View style={tw`flex-1 px-4`}>
        <View style={tw`flex-row flex-wrap justify-between`}>
          {keypadButtons.map((button, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                if (button.value === "delete") {
                  handleDelete()
                } else if (button.value) {
                  handleNumberPress(button.value)
                }
              }}
              disabled={!button.value}
              style={tw`w-[30%] ${index < 9 ? "mb-4" : ""}`}
            >
              <View
                style={tw`bg-gray-800 rounded-2xl py-4 items-center justify-center h-16 ${
                  !button.value ? "bg-transparent" : ""
                }`}
              >
                {button.value === "delete" ? (
                  <X size={24} color="#fff" />
                ) : button.value ? (
                  <>
                    <Text style={tw`text-white text-2xl font-light`}>
                      {button.value}
                    </Text>
                    {button.letters ? (
                      <Text style={tw`text-gray-500 text-xs mt-1`}>
                        {button.letters}
                      </Text>
                    ) : null}
                  </>
                ) : null}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SendMoneyScreen
