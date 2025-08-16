import ImageContainer from "@/src/components/images/image-container"
import MainLoginButton from "@/src/style/button-styles/main-login"
import { BankColorsThemes } from "@/src/style/color"
import { useRouter } from "expo-router"
import tw from "twrnc"
import React from "react"
import { Dimensions, StyleSheet, Text, View } from "react-native"
import bankImage from "@/src/assets/images/bank_earth.png"
import { TextFontFamily } from "@/src/style/text-styles/text-font-family"
const { width: W, height: H } = Dimensions.get("window")

export default function Onboarding() {
  const router = useRouter()
  const goToLogin = () => {
    router.navigate("/login")
  }
  const goToSignUp = () => {
    router.navigate("/signup")
  }
  return (
    <View style={styles.container}>
      <View style={styles.titleWrap}>
        <Text style={styles.titleLine}>Trusted By</Text>
        <Text style={[styles.titleLine, styles.titleLineTight]}>
          Millions Users
        </Text>
      </View>

      <Text style={styles.subtitle}>
        You can access our app from the anywhere in
        <Text style={{ opacity: 0.92 }}>the world</Text> and make any type of
        transection without any fee or charges
      </Text>

      <View style={styles.ctaRow}>
        <MainLoginButton onPress={goToSignUp} title="Sign Up" />
        <MainLoginButton primary onPress={goToLogin} title="Log In" />
      </View>

      <ImageContainer
        source={bankImage}
        style={tw`w-full h-full`}
        contentFit="cover"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BankColorsThemes.black,
  },

  brand: {
    alignSelf: "center",
    marginTop: 6,

    fontSize: 24,
    fontWeight: "800",
    letterSpacing: 0.5,
  },

  titleWrap: {
    marginTop: H * 0.035,
    alignItems: "center",
  },
  titleLine: {
    color: BankColorsThemes.white,
    fontSize: 38,
    lineHeight: 38,
    fontWeight: "800",
    textAlign: "center",
    includeFontPadding: false,
    fontFamily: TextFontFamily.NeuePlakExtraBlack,
  },
  titleLineTight: { marginTop: 6 },

  subtitle: {
    color: BankColorsThemes.neutral[200],
    textAlign: "center",
    paddingHorizontal: 28,
    marginTop: 4,
    fontSize: 16,
    lineHeight: 24,
  },

  pager: {
    height: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },

  ctaRow: {
    paddingHorizontal: 16,
    marginTop: 24,
    flexDirection: "row",
    gap: 16,
    justifyContent: "space-between",
    marginBottom: 24,
  },

  btnFillText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "800",
  },

  globeWrap: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    // taller than half the screen to match the big globe visual
    height: H * 0.65,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    overflow: "hidden",
  },
  globeImg: {
    flex: 1,
    width: W,
    justifyContent: "flex-start",
  },

  // --- pins ---
  ratingPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 8,
    height: 22,
    borderRadius: 999,

    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
    marginBottom: 8,
  },
  starDot: {
    width: 8,
    height: 8,
    borderRadius: 999,
  },
  ratingText: {
    color: "#EAEAEA",
    fontSize: 12,
    fontWeight: "700",
  },
  pinWrap: {
    borderWidth: 3,
    borderColor: "#FFFFFF",
    backgroundColor: "#0D0F14",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  pinTail: {
    position: "absolute",
    bottom: -6,
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 14,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#FFFFFF",
    transform: [{ rotate: "180deg" }],
  },
})
