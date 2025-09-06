import HeaderInfo from "@/src/components/helpers/header-info"
import ImageContainer from "@/src/components/images/image-container"
import ScreensWrapper from "@/src/components/wrapper/screens-wrapper"
import { BankColorsThemes } from "@/src/style/color"
import { useRouter } from "expo-router"
import { ArrowLeft, Camera, Paperclip, Send } from "lucide-react-native"
import React, { useState } from "react"
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import tw from "twrnc"

interface ChatMessage {
  id: number
  text: string
  isUser: boolean
  timestamp: string
}

interface MessageProps {
  text: string
  isUser?: boolean
  timestamp?: string
}

interface QuickReplyProps {
  text: string
  onPress: () => void
}

const Message: React.FC<MessageProps> = ({
  text,
  isUser = false,
  timestamp,
}) => {
  return (
    <View style={tw`mb-4 ${isUser ? "items-end" : "items-start"}`}>
      <View
        style={tw`max-w-xs ${
          isUser ? "bg-purple-600" : "bg-gray-800"
        } p-4 rounded-2xl ${isUser ? "rounded-br-sm" : "rounded-bl-sm"}`}
      >
        <Text style={tw`text-white text-base`}>{text}</Text>
      </View>
      {timestamp && (
        <Text style={tw`text-gray-500 text-xs mt-1`}>{timestamp}</Text>
      )}
    </View>
  )
}

const QuickReply: React.FC<QuickReplyProps> = ({ text, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw`bg-gray-800 px-4 py-2 rounded-full mr-2 mb-2`}
    >
      <Text style={tw`text-white text-sm`}>{text}</Text>
    </TouchableOpacity>
  )
}

const LiveChat = () => {
  const router = useRouter()
  const [message, setMessage] = useState<string>("")
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: "Hi, I'm Alfred how can I help you today?",
      isUser: false,
      timestamp: "2:30 PM",
    },
    {
      id: 2,
      text: "Hello, I've got an issues with my card. It got stolen and I would like to block it",
      isUser: true,
      timestamp: "2:31 PM",
    },
    {
      id: 3,
      text: "I am sorry to hear that, please select one of the following options",
      isUser: false,
      timestamp: "2:32 PM",
    },
  ])

  const quickReplies: string[] = [
    "Block my card",
    "Report fraud",
    "Request replacement",
    "Check transactions",
  ]

  const sendMessage = (): void => {
    if (message.trim()) {
      const newMessage: ChatMessage = {
        id: messages.length + 1,
        text: message.trim(),
        isUser: true,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      }
      setMessages((prevMessages) => [...prevMessages, newMessage])
      setMessage("")
    }
  }

  const handleQuickReply = (replyText: string): void => {
    const newMessage: ChatMessage = {
      id: messages.length + 1,
      text: replyText,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    }
    setMessages((prevMessages) => [...prevMessages, newMessage])
  }

  const handleAttachment = (): void => {
    console.log("Handle attachment functionality")
  }

  const handleCamera = (): void => {
    console.log("Handle camera functionality")
  }

  const handleGoBack = (): void => {
    router.back()
  }

  return (
    <ScreensWrapper>
      <KeyboardAvoidingView
        style={tw`flex-1 bg-black`}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={tw`px-4`}>
          <HeaderInfo
            title="Live Chat"
            iconLeft={
              <TouchableOpacity onPress={handleGoBack}>
                <ArrowLeft
                  width={18}
                  height={18}
                  color={BankColorsThemes.white}
                />
              </TouchableOpacity>
            }
            iconRight={
              <ImageContainer
                source={{ uri: "https://i.pravatar.cc/200" }}
                style={tw`w-10 h-10 rounded-full`}
              />
            }
          />
        </View>

        <View style={tw`flex-1 px-4`}>
          <View style={tw`mb-4`}>
            <Text style={tw`text-gray-400 text-sm`}>Hello, Adom Shafi</Text>
            <Text style={tw`text-white text-xl font-bold`}>
              Tell us more about the issue
            </Text>
          </View>

          <ScrollView
            style={tw`flex-1 mb-4`}
            showsVerticalScrollIndicator={false}
          >
            {messages.map((msg: ChatMessage) => (
              <Message
                key={msg.id}
                text={msg.text}
                isUser={msg.isUser}
                timestamp={msg.timestamp}
              />
            ))}

            {/* Quick Reply Options */}
            <View style={tw`mt-4`}>
              <View style={tw`flex-row flex-wrap`}>
                {quickReplies.map((reply: string, index: number) => (
                  <QuickReply
                    key={index}
                    text={reply}
                    onPress={() => handleQuickReply(reply)}
                  />
                ))}
              </View>
            </View>
          </ScrollView>

          {/* Input Area */}
          <View
            style={tw`flex-row items-center bg-gray-900 rounded-full px-4 py-2 mb-4`}
          >
            <TouchableOpacity style={tw`mr-3`} onPress={handleAttachment}>
              <Paperclip width={20} height={20} color="#666" />
            </TouchableOpacity>

            <TextInput
              value={message}
              onChangeText={setMessage}
              placeholder="Type your message..."
              placeholderTextColor="#666"
              style={tw`flex-1 text-white text-base py-2`}
              multiline
              onSubmitEditing={sendMessage}
              blurOnSubmit={false}
            />

            <TouchableOpacity
              onPress={message.trim() ? sendMessage : handleCamera}
              style={tw`ml-3`}
            >
              {message.trim() ? (
                <Send width={20} height={20} color="#8b5cf6" />
              ) : (
                <Camera width={20} height={20} color="#666" />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScreensWrapper>
  )
}

export default LiveChat
