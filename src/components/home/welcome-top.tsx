import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import ImageContainer from "../images/image-container"
import tw from "twrnc"
import { NotificationIcon } from "@/src/utils/image-export"
import { useFetchAccountOverview } from "@/src/api/queries/fetch-account-overview"

interface WelcomeTopProps {}
const WelcomeTop = () => {
  const { allAccountOverview } = useFetchAccountOverview()

  return (
    <View style={tw`w-full flex-row justify-between items-center`}>
      <View style={tw`flex-row items-center`}>
        <ImageContainer
          source={{ uri: "https://i.pravatar.cc/100" }}
          style={tw`w-14 h-14 rounded-full mr-3`}
        />
        <View>
          <Text style={tw`text-gray-400 text-sm capitalize`}>
            Hello, {allAccountOverview?.first_name}!
          </Text>
          <Text style={tw`text-white text-xl font-bold`}>Welcome Back!</Text>
        </View>
      </View>

      <TouchableOpacity style={tw`relative`}>
        <View
          style={tw`w-10 h-10 rounded-full border border-gray-700 items-center justify-center`}
        >
          <NotificationIcon height={20} width={20} />
        </View>
        <View
          style={tw`absolute -top-0.5 right-1 w-2.5 h-2.5 rounded-full bg-red-500`}
        />
      </TouchableOpacity>
    </View>
  )
}

export default WelcomeTop

const styles = StyleSheet.create({})
