import HeaderInfo from "@/src/components/helpers/header-info"
import ScreensWrapper from "@/src/components/wrapper/screens-wrapper"
import { BankColorsThemes } from "@/src/style/color"
import {
  ArrowLeft,
  ChevronRight,
  MessageSquare,
  RefreshCw,
} from "lucide-react-native"
import React, { useState } from "react"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import tw from "twrnc"

// Email Address Screen
const EmailAddressScreen: React.FC = () => {
  const [email] = useState<string>("adomshafi007@gmail.com")

  const handleContactUs = (): void => {
    console.log("Navigate to contact us")
  }

  return (
    <ScreensWrapper>
      <ScrollView style={tw`flex-1 bg-black px-4`}>
        <HeaderInfo
          title="Email Address"
          iconLeft={
            <ArrowLeft width={18} height={18} color={BankColorsThemes.white} />
          }
        />

        <View style={tw`mt-6`}>
          <Text style={tw`text-white text-2xl font-bold mb-6`}>
            Email Address
          </Text>

          <View
            style={tw`bg-transparent border border-gray-700 rounded-xl px-4 py-4 mb-6 flex-row items-center justify-between`}
          >
            <Text style={tw`text-white text-base`}>{email}</Text>
            <RefreshCw width={20} height={20} color="#6B7280" />
          </View>

          <TouchableOpacity
            style={tw`bg-transparent border border-gray-700 rounded-xl p-4 mb-6`}
          >
            <View style={tw`flex-row items-center justify-between`}>
              <View style={tw`flex-row items-center flex-1`}>
                <View style={tw`bg-gray-800 p-2 rounded-lg mr-3`}>
                  <MessageSquare width={20} height={20} color="white" />
                </View>
                <View style={tw`flex-1`}>
                  <Text style={tw`text-white font-semibold text-base mb-1`}>
                    Want to change your email?
                  </Text>
                  <Text style={tw`text-gray-400 text-sm`}>
                    Contact us if you would like to change the email registered
                    on your account
                  </Text>
                </View>
              </View>
              <ChevronRight width={20} height={20} color="#6B7280" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={tw`flex-1 justify-end pb-8`}>
          <TouchableOpacity
            style={tw`bg-purple-600 py-4 rounded-full`}
            onPress={handleContactUs}
          >
            <Text style={tw`text-white text-center font-semibold text-lg`}>
              Contact Us
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreensWrapper>
  )
}

export default EmailAddressScreen
