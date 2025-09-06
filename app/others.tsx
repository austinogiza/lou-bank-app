import React, { useState } from "react"
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Modal,
  Alert,
} from "react-native"
import {
  ArrowLeft,
  Eye,
  EyeOff,
  RefreshCw,
  MessageSquare,
  Smartphone,
  Key,
  Search,
  ChevronRight,
  X,
  LucideIcon,
} from "lucide-react-native"
import tw from "twrnc"
import ScreensWrapper from "@/src/components/wrapper/screens-wrapper"
import HeaderInfo from "@/src/components/helpers/header-info"
import { BankColorsThemes } from "@/src/style/color"

// Change Password Screen
const ChangePasswordScreen: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const [showCurrentPassword, setShowCurrentPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)

  const handleChangePassword = (): void => {
    if (currentPassword !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match")
      return
    }
    // Handle password change logic
    console.log("Password changed successfully")
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
          <Text style={tw`text-white text-2xl font-bold mb-6`}>
            Change Password
          </Text>

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
            Must contain minimum of{" "}
            <Text style={tw`text-white font-semibold`}>
              8 characters, contain a letter, a number, special character
            </Text>{" "}
            and{" "}
            <Text style={tw`text-white font-semibold`}>upper case letter</Text>
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

// 2FA Verification Option Component
interface VerificationOptionProps {
  icon: LucideIcon
  title: string
  subtitle: string
  onPress: () => void
}

const VerificationOption: React.FC<VerificationOptionProps> = ({
  icon: Icon,
  title,
  subtitle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={tw`bg-transparent border border-gray-700 rounded-xl p-4 mb-3 flex-row items-center justify-between`}
      onPress={onPress}
    >
      <View style={tw`flex-row items-center flex-1`}>
        <View style={tw`p-3 rounded-lg mr-4`}>
          <Icon width={20} height={20} color="white" />
        </View>
        <View style={tw`flex-1`}>
          <Text style={tw`text-white font-semibold text-base mb-1`}>
            {title}
          </Text>
          <Text style={tw`text-gray-400 text-sm`}>{subtitle}</Text>
        </View>
      </View>
      <ChevronRight width={20} height={20} color="#6B7280" />
    </TouchableOpacity>
  )
}

// 2 Steps Verification Screen
const TwoStepsVerificationScreen: React.FC = () => {
  const handleFinePay = (): void => {
    console.log("Setup FinePay App verification")
  }

  const handleAuthApp = (): void => {
    console.log("Setup Authentication App verification")
  }

  const handleTextMessage = (): void => {
    console.log("Setup Text message verification")
  }

  return (
    <ScreensWrapper>
      <ScrollView style={tw`flex-1 bg-black px-4`}>
        <HeaderInfo
          title="2 Steps Verifications"
          iconLeft={
            <ArrowLeft width={18} height={18} color={BankColorsThemes.white} />
          }
        />

        <View style={tw`mt-6`}>
          <Text style={tw`text-white text-2xl font-bold mb-2`}>
            2 Steps Verifications
          </Text>
          <Text style={tw`text-gray-400 text-sm mb-6`}>
            This provides an extra layer of security on your account.
          </Text>

          <VerificationOption
            icon={Smartphone}
            title="Via FinePay App"
            subtitle="Fastest way to verify yourself and keep your account safe"
            onPress={handleFinePay}
          />

          <VerificationOption
            icon={Key}
            title="Via Authentication App"
            subtitle="Verify yourself with an authenticator app such as Microsoft or google"
            onPress={handleAuthApp}
          />

          <VerificationOption
            icon={MessageSquare}
            title="Via Text message"
            subtitle="Receive a verification text via text message."
            onPress={handleTextMessage}
          />
        </View>
      </ScrollView>
    </ScreensWrapper>
  )
}

// Support Agent Component
interface SupportAgentProps {
  name: string
  phone: string
  avatar: string
  onPress: () => void
}

const SupportAgent: React.FC<SupportAgentProps> = ({
  name,
  phone,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={tw`flex-row items-center justify-between py-3 px-4 bg-transparent border border-gray-700 rounded-xl mb-3`}
      onPress={onPress}
    >
      <View style={tw`flex-row items-center flex-1`}>
        <View style={tw`w-10 h-10 bg-gray-600 rounded-full mr-4`} />
        <View style={tw`flex-1`}>
          <Text style={tw`text-white font-semibold text-base`}>{name}</Text>
          <Text style={tw`text-gray-400 text-sm`}>{phone}</Text>
        </View>
      </View>
      <ChevronRight width={20} height={20} color="#6B7280" />
    </TouchableOpacity>
  )
}

// Support Screen
const SupportScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("")

  const supportAgents = [
    { name: "Adam Shafi", phone: "2334 4783 389 0004-00-04" },
    { name: "Ava Kaysar", phone: "2334 4783 389 0004-00-04" },
    { name: "Sara William", phone: "2334 4783 389 0004-00-04" },
    { name: "Elizabeth Olsen", phone: "2334 4783 389 0004-00-04" },
  ]

  return (
    <ScreensWrapper>
      <ScrollView style={tw`flex-1 bg-black px-4`}>
        <HeaderInfo
          title="Support"
          iconLeft={
            <ArrowLeft width={18} height={18} color={BankColorsThemes.white} />
          }
          iconRight={
            <MessageSquare
              width={18}
              height={18}
              color={BankColorsThemes.white}
            />
          }
        />

        <View style={tw`mt-6`}>
          <Text style={tw`text-gray-400 text-sm mb-1`}>Hello, Adam Shafi</Text>
          <Text style={tw`text-white text-2xl font-bold mb-6`}>
            How can we help you?
          </Text>

          <View style={tw`relative mb-6`}>
            <TextInput
              style={tw`bg-transparent border border-gray-700 rounded-xl px-12 py-4 text-white text-base`}
              placeholder="Search Topic"
              placeholderTextColor="#6B7280"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <Search
              width={20}
              height={20}
              color="#6B7280"
              style={tw`absolute left-4 top-4`}
            />
          </View>

          <View style={tw`flex-row items-center justify-between mb-4`}>
            <Text style={tw`text-white font-semibold text-lg`}>
              Get help with transaction
            </Text>
            <TouchableOpacity>
              <Text style={tw`text-purple-400 font-medium`}>See all</Text>
            </TouchableOpacity>
          </View>

          {supportAgents.map((agent, index) => (
            <SupportAgent
              key={index}
              name={agent.name}
              phone={agent.phone}
              avatar="https://i.pravatar.cc/200"
              onPress={() => console.log(`Contact ${agent.name}`)}
            />
          ))}
        </View>
      </ScrollView>
    </ScreensWrapper>
  )
}

