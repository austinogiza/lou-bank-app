import React, { useState } from "react"
import { View, Text, TouchableOpacity, ScrollView, Switch } from "react-native"
import {
  ArrowLeft,
  Key,
  Mail,
  Shield,
  UserMinus,
  ChevronRight,
  LucideIcon,
  UserPlus2,
} from "lucide-react-native"
import tw from "twrnc"
import { BankColorsThemes } from "@/src/style/color"
import ScreensWrapper from "@/src/components/wrapper/screens-wrapper"
import HeaderInfo from "@/src/components/helpers/header-info"

interface SettingItemProps {
  icon: LucideIcon
  title: string
  subtitle: string
  onPress: () => void
  hasToggle?: boolean
  toggleValue?: boolean
  onToggleChange?: (value: boolean) => void
  iconColor?: string
  isDangerous?: boolean
}

const SettingItem: React.FC<SettingItemProps> = ({
  icon: Icon,
  title,
  subtitle,
  onPress,
  hasToggle = false,
  toggleValue = false,
  onToggleChange,
  iconColor = "white",
  isDangerous = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw`transparent p-4 rounded-xl mb-3 flex-row items-center justify-between border border-gray-800`}
    >
      <View style={tw`flex-row items-center flex-1`}>
        <View style={tw`p-3 rounded-lg mr-4`}>
          <Icon
            width={20}
            height={20}
            color={isDangerous ? "#ef4444" : iconColor}
          />
        </View>
        <View style={tw`flex-1`}>
          <Text style={tw`text-white font-semibold text-lg`}>{title}</Text>
          <Text style={tw`text-gray-400 text-sm mt-1`}>{subtitle}</Text>
        </View>
      </View>

      {hasToggle ? (
        <Switch
          value={toggleValue}
          onValueChange={onToggleChange}
          thumbColor={toggleValue ? "#8b5cf6" : "#6b7280"}
          trackColor={{ false: "#374151", true: "#8b5cf6" }}
        />
      ) : (
        <ChevronRight width={20} height={20} color="#666" />
      )}
    </TouchableOpacity>
  )
}

const AppSettingsScreen = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState<boolean>(false)
  const [notificationsEnabled, setNotificationsEnabled] =
    useState<boolean>(true)
  const [faceIdEnabled, setFaceIdEnabled] = useState<boolean>(true)

  const handlePasswordChange = (): void => {
    console.log("Navigate to change password")
  }

  const handleEmailChange = (): void => {
    console.log("Navigate to change email")
  }

  const handleTwoFactorToggle = (): void => {
    console.log("Navigate to 2FA settings")
  }

  const handleCloseAccount = (): void => {
    console.log("Navigate to close account confirmation")
  }

  const handleTwoFactorChange = (value: boolean): void => {
    setTwoFactorEnabled(value)
    console.log(`2FA ${value ? "enabled" : "disabled"}`)
  }

  const handleNotificationsChange = (value: boolean): void => {
    setNotificationsEnabled(value)
    console.log(`Notifications ${value ? "enabled" : "disabled"}`)
  }

  const handleFaceIdChange = (value: boolean): void => {
    setFaceIdEnabled(value)
    console.log(`Face ID ${value ? "enabled" : "disabled"}`)
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

          <SettingItem
            icon={Key}
            title="Change Password"
            subtitle="You can change your password from here"
            onPress={handlePasswordChange}
          />

          <SettingItem
            icon={Mail}
            title="Email Address"
            subtitle="You can change your email from here"
            onPress={handleEmailChange}
          />

          <SettingItem
            icon={Shield}
            title="2 Steps Verifications"
            subtitle="You can customise your verification"
            onPress={handleTwoFactorToggle}
            hasToggle={false}
            toggleValue={twoFactorEnabled}
            onToggleChange={handleTwoFactorChange}
          />
          {/*
          <SettingItem
            icon={Shield}
            title="Notifications"
            subtitle="Push notifications and alerts"
            onPress={() => console.log('Notifications settings')}
            hasToggle={true}
            toggleValue={notificationsEnabled}
            onToggleChange={handleNotificationsChange}
          />

          <SettingItem
            icon={FacePalm}
            title="Face ID"
            subtitle="Use Face ID to unlock the app"
            onPress={() => console.log('Face ID settings')}
            hasToggle={true}
            toggleValue={faceIdEnabled}
            onToggleChange={handleFaceIdChange}
          /> */}

          <View style={tw`mt-4`}>
            <SettingItem
              icon={UserPlus2}
              title="Close Your Account"
              subtitle="Permanently delete your account"
              onPress={handleCloseAccount}
              isDangerous={true}
            />
          </View>
        </View>
      </ScrollView>
    </ScreensWrapper>
  )
}

export default AppSettingsScreen
