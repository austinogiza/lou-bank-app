import { StyleSheet, Text, View } from "react-native"
import React from "react"
import ImageContainer from "../images/image-container"
import tw from "twrnc"
import { BankColorsThemes } from "@/src/style/color"
import { useFetchAccountOverview } from "@/src/api/queries/fetch-account-overview"

const TransactionGroup = () => {
  const { allAccountOverview } = useFetchAccountOverview()
  return (
    <View style={tw`mt-4`}>
      {/* Transaction Item */}
      <View
        style={[
          tw`bg-black flex-row items-center px-3 py-4 rounded-3xl mb-3`,
          styles.groupContainer,
        ]}
      >
        <ImageContainer
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
          }}
          style={tw`w-12 h-12 rounded-full bg-white mr-3`}
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

const styles = StyleSheet.create({
  groupContainer: {
    borderWidth: 1,
    borderColor: BankColorsThemes.alpha[900],
    height: 70,
    // borderRadius: 16,
  },
})
