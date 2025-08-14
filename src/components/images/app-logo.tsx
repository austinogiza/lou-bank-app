import { StyleSheet, View } from "react-native"

import React from "react"
import LouLogo from "@/src/assets/images/lou-logo.png"
import { blurhash } from "@/src/utils/image-blur"
import ImageContainer from "./image-container"

const AppLogo = () => {
  return (
    <View style={styles.onboardingContainer}>
      <ImageContainer
        source={LouLogo}
        style={{ width: 120, height: 40 }}
        placeholder={blurhash}
        contentFit="cover"
        transition={1000}
      />
    </View>
  )
}

export default AppLogo

const styles = StyleSheet.create({
  onboardingContainer: {
    marginBottom: 32,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
})
