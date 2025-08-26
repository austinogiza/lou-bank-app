import React, { useState } from "react"
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native"
import tw from "twrnc"
import { Ionicons } from "@expo/vector-icons"
import DateTimePicker from "@react-native-community/datetimepicker"

const CustomDateScreen = () => {
  const [fromDate, setFromDate] = useState<Date | null>(null)
  const [toDate, setToDate] = useState<Date | null>(null)
  const [showFromPicker, setShowFromPicker] = useState(false)
  const [showToPicker, setShowToPicker] = useState(false)

  return (
    <View style={tw`flex-1 bg-black`}>
      {/* Header */}
      <View style={tw`flex-row items-center px-4 py-4`}>
        <TouchableOpacity
          style={tw`w-10 h-10 rounded-full bg-neutral-900 items-center justify-center mr-4`}
        >
          <Ionicons name="arrow-back" size={20} color="white" />
        </TouchableOpacity>
        <Text style={tw`text-white text-base font-semibold`}>Custom Date</Text>
      </View>

      <ScrollView contentContainerStyle={tw`px-5 pt-6 flex-grow`}>
        {/* Title */}
        <Text style={tw`text-white text-xl font-bold`}>Custom date range</Text>
        <Text style={tw`text-gray-400 mt-1`}>
          Please select timeframe you want to download
        </Text>

        {/* Date Pickers */}
        <View style={tw`flex-row justify-between mt-8`}>
          {/* From Date */}
          <TouchableOpacity
            style={tw`flex-1 flex-row items-center justify-between border border-gray-700 rounded-xl px-4 py-3 mr-2`}
            onPress={() => setShowFromPicker(true)}
          >
            <Text style={tw`text-gray-400`}>
              {fromDate ? fromDate.toDateString() : "From"}
            </Text>
            <Ionicons name="calendar-outline" size={20} color="white" />
          </TouchableOpacity>

          {/* To Date */}
          <TouchableOpacity
            style={tw`flex-1 flex-row items-center justify-between border border-gray-700 rounded-xl px-4 py-3 ml-2`}
            onPress={() => setShowToPicker(true)}
          >
            <Text style={tw`text-gray-400`}>
              {toDate ? toDate.toDateString() : "To"}
            </Text>
            <Ionicons name="calendar-outline" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Download Button */}
      <View style={tw`px-5 pb-6`}>
        <TouchableOpacity
          style={tw`bg-purple-600 py-4 rounded-full`}
          onPress={() => console.log("Download pressed", { fromDate, toDate })}
        >
          <Text style={tw`text-white text-center font-semibold`}>Download</Text>
        </TouchableOpacity>
      </View>

      {/* DateTime Pickers */}
      {showFromPicker && (
        <DateTimePicker
          value={fromDate || new Date()}
          mode="date"
          display="default"
          onChange={(event, date) => {
            setShowFromPicker(false)
            if (date) setFromDate(date)
          }}
        />
      )}
      {showToPicker && (
        <DateTimePicker
          value={toDate || new Date()}
          mode="date"
          display="default"
          onChange={(event, date) => {
            setShowToPicker(false)
            if (date) setToDate(date)
          }}
        />
      )}
    </View>
  )
}

export default CustomDateScreen
