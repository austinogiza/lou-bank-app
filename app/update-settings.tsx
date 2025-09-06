import ScreensWrapper from "@/src/components/wrapper/screens-wrapper"
import { ArrowLeft, ChevronRight, Key, X } from "lucide-react-native"
import React, { useState } from "react"
import {
  Alert,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import tw from "twrnc"
import CloseAccountModal from "@/src/components/settings/close-account"
import HeaderInfo from "@/src/components/helpers/header-info"
import { BankColorsThemes } from "@/src/style/color"

// Close Account Modal
// Updated App Settings Screen with modal
const UpdatedAppSettingsScreen: React.FC = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState<boolean>(false)
  const [showCloseAccountModal, setShowCloseAccountModal] =
    useState<boolean>(false)

  const closeAccountModal = () => {
    setShowCloseAccountModal(false)
  }
  const handlePasswordChange = (): void => {
    // Navigate to ChangePasswordScreen
    console.log("Navigate to change password")
  }

  const handleEmailChange = (): void => {
    // Navigate to EmailAddressScreen
    console.log("Navigate to change email")
  }

  const handleTwoFactorToggle = (): void => {
    // Navigate to TwoStepsVerificationScreen
    console.log("Navigate to 2FA settings")
  }

  const handleCloseAccount = (): void => {
    setShowCloseAccountModal(true)
  }

  const handleDeleteAccount = (): void => {
    setShowCloseAccountModal(false)
    // Handle account deletion
    Alert.alert("Account Deleted", "Your account has been permanently deleted.")
  }

  return (
    <ScreensWrapper>
      <ScrollView style={tw`flex-1 bg-black px-4`}>
        <HeaderInfo
          title="App Settings"
          iconLeft={
            <ArrowLeft width={18} height={18} color={BankColorsThemes.white} />
          }
        />
        <View style={tw`mt-6`}>
          <Text style={tw`text-white text-2xl font-bold mb-6`}>
            App Settings
          </Text>

          <TouchableOpacity
            onPress={handlePasswordChange}
            style={tw`transparent p-4 rounded-xl mb-3 flex-row items-center justify-between border border-gray-800`}
          >
            <View style={tw`flex-row items-center flex-1`}>
              <View style={tw`p-3 rounded-lg mr-4`}>
                <Key width={20} height={20} color="white" />
              </View>
              <View style={tw`flex-1`}>
                <Text style={tw`text-white font-semibold text-lg`}>
                  Change Password
                </Text>
                <Text style={tw`text-gray-400 text-sm mt-1`}>
                  You can change your password from here
                </Text>
              </View>
            </View>
            <ChevronRight width={20} height={20} color="#666" />
          </TouchableOpacity>

          {/* Add other setting items similarly */}

          <View style={tw`mt-4`}>
            <TouchableOpacity
              onPress={handleCloseAccount}
              style={tw`transparent p-4 rounded-xl mb-3 flex-row items-center justify-between border border-gray-800`}
            >
              <View style={tw`flex-row items-center flex-1`}>
                <View style={tw`p-3 rounded-lg mr-4`}>
                  <X width={20} height={20} color="#ef4444" />
                </View>
                <View style={tw`flex-1`}>
                  <Text style={tw`text-red-400 font-semibold text-lg`}>
                    Close Your Account
                  </Text>
                  <Text style={tw`text-gray-400 text-sm mt-1`}>
                    Permanently delete your account
                  </Text>
                </View>
              </View>
              <ChevronRight width={20} height={20} color="#666" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <CloseAccountModal
        visible={showCloseAccountModal}
        onClose={closeAccountModal}
        onDelete={handleDeleteAccount}
      />
    </ScreensWrapper>
  )
}
