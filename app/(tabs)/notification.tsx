import React from "react"
import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import tw from "twrnc"
import { Ionicons } from "@expo/vector-icons"

const NotificationScreen = () => {
  const notifications = [
    {
      id: 1,
      title: "New Update",
      description:
        "FinePay is an easy way to spend and manage your money from anywhere in the world.",
      date: "29th Feb, 2025",
      read: false,
    },
    {
      id: 2,
      title: "Welcome to FinePay",
      description:
        "FinePay is an easy way to spend and manage your money from anywhere in the world.",
      date: "29th Feb, 2025",
      read: true,
    },
  ]

  return (
    <View style={tw`flex-1 bg-black`}>
      {/* Header */}
      <View style={tw`flex-row items-center px-4 py-4`}>
        <TouchableOpacity
          style={tw`w-10 h-10 rounded-full bg-neutral-900 items-center justify-center mr-4`}
        >
          <Ionicons name="arrow-back" size={20} color="white" />
        </TouchableOpacity>
        <Text style={tw`text-white text-base font-semibold`}>Notification</Text>
      </View>

      <ScrollView contentContainerStyle={tw`px-4`}>
        {/* Section Title */}
        <Text style={tw`text-gray-400 mt-2`}>Your Inbox</Text>
        <Text style={tw`text-white text-lg font-semibold mb-4`}>
          Notifications
        </Text>

        {/* Notification Items */}
        {notifications.map((item, idx) => (
          <View key={item.id} style={tw`mb-5`}>
            <View style={tw`flex-row justify-between items-start`}>
              {/* Dot + Title + Description */}
              <View style={tw`flex-row flex-1`}>
                <View
                  style={tw`w-3 h-3 rounded-full mt-1 mr-3 ${
                    item.read ? "bg-gray-500" : "bg-red-500"
                  }`}
                />
                <View style={tw`flex-1`}>
                  <Text
                    style={tw`${
                      item.read ? "text-gray-400" : "text-white"
                    } font-semibold text-base`}
                  >
                    {item.title}
                  </Text>
                  <Text style={tw`text-gray-400 text-xs mt-1`}>
                    {item.description}
                  </Text>
                </View>
              </View>

              {/* Date */}
              <Text style={tw`text-purple-400 text-xs ml-2`}>{item.date}</Text>
            </View>

            {/* Divider */}
            {idx !== notifications.length - 1 && (
              <View style={tw`border-b border-gray-800 mt-3`} />
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default NotificationScreen
