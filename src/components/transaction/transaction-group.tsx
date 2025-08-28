import { StyleSheet, Text, View } from "react-native"
import React from "react"
import ImageContainer from "../images/image-container"
import tw from "twrnc"

const TransactionGroup = () => {
  return (
    <View style={tw`mt-4`}>
      {/* Transaction Item */}
      <View
        style={tw`bg-black border-[0.5px] border-white flex-row items-center px-4 py-3 rounded-2xl mb-3`}
      >
        <ImageContainer
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
          }}
          style={tw`w-10 h-10 rounded-full bg-white mr-3`}
          contentFit="contain"
        />
        <View style={tw`flex-1`}>
          <Text style={tw`text-white font-semibold`}>Netflix</Text>
          <Text style={tw`text-gray-400 text-xs`}>Today, 7:10 pm</Text>
        </View>
        <Text style={tw`text-red-400 font-semibold`}>- $120</Text>
      </View>
    </View>
  )
}

export default TransactionGroup

const styles = StyleSheet.create({})
