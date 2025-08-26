import React from "react"
import { View, Text, Pressable } from "react-native"
import tw from "twrnc"

interface BalanceCardProps {
  title: string
  subtitle?: string
  amount: number
  accent?: "purple" | "blue"
  onPress?: () => void
  styleClassName?: string
}

const formatCurrency = (v: number) =>
  "$" + v.toLocaleString("en-US", { minimumFractionDigits: 0 })

export const BalanceCard: React.FC<BalanceCardProps> = ({
  title,
  subtitle,
  amount,
  accent = "purple",
  onPress,
  styleClassName = "",
}) => {
  const ring = accent === "purple" ? "border-purple-500" : "border-blue-500"
  const iconRing = accent === "purple" ? "border-purple-500" : "border-blue-500"

  return (
    <Pressable
      onPress={onPress}
      style={tw.style(
        `flex-1 mr-4 rounded-3xl border border-[#1F2023] p-5`,
        styleClassName
      )}
    >
      <View style={tw`flex-row justify-between items-start`}>
        <View
          style={tw`w-16 h-16 rounded-full border border-[#1F2023] items-center justify-center`}
        >
          {/* Placeholder wallet icon */}
          <Text style={tw`text-white text-xl`}>💼</Text>
        </View>
        <View
          style={tw`w-10 h-10 rounded-full items-center justify-center border ${ring}`}
        >
          <Text style={tw`text-white`}>↗</Text>
        </View>
      </View>
      <Text style={tw`text-white text-xl font-semibold mt-6`}>{title}</Text>
      {!!subtitle && (
        <Text style={tw`text-[#7E8391] mt-1 text-sm leading-snug`}>
          {subtitle}
        </Text>
      )}
      <View style={tw`mt-6 flex-row items-end`}>
        <Text style={tw`text-white text-4xl font-bold`}>
          {formatCurrency(Math.floor(amount))}
        </Text>
        <Text style={tw`text-[#7E8391] text-2xl font-semibold ml-1`}>
          {"," + (amount % 1000).toString().padStart(3, "0").slice(0, 3)}
        </Text>
      </View>
    </Pressable>
  )
}
