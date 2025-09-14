import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native"
import React from "react"
import InputLabel from "@/src/style/input/input-label"
import MainInput from "@/src/style/input/main-input"
import { SubmitHandler, useForm } from "react-hook-form"
import { AddDataProps } from "@/src/types/signup-types"
import tw from "twrnc"
import { SafeAreaView } from "react-native-safe-area-context"
import AuthWrapper from "@/src/components/wrapper/auth-wrapper"
import { BankColorsThemes } from "@/src/style/color"
import { TextFontSize } from "@/src/style/text-styles/text-font-size"
import MainLoginButton from "@/src/style/button-styles/main-login"
import { zodResolver } from "@hookform/resolvers/zod"
import { AddInfoSchema } from "@/src/types/schema"

import { AddUserInfoURL } from "@/src/api/constant"
import { authAxios } from "@/src/api/queries/auth-axios"
import { useRouter } from "expo-router"
import { toast } from "sonner-native"

const ProfileSetup = () => {
  const {
    setValue,
    control,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AddDataProps>({
    resolver: zodResolver(AddInfoSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
    },
    mode: "onBlur",
    reValidateMode: "onBlur",
  })
  const router = useRouter()
  const onSubmit: SubmitHandler<AddDataProps> = (data) => {
    console.log(data)
    const first_name = data.first_name
    const last_name = data.last_name
    authAxios
      .post(AddUserInfoURL, {
        first_name,
        last_name,
      })
      .then((response) => {
        toast.success("Profile setup completed!")
        console.log("✅ API response:", response.data)
        router.navigate("/(tabs)")
      })
      .catch((error) => {
        console.log("❌ API error:", error?.response?.data || error.message)
      })
  }
  return (
    <>
      <AuthWrapper>
        <KeyboardAvoidingView
          style={tw`flex-1 bg-black w-full`}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <SafeAreaView style={[styles.container]}>
            <View style={tw`w-full mt-10`}>
              <View style={tw`w-full`}>
                <Text style={[styles.setupTitle]}>
                  Tell us more about yourself
                </Text>
                <Text style={styles.setupDescription}>
                  Just couple of steps and your good to go
                </Text>
              </View>
              <View style={[tw`w-full mt-20`]}>
                <View style={[tw`w-full`]}>
                  <View style={tw`w-full`}>
                    <InputLabel title="First Name" />
                    <MainInput
                      control={control}
                      placeholder="Enter your First Name"
                      name="first_name"
                      value={watch("first_name")}
                      onChangeText={(text) => setValue("first_name", text)}
                      error={errors.first_name?.message as string}
                    />
                  </View>
                </View>
                <View style={[tw`w-full`]}>
                  <View style={[tw`w-full`]}>
                    <InputLabel title="Last Name" />
                    <MainInput
                      control={control}
                      placeholder="Enter your Last Name"
                      name="last_name"
                      value={watch("last_name")}
                      onChangeText={(text) => setValue("last_name", text)}
                      error={errors.last_name?.message as string}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.submitButtonContainer}>
              <MainLoginButton
                loading={isSubmitting}
                onPress={handleSubmit(onSubmit)}
                title="Continue"
                primary
              />
            </View>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </AuthWrapper>
    </>
  )
}

export default ProfileSetup
const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 4,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-start",
    // backgroundColor: BankColorsThemes.destructive[600],
  },
  setupTitle: {
    width: 320,
    fontSize: TextFontSize["text-5xl"],
    color: BankColorsThemes.white,
  },
  setupDescription: {
    fontSize: TextFontSize["text-base"],
    color: BankColorsThemes.neutral[400],
  },
  submitButtonContainer: {
    marginTop: 32,
    width: "100%",
    marginBottom: 24,
    height: 56,
  },
})
