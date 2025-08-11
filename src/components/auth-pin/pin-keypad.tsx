import { BankColorsThemes } from "@/src/style/color"
import React from "react"
import { View, Text, Pressable } from "react-native"
import tw from "twrnc"

type Props = {
  onKey: (digit: string) => void
  onBackspace: () => void
  disabled?: boolean
}

const keys = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["", "0", "<"],
]

export default function Keypad({ onKey, onBackspace, disabled }: Props) {
  return (
    <View style={tw`mt-10`}>
      {keys.map((row, rIdx) => (
        <View key={rIdx} style={tw`flex-row justify-center mb-4`}>
          {row.map((k) => {
            if (k === "")
              return <View key={"spacer" + rIdx} style={tw`mx-4 w-16`} />
            const isBack = k === "<"
            return (
              <Pressable
                key={k}
                disabled={disabled}
                onPress={() => (isBack ? onBackspace() : onKey(k))}
                style={({ pressed }) => [
                  tw`mx-4 h-16 w-16 rounded-full items-center justify-center`,
                  {
                    backgroundColor: pressed
                      ? BankColorsThemes.neutral[600]
                      : BankColorsThemes.neutral[900],
                  },
                ]}
              >
                <Text style={tw`text-white text-2xl font-semibold`}>
                  {isBack ? "⌫" : k}
                </Text>
              </Pressable>
            )
          })}
        </View>
      ))}
    </View>
  )
}
