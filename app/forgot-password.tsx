import { Pressable, StyleSheet, Text, View } from "react-native"
import React, { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import AuthWrapper from "@/src/components/wrapper/auth-wrapper"
import tw from "twrnc"
import MainInput from "@/src/style/input/main-input"
import { zodResolver } from "@hookform/resolvers/zod"
import MainLoginButton from "@/src/style/button-styles/main-login"
import InputLabel from "@/src/style/input/input-label"
import { Eye, EyeOff } from "lucide-react-native"
import { BankColorsThemes } from "@/src/style/color"
import { LoginFormDataProps } from "@/src/types/signup-types"
import { LoginSchema } from "@/src/types/schema"
import AuthHeader from "@/src/components/auth/auth-header"
import SocialButtons from "@/src/style/button-styles/social-buttons"
import { AppleLogo, GoogleLogo } from "@/src/utils/image-export"

const ForgotPassword = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }
  const {
    handleSubmit,
    control,
    register,
    formState: { errors, isSubmitting },
    watch,
    setValue,
  } = useForm<LoginFormDataProps>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  })

  // Submit form handler
  const onSubmit: SubmitHandler<LoginFormDataProps> = (data) => {}

  return (
    <>
      <AuthWrapper>
        <AuthHeader
          style={tw`mt-6`}
          title="Forgot your Password?"
          subtitle="We'll send you an email with instructions to
reset your password."
        />
        <View
          style={[
            styles.formCover,
            tw`text-2xl text-white mt-3 items-center w-full flex-1 justify-between text-center font-medium`,
          ]}
        >
          <View style={tw`w-full`}>
            <View style={tw`w-full`}>
              <InputLabel title="Email" />
              <MainInput
                control={control}
                placeholder="Email"
                name="email"
                value={watch("email")}
                onChangeText={(text) => setValue("email", text)}
                error={errors.email?.message as string}
              />
            </View>

            <View style={tw`w-full`}>
              <View>
                <View style={styles.submitButtonContainer}>
                  <MainLoginButton
                    onPress={handleSubmit(onSubmit)}
                    title="Send email"
                    primary
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </AuthWrapper>
    </>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
  formContainer: {
    width: "100%",
    marginBottom: 24,
  },
  formCover: {
    width: "100%",

    marginVertical: 24,
  },
  submitButtonContainer: {
    marginTop: 32,
    width: "100%",
    marginBottom: 24,
    height: 56,
  },
  submitButton: {
    backgroundColor: "#4CAF50",

    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    borderRadius: 5,
  },
  joinTitle: {
    color: BankColorsThemes.neutral[400],
    fontSize: 16,
    textAlign: "center",
    fontWeight: "500",
  },
  joinAction: {
    color: BankColorsThemes.white,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "500",
  },
})
