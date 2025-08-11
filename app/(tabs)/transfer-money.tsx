import React, { useMemo, useState } from "react"
import { SafeAreaView, View, Text, Image, Pressable, Alert } from "react-native"
import tw from "twrnc"
import { Ionicons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient" // if bare RN, import from 'react-native-linear-gradient'
import { BankColorsThemes } from "@/src/style/color"

const C = {
  bg: "#0E0F12",
  panel: "#1A1C1F",
  chip: "#2A2D31",
  text: "#EEEEEF",
  sub: "#9CA3AF",
  accent: "#E8FF98", // yellow-green
  key: "#2A2D31",
  keyText: "#DADDE1",
  disabled: "#2b2f36",
}

const BALANCE = 5200.15 // sample balance
const LAST4 = "5534"
const REC_LAST4 = "6917"

export default function TransferMoneyScreen() {
  const [amountRaw, setAmountRaw] = useState<string>("") // only digits

  const amountNum = useMemo(() => Number(amountRaw || "0"), [amountRaw])
  const displayAmount = useMemo(
    () => amountNum.toLocaleString("en-US", { maximumFractionDigits: 0 }),
    [amountNum]
  )

  const overBalance = amountNum > BALANCE
  const canSend = amountNum > 0 && !overBalance

  const addDigit = (d: string) => {
    // up to 7 digits to avoid layout overflow (adjust as needed)
    setAmountRaw((prev) =>
      prev.length >= 7 ? prev : prev === "0" ? d : prev + d
    )
  }

  const backspace = () => setAmountRaw((prev) => prev.slice(0, -1))

  const onSend = () => {
    if (!canSend) return
    Alert.alert("Transfer", `Sending $${displayAmount} to Maya…`)
  }

  return (
    <SafeAreaView
      style={[tw`flex-1`, { backgroundColor: BankColorsThemes.contactsBG }]}
    >
      {/* Header */}
      <View style={tw`px-4 py-2 mt-6 flex-column items-center justify-between`}>
        <Text style={tw`text-white font-semibold`}>Transfer</Text>
        <View style={tw`h-1.5 w-16 mt-4 rounded-full bg-white/10`} />
      </View>

      <View style={[tw`mx-4 mt-2 rounded-3xl px-5 pt-4 pb-5`]}>
        {/* Recipient */}
        <View style={tw`items-center mx-4`}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=240&q=80",
            }}
            style={tw`h-10 w-10 rounded-full`}
          />
          <View style={tw`mt-2  py-1 rounded-full`} className="bg-[#2A2D31]">
            <Text style={tw`text-white text-xs`}>••{REC_LAST4}</Text>
          </View>
          <Text style={tw`mt-1 text-sm text-white`}>Maya 🫶</Text>
        </View>

        {/* Amount */}
        <View style={tw`items-center mt-6 mb-4`}>
          <Text style={tw`text-white text-4xl font-semibold`}>
            ${displayAmount || "0"}
          </Text>
          {overBalance ? (
            <Text style={tw`text-red-400 mt-2`}>Amount exceeds balance</Text>
          ) : (
            <Text style={[tw`mt-2`, { color: C.sub }]}>Enter an amount</Text>
          )}
        </View>

        {/* Card row */}
        <View style={tw`flex-row items-center justify-between mt-2`}>
          <View style={tw`flex-row items-center`}>
            <View
              style={[
                tw`h-10 w-10 rounded-xl items-center justify-center mr-3`,
                { backgroundColor: "#243A73" },
              ]}
            >
              <Text style={tw`text-white font-extrabold`}>VISA</Text>
            </View>
            <View>
              <Text style={tw`text-white`}>Visa</Text>
              <Text style={[tw`text-xs`, { color: C.sub }]}>
                ${BALANCE.toLocaleString()}
              </Text>
            </View>
          </View>
          <View style={[tw`py-1 rounded-full`, { backgroundColor: C.chip }]}>
            <Text style={tw`text-white text-xs`}>•• {LAST4}</Text>
          </View>
        </View>

        {/* Send button */}
        <Pressable
          onPress={onSend}
          disabled={!canSend}
          style={tw`mt-5`}
          accessibilityRole="button"
          accessibilityState={{ disabled: !canSend }}
        >
          <LinearGradient
            colors={canSend ? ["#F5FFAE", "#DFFF8F"] : [C.disabled, C.disabled]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={tw`h-12 rounded-full items-center justify-center`}
          >
            <Text
              style={[
                tw`font-medium`,
                { color: canSend ? "#0d0f10" : "#7b7f86" },
              ]}
            >
              Send
            </Text>
          </LinearGradient>
        </Pressable>
      </View>

      {/* Keypad */}
      <View style={tw`mt-6`}>
        {[
          ["1", "2", "3"],
          ["4", "5", "6"],
          ["7", "8", "9"],
          ["", "0", "<"],
        ].map((row, i) => (
          <View key={i} style={tw`flex-row justify-between mb-3`}>
            {row.map((k, j) => {
              if (k === "")
                return <View style={tw`w-24`} key={`${i}-${j}-sp`} />
              const isBack = k === "<"
              return (
                <Pressable
                  key={`${i}-${j}-${k}`}
                  onPress={() => (isBack ? backspace() : addDigit(k))}
                  style={({ pressed }) => [
                    tw`h-16 w-24 rounded-2xl items-center justify-center`,
                    { backgroundColor: pressed ? "#24272B" : C.key },
                  ]}
                >
                  <Text style={tw`text-xl text-white font-semibold`}>
                    {isBack ? "⌫" : k}
                  </Text>
                  {!isBack && (
                    <Text style={[tw`text-[10px] mt-1`, { color: "#9aa0a6" }]}>
                      {[
                        "",
                        "ABC",
                        "DEF",
                        "GHI",
                        "JKL",
                        "MNO",
                        "PQRS",
                        "TUV",
                        "WXYZ",
                      ][Number(k)] || ""}
                    </Text>
                  )}
                </Pressable>
              )
            })}
          </View>
        ))}
      </View>
    </SafeAreaView>
  )
}
