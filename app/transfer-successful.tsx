import { StyleSheet, Text, View } from "react-native"
import React from "react"
import MainLoginButton from "@/src/style/button-styles/main-login"
import ImageContainer from "@/src/components/images/image-container"
import { TransferSuccessImage } from "@/src/utils/image-export"
import { BankColorsThemes } from "@/src/style/color"
import ScreensWrapper from "@/src/components/wrapper/screens-wrapper"
import { TextFontFamily } from "@/src/style/text-styles/text-font-family"
import { TextFontSize } from "@/src/style/text-styles/text-font-size"

const TransferSuccessful = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.textCover}>
          <ImageContainer source={{ uri: TransferSuccessImage }} />
          <View style={styles.textCover}>
            <Text
              style={[
                styles.textWrapper,
                {
                  fontFamily: TextFontFamily.NeuePlakExtraBlack,
                  fontSize: TextFontSize["text-4xl"],
                },
              ]}
            >
              Congratulations!
            </Text>
            <Text
              style={[
                styles.textWrapper,
                {
                  fontFamily: TextFontFamily.GeistRegular,
                  fontSize: TextFontSize["text-base"],
                },
              ]}
            >
              Your Money Has been Sent Successfully To Ellizabeth Olsen
            </Text>
          </View>
        </View>
        <View style={styles.buttonCover}>
          <MainLoginButton title="Back To Home" />
        </View>
      </View>
    </>
  )
}

export default TransferSuccessful

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: BankColorsThemes.secondary[500],
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  textCover: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
    gap: 8,
    paddingHorizontal: 32,
  },
  textWrapper: {
    textAlign: "center",
    width: "100%",
    color: BankColorsThemes.white,
  },
  buttonCover: {
    height: 50,
    width: "100%",
    marginTop: 32,
  },
})
