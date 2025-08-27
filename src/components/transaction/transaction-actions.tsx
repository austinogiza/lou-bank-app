import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import React from "react"
import tw from "twrnc"
import TransactionGroup from "./transaction-group"
import TransactionFilters from "./transaction-filters"
const TransactionActions = () => {
  return (
    <ScrollView contentContainerStyle={tw`pb-28`}>
      {/* Section Title */}

      {/* Search Bar */}
      <View style={tw`bg-neutral-900 rounded-xl px-4 py-2 mt-3 mx-4`}>
        <TextInput
          placeholder="Search..."
          placeholderTextColor="#888"
          style={tw`text-white`}
        />
      </View>

      {/* Filters */}

      {/* Transaction Group */}
      <TransactionGroup />
    </ScrollView>
  )
}

export default TransactionActions

const styles = StyleSheet.create({})
