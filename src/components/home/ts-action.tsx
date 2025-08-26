import React from "react"
import { Pressable, Text, ViewStyle } from "react-native"
import tw from "twrnc"

interface ActionButtonProps {
  label: string
  variant?: "purple" | "blue" | "outline"
  icon?: string
  onPress?: () => void
  disabled?: boolean
  styleClassName?: string
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  variant = "outline",
  icon = "↗",
  onPress,
  disabled,
  styleClassName = "",
}) => {
  const base = "flex-row items-center justify-center rounded-full h-16 px-8"
  let styles = ""
  if (variant === "outline") {
    styles = "border border-[#1F2023]"
  } else if (variant === "purple") {
    styles = "border border-purple-500"
  } else if (variant === "blue") {
    styles = "border border-blue-500"
  }
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={tw.style(
        `${base} ${styles}`,
        disabled && "opacity-50",
        styleClassName
      )}
    >
      <Text style={tw`text-white mr-2`}>{icon}</Text>
      <Text style={tw`text-white font-medium`}>{label}</Text>
    </Pressable>
  )
}
