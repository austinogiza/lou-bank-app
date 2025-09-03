import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import tw from "twrnc"
import ActionButton from "./action-button"

const HomeActionButtons = () => {
  const sendMoney = () => {
    console.log("Send Money")
  }
  const receiveMoney = () => {
    console.log("Receive Money")
  }
  return (
    <View style={tw`flex-row w-full my-3 flex-wrap`}>
      <ActionButton onPress={sendMoney} />
      <ActionButton receive onPress={receiveMoney} />
    </View>
  )
}

export default HomeActionButtons

const styles = StyleSheet.create({})
