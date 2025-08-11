import { Image } from "expo-image"
import { FC, memo } from "react"
import tw from "twrnc"
import { CheckCheck } from "lucide-react-native"
import { Pressable, Text, View } from "react-native"
import { BankColorsThemes } from "@/src/style/color"
interface ContactRowProps {
  name: string
  note: string
  date: string
  avatar: string
  last?: boolean
  onPress: () => void
}
const ContactRow: FC<ContactRowProps> = (props) => {
  const { name, note, date, avatar, last, onPress } = props
  return (
    <Pressable
      onPress={onPress}
      style={[
        tw`py-3 flex-row items-center`,
        !last && tw`border-b border-white/5`,
      ]}
    >
      <Image source={{ uri: avatar }} style={tw`h-10 w-10 rounded-full mr-3`} />
      <View style={tw`flex-1`}>
        <Text style={tw`text-white text-base font-normal`}>{name}</Text>
        <Text style={[tw`text-xs mt-1 text-gray-500`]} numberOfLines={1}>
          {note}
        </Text>
      </View>
      <View style={tw`items-center justify-center flex gap-1 flex-row`}>
        <CheckCheck size={12} color={BankColorsThemes.white} />
        <Text style={[tw`text-xs font-normal text-white`]}>{date}</Text>
      </View>
    </Pressable>
  )
}
export default memo(ContactRow)
