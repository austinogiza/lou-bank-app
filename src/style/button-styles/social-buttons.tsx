// style/button-styles/social-buttons.tsx
import React, { FC } from "react"
import { Pressable, StyleSheet, Text } from "react-native"
import { BankColorsThemes } from "../color"
import ImageContainer from "@/src/components/images/image-container"
import { ImageSource } from "expo-image"

interface SocialButtonsProps {
  title: string
  onPress?: () => void
  isGoogle?: boolean
  socialLogo?: any
}

const SocialButtons: FC<SocialButtonsProps> = (props) => {
  const { title, onPress, isGoogle, socialLogo } = props
  return (
    <Pressable
      style={[
        styles.baseButton,
        isGoogle ? styles.googleButton : styles.secondaryButton,
      ]}
      onPress={onPress}
    >
      {socialLogo}
      <Text
        style={[
          styles.buttonText,
          isGoogle ? styles.googleText : styles.secondaryText,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  )
}

export default SocialButtons

const styles = StyleSheet.create({
  baseButton: {
    width: "100%",
    height: 56,
    borderRadius: 99,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
    flexDirection: "row",
    gap: 8,
  },
  googleButton: {
    backgroundColor: BankColorsThemes.black,
    borderWidth: 1,
    borderColor: BankColorsThemes.neutral[200],
  },
  googleText: {
    color: BankColorsThemes.white,
    fontWeight: "600",
  },
  secondaryButton: {
    backgroundColor: BankColorsThemes.socialButtonDark,
  },
  secondaryText: {
    color: BankColorsThemes.white,
    fontWeight: "600",
  },
  buttonText: {
    fontSize: 16,
  },
})
