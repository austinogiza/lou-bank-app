import { StyleSheet, Text, View } from "react-native"
import React, { FC } from "react"
import { BankColorsThemes } from "@/src/style/color"
interface AuthWrapperProps {
  children?: React.ReactNode
}
const AuthWrapper: FC<AuthWrapperProps> = (props) => {
  const { children } = props
  return (
    <>
      <View style={styles.container}>{children}</View>
    </>
  )
}

export default AuthWrapper

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: BankColorsThemes.black,
    padding: 8,
  },
})
