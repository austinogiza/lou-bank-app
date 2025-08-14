import React, { FC } from "react"
import { StyleSheet, View, StyleProp, ViewStyle } from "react-native"
import {
  Image as ExpoImage,
  ImageSource,
  ImageErrorEventData,
} from "expo-image"
import { blurhash } from "@/src/utils/image-blur"

type Fit = "cover" | "contain" | "fill" | "none" | "scale-down"

interface ImageContainerProps {
  source?: ImageSource | string | number
  height?: number
  width?: number
  style?: StyleProp<ViewStyle>
  placeholder?: string
  contentFit?: Fit
  transition?: number
}

const normalizeSource = (src?: ImageContainerProps["source"]) => {
  if (!src) return undefined
  if (typeof src === "string") return { uri: src }
  return src
}

const ImageContainer: FC<ImageContainerProps> = ({
  source,
  height,
  width,
  style,
  placeholder,
  transition = 120,
  contentFit = "cover",
}) => {
  const normalized = normalizeSource(source)

  return (
    <View
      style={[styles.wrap, width && height ? { width, height } : null, style]}
    >
      <ExpoImage
        source={normalized}
        style={StyleSheet.absoluteFill}
        placeholder={placeholder ?? blurhash}
        contentFit={contentFit}
        transition={transition}
      />
    </View>
  )
}

export default ImageContainer

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: "transparent",
    overflow: "hidden",
    borderRadius: 0,
  },
})
