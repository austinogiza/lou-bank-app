import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import ImageContainer from "../images/image-container"
import tw from "twrnc"
import { BankColorsThemes } from "@/src/style/color"
interface WelcomeTopProps {}
const WelcomeTop = () => {
  return (
    <View style={tw`w-full flex-row justify-between items-center`}>
      <View style={tw`flex-row items-center`}>
        <ImageContainer
          source={{ uri: "https://i.pravatar.cc/100" }}
          style={tw`w-14 h-14 rounded-full mr-3`}
        />
        <View>
          <Text style={tw`text-gray-400 text-base`}>Hello, Adom!</Text>
          <Text style={tw`text-white text-lg font-bold`}>Welcome Back!</Text>
        </View>
      </View>

      <TouchableOpacity style={tw`relative`}>
        <View
          style={tw`w-10 h-10 rounded-full border border-gray-700 items-center justify-center`}
        >
          <Text style={tw`text-white text-xl`}>🔔</Text>
        </View>
        <View
          style={tw`absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-red-500`}
        />
      </TouchableOpacity>
    </View>
  )
}

export default WelcomeTop

const styles = StyleSheet.create({})
