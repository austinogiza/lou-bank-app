import { StyleSheet, Text, View } from "react-native"
import React, { FC } from "react"
import tw from "twrnc"
interface CardSelectionProps {
  currentCardIndex?: number
  setCurrentCardIndex?: (index: number) => void
  balance?: string
  lastDigits?: string
  cardHolder?: string
  validThru?: string
  cards?: Array<{}>
}
const CardSelection: FC<CardSelectionProps> = (props) => {
  const {
    currentCardIndex = 0,
    setCurrentCardIndex,
    balance,
    lastDigits,
    cardHolder,
    validThru,
    cards,
  } = props
  return (
    <View style={tw`px-4 mt-20  w-full`}>
      <View style={tw`bg-yellow-200 rounded-2xl p-6 h-52`}>
        {/* Card Header */}
        <View style={tw`flex-row justify-between items-start mb-8`}>
          <Text style={tw`text-gray-900 font-bold text-lg`}>VISA</Text>
          <Text style={tw`text-gray-900 font-bold text-2xl`}>$ {balance}</Text>
        </View>

        {/* Chip */}
        <View style={tw`w-12 h-10 bg-gray-300 rounded-md mb-4 opacity-80`}>
          <View style={tw`flex-row mt-1 ml-1`}>
            <View style={tw`w-4 h-3 bg-gray-400 rounded-sm mr-1`} />
            <View style={tw`w-4 h-3 bg-gray-400 rounded-sm`} />
          </View>
          <View style={tw`flex-row mt-1 ml-1`}>
            <View style={tw`w-4 h-3 bg-gray-400 rounded-sm mr-1`} />
            <View style={tw`w-4 h-3 bg-gray-400 rounded-sm`} />
          </View>
        </View>

        {/* Card Number */}
        <View style={tw`flex-row items-center mb-4`}>
          <Text style={tw`text-gray-900 text-base mr-2`}>•••• •••• ••••</Text>
          <Text style={tw`text-gray-900 text-base font-semibold`}>
            {lastDigits}
          </Text>
        </View>

        {/* Card Footer */}
        <View style={tw`flex-row justify-between items-end`}>
          <Text style={tw`text-gray-700 text-xs uppercase`}>{cardHolder}</Text>
          <View>
            <Text style={tw`text-gray-600 text-xs`}>VALID THRU</Text>
            <Text style={tw`text-gray-900 text-sm font-semibold`}>
              {validThru}
            </Text>
          </View>
        </View>
      </View>

      {/* Card Indicators */}
      <View style={tw`flex-row justify-center mt-4`}>
        {cards?.map((_, index) => (
          <View
            key={index}
            style={tw`w-2 h-2 rounded-full mx-1 ${
              index === currentCardIndex ? "bg-yellow-400" : "bg-gray-600"
            }`}
          />
        ))}
      </View>
    </View>
  )
}

export default CardSelection

const styles = StyleSheet.create({})
