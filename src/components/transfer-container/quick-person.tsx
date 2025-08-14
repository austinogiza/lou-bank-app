import { FC, memo } from "react"
import { Pressable, Text, View } from "react-native"
import tw from "twrnc"
import ImageContainer from "../images/image-container"
interface QuickPersonProps {
  name: string
  avatar: string
  isAdd?: boolean
  onPress: () => void
}
const QuickPerson: FC<QuickPersonProps> = (props) => {
  const { name, avatar, isAdd, onPress } = props
  return (
    <Pressable onPress={onPress} style={tw`items-center mr-6`}>
      <View
        style={[
          tw`h-14 w-14 rounded-full items-center justify-center`,
          { backgroundColor: isAdd ? "#111827" : "#fff" },
        ]}
      >
        {isAdd ? (
          <></>
        ) : (
          <ImageContainer
            source={{ uri: avatar }}
            style={tw`h-14 w-14 rounded-full`}
          />
        )}
      </View>
      <Text
        numberOfLines={1}
        style={[
          tw`mt-2 text-xs max-w-16 text-center`,
          { color: isAdd ? "#0f172a" : "#0f172a" },
        ]}
      >
        {name}
      </Text>
    </Pressable>
  )
}
export default memo(QuickPerson)
