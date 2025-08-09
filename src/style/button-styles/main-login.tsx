import { Pressable, StyleSheet, Text, View } from "react-native"
import React, { FC } from "react"
import { BankColorsThemes } from "../color"
import { LinearGradient } from "expo-linear-gradient"

interface MainLoginButtonProps {
  title?: string
  onPress?: () => void
  primary?: boolean
}

const MainLoginButton: FC<MainLoginButtonProps> = (props) => {
  const { title, onPress, primary } = props

  return (
    <LinearGradient
      // Fixed: Remove parentheses and use proper array syntax
      colors={
        primary
          ? [BankColorsThemes.brandButtonLight, BankColorsThemes.brandButtonDark]
          : [BankColorsThemes.buttonDark, BankColorsThemes.buttonColor] // Fixed: was incomplete "BankColorsThemes"
      }
      style={styles.gradientContainer}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Pressable
        style={styles.pressableButton}
        accessibilityRole="button"
        accessibilityLabel={title}
        onPress={onPress}
      >
        <Text style={[primary ? styles.buttonTextDark : styles.buttonTextWhite,styles.buttonText]}>
          {title}
        </Text>
      </Pressable>
    </LinearGradient>
  )
}

export default MainLoginButton

const styles = StyleSheet.create({
  gradientContainer: {
    borderRadius: 99,
    height: 48,
    width: "100%",
  },
  pressableButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 99,

  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "400",
  },
  buttonTextDark: {
    color: BankColorsThemes.black,

  },
  buttonTextWhite: {
    color: BankColorsThemes.white,

  },
})
