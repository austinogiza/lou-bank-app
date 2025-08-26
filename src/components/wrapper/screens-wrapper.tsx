import { SafeAreaView, StyleSheet, View } from "react-native"
import React, { FC } from "react"
import { BankColorsThemes } from "@/src/style/color"
import tw from "twrnc"
interface AuthWrapperProps {
  children?: React.ReactNode
}
const ScreensWrapper: FC<AuthWrapperProps> = (props) => {
  const { children } = props
  return (
    <>
      <SafeAreaView
        style={[
          tw`flex-1 items-center justify-center w-full`,
          styles.container,
        ]}
      >
        <View>{children}</View>
      </SafeAreaView>
    </>
  )
}

export default ScreensWrapper

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "transparent",
  },
})
