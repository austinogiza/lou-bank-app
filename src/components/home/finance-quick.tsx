import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Star, CreditCard, PieChart } from "lucide-react-native"
import React from "react"
import tw from "twrnc"
const FinanceQuick = () => {
  return (
    <>
      <View style={tw`mt-6`}>
        <Text style={tw`text-gray-400 text-xs uppercase mb-4`}>Finance</Text>
        <View style={tw`flex-row`}>
          <TouchableOpacity style={tw`items-center mr-8`}>
            <View
              style={tw`bg-yellow-400 w-12 h-12 rounded-xl items-center justify-center mb-2`}
            >
              <Star size={20} color="#1a1a1a" />
            </View>
            <Text style={tw`text-gray-400 text-xs`}>My bonuses</Text>
          </TouchableOpacity>

          <TouchableOpacity style={tw`items-center mr-8`}>
            <View
              style={tw`bg-gray-700 w-12 h-12 rounded-xl items-center justify-center mb-2`}
            >
              <CreditCard size={20} color="#9ca3af" />
            </View>
            <Text style={tw`text-gray-400 text-xs`}>My budget</Text>
          </TouchableOpacity>

          <TouchableOpacity style={tw`items-center`}>
            <View
              style={tw`bg-purple-900/50 w-12 h-12 rounded-xl items-center justify-center mb-2`}
            >
              <PieChart size={20} color="#9ca3af" />
            </View>
            <Text style={tw`text-gray-400 text-xs text-center`}>
              Finance{"\n"}analysis
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default FinanceQuick

const styles = StyleSheet.create({})
