import { Pressable, StyleSheet, Text, View } from "react-native"
import React, { FC } from "react"
import { BankColorsThemes } from "../color"
import { LinearGradient } from "expo-linear-gradient"
import { Link } from "expo-router"

interface MainLoginButtonProps {
  title?: string
  onPress?: () => void
  primary?: boolean
  link?: string
}

const MainLoginButton: FC<MainLoginButtonProps> = (props) => {
  const { title, onPress, primary, link } = props

  return (
   <Pressable
      style={[
        styles.pressableButton,
        primary ? styles.primaryButton : styles.secondaryButton,
      ]}
        accessibilityRole="button"
        accessibilityLabel={title}
        onPress={onPress}
      >
        <Text style={[primary ? styles.buttonTextDark : styles.buttonTextWhite, styles.buttonText]}>
          {title}
        </Text>
      </Pressable>
  )
}

export default MainLoginButton

const styles = StyleSheet.create({

  pressableButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 99,
    paddingVertical: 12,
    width: "100%",
    height: 56,

  },
  primaryButton: {
    backgroundColor: BankColorsThemes.primary[500],
    color: BankColorsThemes.white,

  },
  secondaryButton: {
    backgroundColor: BankColorsThemes.black,
     borderColor: BankColorsThemes.primary[500],
    borderWidth: 1,
      color: BankColorsThemes.primary[500],
    shadowColor: BankColorsThemes.primary[500],
    shadowOffset: {
      width: 0,
      height: 2,
    }
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  buttonTextDark: {
    color: BankColorsThemes.white,

  },
  buttonTextWhite: {
    color: BankColorsThemes.primary[500],

  },
})
