
import ScreensWrapper from '@/src/components/wrapper/screens-wrapper'
import {
  ArrowLeft,
  ChevronRight,
  MessageSquare,
  Search
} from 'lucide-react-native'
import React, { useState } from 'react'
import {
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
  onPress
}) => {
  return (
    <TouchableOpacity
      style={tw`flex-row items-center justify-between py-3 px-4 bg-transparent border border-gray-700 rounded-xl mb-3`}
      onPress={onPress}
    >
      <View style={tw`flex-row items-center flex-1`}>
        <View style={tw`w-10 h-10 bg-gray-600 rounded-full mr-4`} />
        <View style={tw`flex-1`}>
          <Text style={tw`text-white font-semibold text-base`}>
            {name}
          </Text>
          <Text style={tw`text-gray-400 text-sm`}>
            {phone}
          </Text>
        </View>
      </View>
      <ChevronRight width={20} height={20} color="#6B7280" />
    </TouchableOpacity>
  )
}

// Support Screen
const SupportScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')

  const supportAgents = [
    { name: 'Adam Shafi', phone: '2334 4783 389 0004-00-04' },
    { name: 'Ava Kaysar', phone: '2334 4783 389 0004-00-04' },
    { name: 'Sara William', phone: '2334 4783 389 0004-00-04' },
    { name: 'Elizabeth Olsen', phone: '2334 4783 389 0004-00-04' },
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
            <MessageSquare width={18} height={18} color={BankColorsThemes.white} />
          }
        />

        <View style={tw`mt-6`}>
          <Text style={tw`text-gray-400 text-sm mb-1`}>Hello, Adam Shafi</Text>
          <Text style={tw`text-white text-2xl font-bold mb-6`}>How can we help you?</Text>

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