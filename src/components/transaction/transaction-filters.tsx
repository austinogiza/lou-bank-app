import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React, { FC } from "react"
import tw from "twrnc"
import { BankColorsThemes } from "@/src/style/color"
import { FilterDataOptions } from "@/src/data/transaction-filter"

interface TransactionFiltersProps {
  active?: number
  toggleFilter?: (index: number) => void
}

const TransactionFilters: FC<TransactionFiltersProps> = (props) => {
  const { active, toggleFilter } = props

  return (
    <View style={tw`flex-row w-full mt-4`}>
      {FilterDataOptions.map((filter, index) => {
        return (
          <TouchableOpacity
            onPress={() => toggleFilter?.(index)}
            key={index}
            style={[
              tw`px-5 py-2 mr-2 rounded-full`,
              index === active ? styles.activeButton : styles.inActiveButton,
            ]}
          >
            <Text
              style={tw`${
                index === active ? "text-white" : "text-gray-300"
              } text-sm`}
            >
              {filter.label}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default TransactionFilters

const styles = StyleSheet.create({
  activeButton: {
    backgroundColor: BankColorsThemes.primary[950],
  },
  inActiveButton: {
    backgroundColor: BankColorsThemes.alpha[950],
    borderWidth: 1,
    borderColor: BankColorsThemes.alpha[900],
  },
})
