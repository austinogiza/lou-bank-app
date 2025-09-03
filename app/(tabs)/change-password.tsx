import ScreensWrapper from '@/src/components/wrapper/screens-wrapper'
import {
  ArrowLeft,
  Eye,
  EyeOff
} from 'lucide-react-native'
import React, { useState } from 'react'
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import tw from "twrnc"
import HeaderInfo from '../../src/components/helpers/header-info'
import { BankColorsThemes } from '../../src/style/color'

// Change Password Screen
const ChangePasswordScreen: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [showCurrentPassword, setShowCurrentPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)

  const handleChangePassword = (): void => {
    if (currentPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match')
      return
    }
    // Handle password change logic
    console.log('Password changed successfully')
  }

  return (
    <ScreensWrapper>
      <ScrollView style={tw`flex-1 bg-black px-4`}>
        <HeaderInfo
          title="Change Password"
          iconLeft={
            <ArrowLeft width={18} height={18} color={BankColorsThemes.white} />
          }
        />

        <View style={tw`mt-6`}>
          <Text style={tw`text-white text-2xl font-bold mb-6`}>Change Password</Text>

          <View style={tw`mb-4`}>
            <View style={tw`relative`}>
              <TextInput
                style={tw`bg-transparent border border-gray-700 rounded-xl px-4 py-4 text-white text-base`}
                placeholder="Your Password"
                placeholderTextColor="#6B7280"
                secureTextEntry={!showCurrentPassword}
                value={currentPassword}
                onChangeText={setCurrentPassword}
              />
              <TouchableOpacity
                style={tw`absolute right-4 top-4`}
                onPress={() => setShowCurrentPassword(!showCurrentPassword)}
              >
                {showCurrentPassword ? (
                  <EyeOff width={20} height={20} color="#6B7280" />
                ) : (
                  <Eye width={20} height={20} color="#6B7280" />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <View style={tw`mb-6`}>
            <View style={tw`relative`}>
              <TextInput
                style={tw`bg-transparent border border-gray-700 rounded-xl px-4 py-4 text-white text-base`}
                placeholder="Confirm Password"
                placeholderTextColor="#6B7280"
                secureTextEntry={!showConfirmPassword}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <TouchableOpacity
                style={tw`absolute right-4 top-4`}
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff width={20} height={20} color="#6B7280" />
                ) : (
                  <Eye width={20} height={20} color="#6B7280" />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <Text style={tw`text-gray-400 text-sm mb-8`}>
            Must contain minimum of <Text style={tw`text-white font-semibold`}>8 characters, contain a letter, a number, special character</Text> and <Text style={tw`text-white font-semibold`}>upper case letter</Text>
          </Text>
        </View>

        <View style={tw`flex-1 justify-end pb-8`}>
          <TouchableOpacity
            style={tw`bg-purple-600 py-4 rounded-full`}
            onPress={handleChangePassword}
          >
            <Text style={tw`text-white text-center font-semibold text-lg`}>
              Change Password
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreensWrapper>
  )
}

export default ChangePasswordScreen
