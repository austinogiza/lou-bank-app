import ScreensWrapper from '@/src/components/wrapper/screens-wrapper'
import {
  ArrowLeft,
  ChevronRight,
  Key,
  LucideIcon,
  MessageSquare,
  Smartphone
} from 'lucide-react-native'
import React from 'react'
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import tw from "twrnc"
import HeaderInfo from '../../src/components/helpers/header-info'
import { BankColorsThemes } from '../../src/style/color'





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
  onPress
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
          <Text style={tw`text-gray-400 text-sm`}>
            {subtitle}
          </Text>
        </View>
      </View>
      <ChevronRight width={20} height={20} color="#6B7280" />
    </TouchableOpacity>
  )
}

// 2 Steps Verification Screen
const TwoStepsVerificationScreen: React.FC = () => {
  const handleFinePay = (): void => {
    console.log('Setup FinePay App verification')
  }

  const handleAuthApp = (): void => {
    console.log('Setup Authentication App verification')
  }

  const handleTextMessage = (): void => {
    console.log('Setup Text message verification')
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
          <Text style={tw`text-white text-2xl font-bold mb-2`}>2 Steps Verifications</Text>
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
