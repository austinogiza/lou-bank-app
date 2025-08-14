import { StyleSheet, Text, View } from "react-native"
import React, { FC } from "react"
import { Image, ImageSource } from "expo-image"
import { blurhash } from "@/src/utils/image-blur"
interface ImageContainerProps {
  source?: string | number | ImageSource
  height?: number
  width?: number
  style?: object
  placeholder?: string
  contentFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
  transition?: number
}
const ImageContainer: FC<ImageContainerProps> = (props) => {
  const {
    source,
    height = 100,
    width = 100,
    style,
    placeholder,
    transition,
    contentFit,
  } = props

  return (
    <View>
      <Image
        source={source}
        style={[styles.imageContainer, { width: width, height: height }, style]}
        placeholder={blurhash || placeholder}
        contentFit={contentFit ?? "cover"}
        transition={transition ?? 100}
      />
    </View>
  )
}

export default ImageContainer

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: "auto",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
})
