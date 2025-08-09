import { Platform, StyleSheet, Text, View } from "react-native"
import React, { FC } from "react"
import { BankColorsThemes } from "@/src/style/color"
interface AppWrapperProps {
  children?: React.ReactNode
}
const AppWrapper: FC<AppWrapperProps> = (props) => {
  const { children } = props
  return (
    <>
      <View style={styles.container}>
        {typeof children === "string" ? <Text>{children}</Text> : children}
      </View>
    </>
  )
}

export default AppWrapper

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // backgroundColor: BankColorsThemes.white,
    ...Platform.select({
      android: {
        paddingTop: 0,
      },
      ios: {
        // paddingTop: Constant.statusBarHeight,
      },
      default: {
        // other platforms, web for example
      },
    }),
  },
})
