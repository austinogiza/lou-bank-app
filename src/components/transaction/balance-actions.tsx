import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import tw from "twrnc"
import { AccountActions } from "@/src/data/transaction-filter"
const BalanceActions = () => {
  return (
    <View style={tw`flex-row w-full justify-start mt-6 gap-4`}>
      {AccountActions.map((item, idx) => (
        <TouchableOpacity key={idx} style={tw`items-center justify-center `}>
          <View
            style={[
              tw`w-14 h-14 rounded-full border border-gray-600 items-center justify-center mb-2`,
              { borderColor: item.color, borderWidth: 1 },
            ]}
          >
            {item.icon}
          </View>
          <Text style={tw`text-white text-sm font-medium`}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default BalanceActions

const styles = StyleSheet.create({})
