import { StyleSheet, Text, View } from "react-native"
import React from "react"
import tw from "twrnc"
const SalaryCards = () => {
  return (
    <>
      {/* Salary Card */}
      <View style={tw`bg-gray-200 rounded-2xl p-4 mr-3 w-40 h-48`}>
        <View style={tw`flex-row items-center mb-2`}>
          <Text style={tw`text-gray-800 font-semibold text-xs`}>VISA</Text>
        </View>
        <Text style={tw`text-gray-600 text-xs mt-8`}>Salary</Text>
        <Text style={tw`text-gray-900 text-xl font-bold`}>$ 2,230</Text>
        <Text style={tw`text-gray-600 text-xs mt-8`}>** 6917</Text>
      </View>
      {/* Savings Account Card */}
      <View style={tw`bg-yellow-300 rounded-2xl p-4 mr-3 w-40 h-48`}>
        <View style={tw`flex-row items-center mb-2`}>
          <Text style={tw`text-gray-800 font-semibold text-xs`}>VISA</Text>
        </View>
        <Text style={tw`text-gray-700 text-xs mt-8`}>Savings account</Text>
        <Text style={tw`text-gray-900 text-xl font-bold`}>$ 5,566</Text>
        <Text style={tw`text-gray-700 text-xs mt-8`}>** 4552</Text>
      </View>
      {/* Security Card (Partial) */}
      <View style={tw`bg-purple-200 rounded-2xl p-4 w-40 h-48`}>
        <View style={tw`flex-row items-center mb-2`}>
          <Text style={tw`text-gray-800 font-semibold text-xs`}>VISA</Text>
        </View>
        <Text style={tw`text-gray-700 text-xs mt-8`}>Security</Text>
        <Text style={tw`text-gray-900 text-xl font-bold`}>$ 1,100</Text>
        <Text style={tw`text-gray-700 text-xs mt-8`}>** 3298</Text>
      </View>
    </>
  )
}

export default SalaryCards

const styles = StyleSheet.create({})
