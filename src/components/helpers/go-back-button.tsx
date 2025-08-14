import { Pressable, StyleSheet, Text, View } from "react-native"
import React, { FC } from "react"
import { BankColorsThemes } from "@/src/style/color"
import { useRouter } from "expo-router"
import { ArrowLeft } from "lucide-react-native"
const GoBackButton = () => {
  const router = useRouter()
  const goBack = () => {
    if (router.canGoBack()) {
      router.back()
    } else {
      router.navigate("/")
    }
  }
  return (
    <>
      <Pressable onPress={goBack} style={styles.backWrap}>
        <ArrowLeft width={18} height={18} color={BankColorsThemes.white} />
      </Pressable>
    </>
  )
}

export default GoBackButton

const styles = StyleSheet.create({
  backWrap: {
    padding: 6,
    borderRadius: 50,
    backgroundColor: BankColorsThemes.black,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: BankColorsThemes.white,
  },
  text: {
    color: BankColorsThemes.white,
    fontSize: 16,
  },
})
