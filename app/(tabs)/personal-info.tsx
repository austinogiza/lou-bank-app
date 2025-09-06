import React, { useState } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native"
import { ArrowLeft, Edit, Copy, Share } from "lucide-react-native"
import tw from "twrnc"
import ScreensWrapper from "@/src/components/wrapper/screens-wrapper"
import HeaderInfo from "@/src/components/helpers/header-info"
import { BankColorsThemes } from "@/src/style/color"
import ImageContainer from "@/src/components/images/image-container"

const PersonalInfoScreen = () => {
  const [name, setName] = useState("Adom Shafi")
  const [isEditing, setIsEditing] = useState(false)

  return (
    <ScreensWrapper>
      <ScrollView style={tw`flex-1 bg-black px-4`}>
        <HeaderInfo
          title="Personal Info"
          iconLeft={
            <ArrowLeft width={18} height={18} color={BankColorsThemes.white} />
          }
          iconRight={
            <Edit width={18} height={18} color={BankColorsThemes.white} />
          }
        />

        <View style={tw`mt-8 items-center`}>
          <ImageContainer
            source={{ uri: "https://i.pravatar.cc/100" }}
            style={tw`w-24 h-24 rounded-full mb-6`}
          />

          <View style={tw`w-full bg-gray-900 rounded-lg p-4 mb-6`}>
            <TextInput
              value={name}
              onChangeText={setName}
              style={tw`text-white text-lg font-medium`}
              editable={isEditing}
              placeholder="Enter your name"
              placeholderTextColor="#666"
            />
          </View>

          <View style={tw`w-full items-center mb-8`}>
            <Text style={tw`text-white text-xl font-bold mb-2`}>
              Your profile link
            </Text>

            <View style={tw`bg-white p-6 rounded-2xl mb-6`}>
              {/* QR Code placeholder */}
              <View
                style={tw`w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center`}
              >
                <View
                  style={tw`w-40 h-40 bg-green-600 rounded-lg flex items-center justify-center`}
                >
                  <Text style={tw`text-white text-6xl font-bold`}>Z</Text>
                </View>
              </View>
            </View>

            <View style={tw`flex-row gap-4`}>
              <TouchableOpacity style={tw`bg-purple-600 p-4 rounded-full`}>
                <Copy width={20} height={20} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={tw`bg-gray-800 p-4 rounded-full`}>
                <Share width={20} height={20} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreensWrapper>
  )
}

export default PersonalInfoScreen
