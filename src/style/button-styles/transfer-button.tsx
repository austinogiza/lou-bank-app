import { Pressable, StyleSheet, Text, View } from "react-native"
import React, { FC } from "react"
import { BankColorsThemes } from "../color"
import { LinearGradient } from "expo-linear-gradient"
import { Link } from "expo-router"

interface TransferButtonProps {
  title?: string
  onPress?: () => void
  primary?: boolean
  link?: string
  size?: "small" | "medium" | "large" | "extra-large"
  outline?: boolean
  destructive?: boolean
  actionType?: "receive" | "send"
}

const TransferButton: FC<TransferButtonProps> = (props) => {
  const {
    title,
    onPress,
    primary,
    link,
    outline,
    destructive,
    actionType,
    size,
  } = props

  return (
    <Pressable
      style={[
        {
          height:
            size === "small"
              ? 40
              : size === "medium"
              ? 48
              : size === "large"
              ? 56
              : 64,
        },
        styles.pressableButton,
        !outline
          ? primary
            ? styles.primaryButton
            : destructive
            ? styles.destructiveButton
            : styles.secondaryButton
          : actionType === "receive"
          ? styles.receiveButton
          : actionType === "send" && styles.sendButton,
      ]}
      accessibilityRole="button"
      accessibilityLabel={title}
      onPress={onPress}
    >
      <Text
        style={[
          primary ? styles.buttonTextDark : styles.buttonTextWhite,
          styles.buttonText,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  )
}

export default TransferButton

const styles = StyleSheet.create({
  pressableButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 99,
    paddingVertical: 12,
    width: "100%",
  },
  primaryButton: {
    backgroundColor: BankColorsThemes.primary[500],
    color: BankColorsThemes.white,
  },
  secondaryButton: {
    backgroundColor: BankColorsThemes.white,

    color: BankColorsThemes.secondary[500],
  },
  destructiveButton: {
    backgroundColor: BankColorsThemes.destructive[500],
    color: BankColorsThemes.white,
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
  receiveButton: {
    backgroundColor: BankColorsThemes.black,
    borderWidth: 1,
    borderColor: BankColorsThemes.accent[600],
    color: BankColorsThemes.white,
  },
  sendButton: {
    backgroundColor: BankColorsThemes.black,
    borderWidth: 1,
    borderColor: BankColorsThemes.tertiary[500],
    color: BankColorsThemes.white,
  },
})
