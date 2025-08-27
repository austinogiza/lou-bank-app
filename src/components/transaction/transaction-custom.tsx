import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import tw from "twrnc"
const TransactionCustom = () => {
  return (
    <View style={tw`flex-row justify-between items-center px-4 py-4`}>
      <TouchableOpacity
        style={tw`w-10 h-10 rounded-full bg-neutral-900 items-center justify-center`}
      >
        <Ionicons name="arrow-back" size={20} color="white" />
      </TouchableOpacity>
    </View>
  )
}

export default TransactionCustom

const styles = StyleSheet.create({})
