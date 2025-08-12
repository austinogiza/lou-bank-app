import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import tw from "twrnc"
import { Search } from "lucide-react-native"
import { BankColorsThemes } from "@/src/style/color"
const AppBalance = () => {
  return (
    <>
      <View style={tw`flex-row items-center justify-between py-3`}>
        <View style={tw`mt-4`}>
          <Text style={tw`text-white text-sm font-normal`}>Your balance</Text>
          <Text style={tw`text-white text-4xl font-medium mt-1`}>$ 7,896</Text>
        </View>
        <TouchableOpacity
          style={[
            tw`items-center justify-center w-10 h-10 rounded-full`,
            { backgroundColor: BankColorsThemes.neutral[900] },
          ]}
        >
          <Search size={20} strokeWidth={1.5} color={BankColorsThemes.white} />
        </TouchableOpacity>
      </View>
    </>
  )
}

export default AppBalance

const styles = StyleSheet.create({})
