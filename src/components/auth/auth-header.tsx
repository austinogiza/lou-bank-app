import { StyleSheet, Text, View } from "react-native"
import React, { FC } from "react"
import { BankColorsThemes } from "@/src/style/color"
interface AuthHeaderProps {
  title?: string
  subtitle?: string

  style?: any
}
const AuthHeader: FC<AuthHeaderProps> = (props) => {
  const { title, subtitle, style } = props
  return (
    <View style={style}>
      <Text style={styles.authTitle}>{title}</Text>
      <Text style={styles.authSubtitle}>{subtitle}</Text>
    </View>
  )
}

export default AuthHeader

const styles = StyleSheet.create({
  container: {},
  authTitle: {
    fontSize: 26,
    color: BankColorsThemes.white,
    textAlign: "left",
    fontWeight: "600",
    marginBottom: 8,
  },
  authSubtitle: {
    fontSize: 14,
    color: BankColorsThemes.neutral[400],
    textAlign: "left",
    marginBottom: 16,
  },
})
