import { ChevronRight, LucideIcon } from "lucide-react-native"
import React, { FC } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import tw from "twrnc"

// 2FA Verification Option Component
interface VerificationOptionProps {
  icon: LucideIcon
  title: string
  subtitle: string
  onPress: () => void
}

const VerificationOption: FC<VerificationOptionProps> = (props) => {
  const { icon: Icon, title, subtitle, onPress } = props
  return (
    <TouchableOpacity
      style={tw`bg-transparent border border-gray-700 rounded-xl p-4 mb-3 flex-row items-center justify-between`}
      onPress={onPress}
    >
      <View style={tw`flex-row items-center flex-1`}>
        <View style={tw`p-3 rounded-lg mr-4`}>
          <Icon width={20} height={20} color="white" />
        </View>
        <View style={tw`flex-1`}>
          <Text style={tw`text-white font-semibold text-base mb-1`}>
            {title}
          </Text>
          <Text style={tw`text-gray-400 text-sm`}>{subtitle}</Text>
        </View>
      </View>
      <ChevronRight width={20} height={20} color="#6B7280" />
    </TouchableOpacity>
  )
}

export default VerificationOption
