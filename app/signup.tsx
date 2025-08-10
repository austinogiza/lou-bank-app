import { Pressable, StyleSheet, Text, View } from "react-native"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import AuthWrapper from "@/src/components/wrapper/auth-wrapper"
import tw from "twrnc"
import MainInput from "@/src/style/input/main-input"
import { SignupFormDataProps } from "@/src/types/signup-types"
import MainLoginButton from "@/src/style/button-styles/main-login"
import InputLabel from "@/src/style/input/input-label"
import { Eye, EyeClosed } from "lucide-react-native"

const Signup = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    setValue,
  } = useForm<SignupFormDataProps>({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // Validation function
  const validateForm = () => {
    const newErrors: any = {}
    if (!formData.firstName) {
      newErrors.firstName = "First name is required."
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last name is required."
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Submit form handler
  const onSubmit = () => {
    if (validateForm()) {
      console.log("Form submitted", formData)
    }
  }

  return (
    <AuthWrapper>
      <View>
        <Text
          style={tw`text-4xl mt-10 w-full text-white flex items-center justify-center text-center font-medium`}
        >
          Let's get started
        </Text>
      </View>
      <View
        style={[
          styles.formCover,
          tw`text-2xl text-white mt-20 items-center w-full flex-1 justify-between text-center font-medium`,
        ]}
      >
        <View style={tw`w-full`}>
          <View style={tw`w-full`}>
            <InputLabel title="Email" />
            <MainInput
              placeholder="Email"
              name="email"
              value={watch("email")}
              onChangeText={(text) => setValue("email", text)}
              error={errors.email?.message as string}
            />
          </View>

          <View style={tw`w-full`}>
            <InputLabel title="Password" />
            <View>
              <View>
                <Pressable onPress={togglePasswordVisibility}>
                  <Eye color="#fff" strokeWidth={2} size={20} />
                  <EyeClosed color="#fff" strokeWidth={2} size={20} />
                </Pressable>
              </View>
              <MainInput
                placeholder="Password"
                name="password"
                secureTextEntry
                value={watch("password")}
                onChangeText={(text) => setValue("password", text)}
                error={errors.password?.message as string}
              />
            </View>
            <View style={tw`w-full items-end justify-end`}>
              <Pressable>
                <Text style={tw`w-full text-white items-end justify-end`}>
                  Forgot password?
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.submitButtonContainer}>
          <MainLoginButton onPress={onSubmit} title="Login" primary />
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
    marginVertical: 20,
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
