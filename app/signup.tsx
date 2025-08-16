import { ScrollView, Pressable, StyleSheet, Text, View } from "react-native"
import React, { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import AuthWrapper from "@/src/components/wrapper/auth-wrapper"
import tw from "twrnc"
import MainInput from "@/src/style/input/main-input"
import { SignupFormDataProps } from "@/src/types/signup-types"
import MainLoginButton from "@/src/style/button-styles/main-login"
import InputLabel from "@/src/style/input/input-label"
import { Eye, EyeOff } from "lucide-react-native"
import { BankColorsThemes } from "@/src/style/color"
import { zodResolver } from "@hookform/resolvers/zod"
import { SignupSchema } from "@/src/types/schema"
import AuthHeader from "@/src/components/auth/auth-header"
import SocialButtons from "@/src/style/button-styles/social-buttons"
import { AppleLogo, GoogleLogo } from "@/src/utils/image-export"

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm<SignupFormDataProps>({
    resolver: zodResolver(SignupSchema),
    defaultValues: { email: "", password: "", confirmPassword: "" },
    mode: "onChange",
  })

  const onSubmit: SubmitHandler<SignupFormDataProps> = (data) => {
    console.log("form submitted:", data)
  }

  return (
    <AuthWrapper>
      <View style={tw`w-full justify-between flex-1`}>
        <View style={tw`w-full`}>
          <AuthHeader
            style={tw`mt-6`}
            title="Create New Account"
            subtitle="Enter your details to create new account"
          />

          <View style={styles.formCover}>
            {/* Email */}
            <InputLabel title="Email" />
            <MainInput
              control={control}
              placeholder="Email"
              name="email"
              value={watch("email")}
              onChangeText={(text) => setValue("email", text)}
              error={errors.email?.message as string}
            />

            {/* Password */}
            <InputLabel title="Password" />
            <View style={tw`relative`}>
              <View style={tw`absolute right-4 top-3 z-10`}>
                <Pressable onPress={() => setShowPassword((p) => !p)}>
                  {showPassword ? (
                    <Eye color={BankColorsThemes.black} size={20} />
                  ) : (
                    <EyeOff color={BankColorsThemes.black} size={20} />
                  )}
                </Pressable>
              </View>
              <MainInput
                control={control}
                placeholder="Password"
                name="password"
                secureTextEntry={!showPassword}
                value={watch("password")}
                onChangeText={(text) => setValue("password", text)}
                error={errors.password?.message as string}
              />
            </View>

            {/* Confirm Password */}
            <InputLabel title="Confirm Password" />
            <View style={tw`relative`}>
              <View style={tw`absolute right-4 top-3 z-10`}>
                <Pressable onPress={() => setShowConfirmPassword((p) => !p)}>
                  {showConfirmPassword ? (
                    <Eye color={BankColorsThemes.black} size={20} />
                  ) : (
                    <EyeOff color={BankColorsThemes.black} size={20} />
                  )}
                </Pressable>
              </View>
              <MainInput
                control={control}
                placeholder="Confirm Password"
                name="confirmPassword"
                secureTextEntry={!showConfirmPassword}
                value={watch("confirmPassword")}
                onChangeText={(text) => setValue("confirmPassword", text)}
                error={errors.confirmPassword?.message as string}
              />
            </View>

            {/* Submit Button */}
            <View style={styles.submitButtonContainer}>
              <MainLoginButton
                onPress={handleSubmit(onSubmit)}
                title="Create your account"
                primary
              />
            </View>
          </View>
        </View>

        <View style={styles.formContainer}>
          <SocialButtons
            isGoogle
            title="Sign up with Google"
            socialLogo={<GoogleLogo />}
          />
          <SocialButtons
            title="Sign up with Apple"
            socialLogo={<AppleLogo />}
          />
        </View>
      </View>
    </AuthWrapper>
  )
}

export default Signup

const styles = StyleSheet.create({
  formContainer: {
    width: "100%",
    marginBottom: 24,
  },
  formCover: {
    width: "100%",
    marginTop: 20,
  },
  submitButtonContainer: {
    marginTop: 32,
    marginBottom: 24,
    height: 56, // ✅ ensures button has space
    width: "100%",
  },
})
