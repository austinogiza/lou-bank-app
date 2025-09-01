import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native"
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
import { useRouter } from "expo-router"
import { useAppDispatch, useAppSelector } from "@/src/store/hooks"
import { authLogin } from "@/src/store/auth-slice"

const LoginScreen = () => {
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
  const router = useRouter()
  const goToForgotPassword = () => {
    router.push("/forgot-password")
  }
  const goToSignup = () => {
    router.push("/signup")
  }
  const dispatch = useAppDispatch()
  // Submit form handler
  const { loading, error } = useAppSelector((state) => state.auth)
  const onSubmit: SubmitHandler<LoginFormDataProps> = (data) => {
    console.log(data, error)
    dispatch(
      authLogin({
        email: data.email,
        password: data.password,
        navigation: router,
      })
    )
  }

  return (
    <>
      <AuthWrapper>
        <AuthHeader
          style={tw`mt-6`}
          title="Welcome Back!"
          subtitle="Enter your details to log in to your account"
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
              <View style={tw`w-full items-end justify-end`}>
                <Pressable onPress={goToForgotPassword}>
                  <Text style={tw`w-full text-white items-end justify-end`}>
                    Forgot password?
                  </Text>
                </Pressable>
              </View>
              <View>
                <View style={styles.submitButtonContainer}>
                  <MainLoginButton
                    loading={loading}
                    onPress={handleSubmit(onSubmit)}
                    title="Continue"
                    primary
                  />
                </View>

                <View style={tw`w-full items-center justify-center`}>
                  <Pressable onPress={goToSignup}>
                    <Text style={tw`w-full items-center justify-center`}>
                      <Text style={styles.joinTitle}>Don’t have account?</Text>
                      <Text style={styles.joinAction}> Sign Up</Text>
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.formContainer}>
          <SocialButtons
            isGoogle
            title="Log In with Google"
            socialLogo={<GoogleLogo />}
          />
          <SocialButtons title="Log In with Apple" socialLogo={<AppleLogo />} />
        </View>
      </AuthWrapper>
    </>
  )
}

export default LoginScreen

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
