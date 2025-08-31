import { StyleSheet, Text, View } from "react-native"
import React from "react"

import TransactionHistory from "./(tabs)/transaction-history"
import AccountBalance from "./(tabs)/account-balance"
import HomeScreen from "./(tabs)"
import Account from "./(tabs)/account"
import LegalScreen from "./(tabs)/legal"
import Support from "./(tabs)/support"
import AppSettingsScreen from "./(tabs)/app-settings"
import { ChangePasswordScreen, CloseAccountModal, EmailAddressScreen, SupportScreen, TwoStepsVerificationScreen } from "./(tabs)/others"

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
      <TwoStepsVerificationScreen />
    </>
  )
}

export default LouBank

const styles = StyleSheet.create({})
