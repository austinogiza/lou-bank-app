import { StyleSheet, View } from "react-native"
import { Image } from "expo-image"
import React from "react"
import LouLogo from "@/src/assets/images/lou-logo.png"
import { blurhash } from "@/src/utils/image-blur"

const HeaderLogo = () => {
  return (
    <View style={styles.onboardingContainer}>
      <Image
        source={LouLogo}
        style={{ width: 80, height: 32 }}
        placeholder={blurhash}
        contentFit="contain"
        transition={1000}
      />
    </View>
  )
}

export default HeaderLogo

const styles = StyleSheet.create({
  onboardingContainer: {
    marginTop: 32,
    marginBottom: 32,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
})
