import React from "react"
import { View } from "react-native"
import tw from "twrnc"

const PinDots = ({
  length = 0,
  total = 4,
}: {
  length: number
  total?: number
}) => {
  return (
    <View style={tw`flex-row justify-center mt-6 border-1 border-white`}>
      {Array.from({ length: total }).map((_, i) => (
        <View
          key={i}
          style={[
            tw`mx-2 p-2  h-3 w-3 rounded-full`,
            { backgroundColor: i < length ? "#cbd5e1" : "#374151" }, // filled vs empty
          ]}
        />
      ))}
    </View>
  )
}
export default PinDots
