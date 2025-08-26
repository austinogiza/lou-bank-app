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
    <View style={styles.container}>
      {/* Main content area */}
      <View style={styles.contentArea}>
        {/* Image */}
        <ImageContainer source={{ uri: TransferSuccessImage }} />

        {/* Text content */}
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.titleText,
              {
                fontFamily: TextFontFamily.NeuePlakExtraBlack,
                fontSize: TextFontSize["text-4xl"],
              },
            ]}
          >
            Congratulations!
          </Text>

          <Text
            numberOfLines={2}
            adjustsFontSizeToFit={true}
            minimumFontScale={0.7}
            style={[
              styles.subtitleText,
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

      {/* Button at bottom */}
      <View style={styles.buttonContainer}>
        <MainLoginButton title="Back To Home" />
      </View>
    </View>
  )
}

export default TransferSuccessful

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: BankColorsThemes.secondary[500],
    paddingVertical: 32,
    paddingHorizontal: 20,
  },
  contentArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 16, // Additional padding for text
  },
  titleText: {
    textAlign: "center",
    color: BankColorsThemes.white,
  },
  subtitleText: {
    textAlign: "center",
    color: BankColorsThemes.white,
    lineHeight: 24, // Add line height for better text spacing
  },
  buttonContainer: {
    width: "100%",
    height: 56,
    marginTop: 24,
  },
})
