import { StyleSheet, Text, View } from "react-native"
import React, { FC } from "react"
import { Image } from "expo-image"
import { blurhash } from "@/src/utils/image-blur"
interface ImageContainerProps {
  source?: string | number
  height?: number
  width?: number
  style?: object
}
const ImageContainer: FC<ImageContainerProps> = (props) => {
  const { source, height = 100, width = 100, style } = props

  return (
    <View>
      <Image
        source={source}
        style={[styles.imageContainer, { width: width, height: height }]}
        placeholder={blurhash}
        contentFit="cover"
        transition={1000}
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