// Close Account Modal
interface CloseAccountModalProps {
  visible: boolean
  onClose: () => void
  onDelete: () => void
}

const CloseAccountModal: React.FC<CloseAccountModalProps> = ({
  visible,
  onClose,
  onDelete,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={tw`flex-1 bg-black/80 justify-end`}>
        <View style={tw`bg-black rounded-t-3xl p-6`}>
          <View style={tw`flex-row items-center justify-between mb-6`}>
            <Text style={tw`text-white font-semibold text-lg`}>
              Close Account
            </Text>
            <TouchableOpacity onPress={onClose}>
              <X width={24} height={24} color="white" />
            </TouchableOpacity>
          </View>

          <Text style={tw`text-white text-xl font-bold mb-2`}>
            Are you sure you want to close account?
          </Text>

          <Text style={tw`text-gray-400 text-sm mb-8`}>
            You gonna close the account but you can reopen just by log in
          </Text>

          <View style={tw`flex-row gap-4`}>
            <TouchableOpacity
              style={tw`flex-1 bg-transparent border border-gray-600 py-4 rounded-full`}
              onPress={onClose}
            >
              <Text style={tw`text-white text-center font-semibold text-base`}>
                Cancel
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={tw`flex-1 bg-red-600 py-4 rounded-full`}
              onPress={onDelete}
            >
              <Text style={tw`text-white text-center font-semibold text-base`}>
                Delete
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

// Updated App Settings Screen with modal
const UpdatedAppSettingsScreen: React.FC = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState<boolean>(false)
  const [showCloseAccountModal, setShowCloseAccountModal] =
    useState<boolean>(false)

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
        onClose={() => setShowCloseAccountModal(false)}
        onDelete={handleDeleteAccount}
      />
    </ScreensWrapper>
  )
}

// Export all components
export {
  ChangePasswordScreen,
  EmailAddressScreen,
  TwoStepsVerificationScreen,
  SupportScreen,
  CloseAccountModal,
  UpdatedAppSettingsScreen,
}
