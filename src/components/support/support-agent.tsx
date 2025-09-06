import { ChevronRight } from "lucide-react-native"
import React, { FC } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import tw from "twrnc"

interface SupportAgentProps {
  name: string
  phone: string
  avatar: string
  onPress: () => void
}

const SupportAgent: FC<SupportAgentProps> = (props) => {
  const { name, phone, onPress } = props
  return (
    <TouchableOpacity
      style={tw`flex-row items-center justify-between py-3 px-4 bg-transparent border border-gray-700 rounded-xl mb-3`}
      onPress={onPress}
    >
      <View style={tw`flex-row items-center flex-1`}>
        <View style={tw`w-10 h-10 bg-gray-600 rounded-full mr-4`} />
        <View style={tw`flex-1`}>
          <Text style={tw`text-white font-semibold text-base`}>{name}</Text>
          <Text style={tw`text-gray-400 text-sm`}>{phone}</Text>
        </View>
      </View>
      <ChevronRight width={20} height={20} color="#6B7280" />
    </TouchableOpacity>
  )
}

export default SupportAgent
