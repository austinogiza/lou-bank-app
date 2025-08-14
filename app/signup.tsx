import { Pressable, StyleSheet, Text, View } from "react-native"
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
import AppLogo from "@/src/components/images/app-logo"
import { zodResolver } from "@hookform/resolvers/zod"
import { SignupSchema } from "@/src/types/schema"
import AuthHeader from "@/src/components/auth/auth-header"

const Signup = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev)
  }
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    watch,
    setValue,
  } = useForm<SignupFormDataProps>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  })

  // Submit form handler
  const onSubmit: SubmitHandler<SignupFormDataProps> = (data) => {}

  return (
    <AuthWrapper>
      <AuthHeader
        title="Create New Account"
        subtitle="Enter your details to create new account"
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
            <InputLabel title="Password" />
            <View style={tw`relative w-full`}>
              <View style={tw`absolute right-4 top-3 z-10`}>
                <Pressable onPress={togglePasswordVisibility}>
                  {showPassword ? (
                    <>
                      <Eye
                        color={BankColorsThemes.black}
                        strokeWidth={2}
                        size={20}
                      />
                    </>
                  ) : (
                    <>
                      <EyeOff
                        color={BankColorsThemes.black}
                        strokeWidth={2}
                        size={20}
                      />
                    </>
                  )}
                </Pressable>
              </View>
              <MainInput
                control={control}
                placeholder="Password"
                name="password"
                secureTextEntry={showPassword ? false : true}
                value={watch("password")}
                onChangeText={(text) => setValue("password", text)}
                error={errors.password?.message as string}
              />
            </View>
          </View>
          <View style={tw`w-full`}>
            <InputLabel title="Confirm Password" />
            <View style={tw`relative w-full`}>
              <View style={tw`absolute right-4 top-3 z-10`}>
                <Pressable onPress={toggleConfirmPasswordVisibility}>
                  {showPassword ? (
                    <>
                      <Eye
                        color={BankColorsThemes.black}
                        strokeWidth={2}
                        size={20}
                      />
                    </>
                  ) : (
                    <>
                      <EyeOff
                        color={BankColorsThemes.black}
                        strokeWidth={2}
                        size={20}
                      />
                    </>
                  )}
                </Pressable>
              </View>
              <MainInput
                control={control}
                placeholder="Confirm Password"
                name="confirmPassword"
                secureTextEntry={showConfirmPassword ? false : true}
                value={watch("confirmPassword")}
                onChangeText={(text) => setValue("confirmPassword", text)}
                error={errors.confirmPassword?.message as string}
              />
            </View>
          </View>
        </View>
        <View style={styles.submitButtonContainer}>
          <MainLoginButton
            onPress={handleSubmit(onSubmit)}
            title="Create your account"
            primary
          />
        </View>
      </View>
    </AuthWrapper>
  )
}

export default Signup

const styles = StyleSheet.create({
  formCover: {
    width: "100%",
    padding: 12,
    marginVertical: 24,
  },
  submitButtonContainer: {
    marginTop: 32,
    width: "100%",
    marginBottom: 24,
  },
  submitButton: {
    backgroundColor: "#4CAF50",
    // paddingVertical: 12,
    // paddingHorizontal: 40,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    borderRadius: 5,
  },
})
