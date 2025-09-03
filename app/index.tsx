import React from "react"
import { StyleSheet } from "react-native"

import { UpdatedAppSettingsScreen } from "./(tabs)/others"
import AuthOnboarding from "@/src/components/auth/auth-home"

const LouBank = () => {
  return (
    <>
      {/* <TransactionHistory /> */}
      {/* <HomeScreen /> */}
      {/* <Account /> */}
      {/* <LegalScreen /> */}
      {/* <Support /> */}
      {/* <AppSettingsScreen /> */}
      {/* <ChangePasswordScreen /> */}
      {/* EmailAddressScreen,
      TwoStepsVerificationScreen,
      SupportScreen,
      CloseAccountModal,
      UpdatedAppSettingsScreen */}
      {/* <EmailAddressScreen /> */}
      {/* <CloseAccountModal onDelete={() => {
        console.log('deleting')
      }} visible={true} onClose={() => {
        console.log('closing')
      }} /> */}
      <UpdatedAppSettingsScreen />
      <AuthOnboarding />
    </>
  )
}

export default LouBank

const styles = StyleSheet.create({})
