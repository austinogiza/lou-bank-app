import ScreensWrapper from '@/src/components/wrapper/screens-wrapper'
import { ArrowLeft, ChevronLeft, ChevronRight, MessageCircleQuestionMark } from 'lucide-react-native'
import React, { useState } from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import tw from "twrnc"
import HeaderInfo from '../../src/components/helpers/header-info'
import ImageContainer from '../../src/components/images/image-container'
import { BankColorsThemes } from '../../src/style/color'

type Props = {}

type TabRoutes =
  | '/(tabs)/personal-info'
  | '/(tabs)/financial-info'
  | '/(tabs)/app-settings'
  | '/(tabs)/support'
  | '/(tabs)/legal'

interface NavigationItem {
  title: string
  subtitle: string
  screen: string
  route: TabRoutes
}

interface InformationCardProps {
  title: string
  subTitle: string
  onPress?: () => void
}

interface BottomNavIconProps {
  icon: React.ComponentType<{ width: number; height: number; color: string }>
  isActive?: boolean
  onPress?: () => void
}

const InformationCard: React.FC<InformationCardProps> = ({
  title = 'Adom Shafi',
  subTitle = '@adomshafi_tag',
  onPress
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw`flex-row justify-between items-center border-b border-white/8 pb-4`}
    >
      <View>
        <Text style={tw`text-white text-lg font-bold`}>{title}</Text>
        <Text style={tw`text-gray-500 text-md`}>{subTitle}</Text>
      </View>

      <View>
        <ChevronRight style={tw`text-white cursor-pointer`} />
      </View>
    </TouchableOpacity>
  )
}

const BottomNavIcon: React.FC<BottomNavIconProps> = ({
  icon: Icon,
  isActive = false,
  onPress
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw`h-16 w-16 rounded-full flex justify-center items-center ${isActive ? 'bg-purple-600' : 'bg-gray-700'}`}
    >
      <Icon
        width={24}
        height={24}
        color={BankColorsThemes.white}
      />
    </TouchableOpacity>
  )
}

function Account() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<number>(2) // Default to middle tab

  const handleNavigation = (screen: string): void => {
    console.log(`Navigate to ${screen}`)

    // Type-safe navigation with Expo Router
    switch (screen) {
      case 'PersonalInfo':
        router.push('/(tabs)/personal-info')
        break
      case 'FinancialInfo':
        router.push('/(tabs)/financial-info')
        break
      case 'AppSettings':
        router.push('/(tabs)/app-settings')
        break
      case 'Support':
        router.push('/(tabs)/support')
        break
      case 'Legal':
        router.push('/(tabs)/legal')
        break
      default:
        console.log(`Route not found for ${screen}`)
    }
  }

  const navigationItems: NavigationItem[] = [
    {
      title: 'Personal Information',
      subtitle: 'Name, email, phone number',
      screen: 'PersonalInfo',
      route: '/(tabs)/personal-info'
    },
    {
      title: 'Financial Information',
      subtitle: 'Linked financial institutions, cards you carry',
      screen: 'FinancialInfo',
      route: '/(tabs)/financial-info'
    },
    {
      title: 'App Settings',
      subtitle: 'Notifications, password, face id, close my a...',
      screen: 'AppSettings',
      route: '/(tabs)/app-settings'
    },
    {
      title: 'Support',
      subtitle: 'Help centre, contact us',
      screen: 'Support',
      route: '/(tabs)/support'
    },
    {
      title: 'Legal',
      subtitle: 'Terms of use, privacy policies',
      screen: 'Legal',
      route: '/(tabs)/legal'
    }
  ]

  return (
    <ScreensWrapper>
      <View style={tw`flex-1 bg-black relative`}>
        <ScrollView style={tw`flex-1 px-4 pb-24`}>
          <View>
            <HeaderInfo
              title="Settings"
              iconLeft={
                <ArrowLeft width={18} height={18} color={BankColorsThemes.white} />
              }
              iconRight={
                <MessageCircleQuestionMark
                  width={14}
                  height={14}
                  color={BankColorsThemes.white}
                />
              }
            />
          </View>

          <View style={tw`mt-8`}>
            <View style={tw`flex-col justify-center items-center`}>
              <ImageContainer
                source={{ uri: "https://i.pravatar.cc/100" }}
                style={tw`w-20 h-20 rounded-full`}
              />
              <View style={tw`text-center my-3`}>
                <Text style={tw`text-white text-2xl font-bold text-center`}>Adom Shafi</Text>
                <Text style={tw`text-gray-400 text-md text-center`}>@adomshafi_tag</Text>
              </View>
            </View>

            <View style={tw`pt-10 gap-y-6`}>
              {navigationItems.map((item, index) => (
                <InformationCard
                  key={index}
                  title={item.title}
                  subTitle={item.subtitle}
                  onPress={() => handleNavigation(item.screen)}
                />
              ))}
            </View>
          </View>
        </ScrollView>

        {/* Bottom Navigation - Fixed at bottom with centered content */}
        <View style={tw`absolute bottom-0 left-0 right-0 flex-row justify-center pb-8`}>
          <View style={tw`flex-row rounded-full bg-gray-800/80 p-2 gap-x-2`}>
            <BottomNavIcon
              icon={MessageCircleQuestionMark}
              isActive={activeTab === 0}
              onPress={() => setActiveTab(0)}
            />
            <BottomNavIcon
              icon={MessageCircleQuestionMark}
              isActive={activeTab === 1}
              onPress={() => setActiveTab(1)}
            />
            <BottomNavIcon
              icon={MessageCircleQuestionMark}
              isActive={activeTab === 2}
              onPress={() => setActiveTab(2)}
            />
          </View>
        </View>
      </View>
    </ScreensWrapper>
  )
}

export default Account