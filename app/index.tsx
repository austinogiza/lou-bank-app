import { StyleSheet, Text, View } from "react-native"
import React from "react"

import TransactionHistory from "./(tabs)/transaction-history"
import AccountBalance from "./(tabs)/account-balance"
import HomeScreen from "./(tabs)"

const LouBank = () => {
  return (
    <>
      {/* <AccountBalance /> */}
      <HomeScreen />
    </>
  )
}

export default LouBank

const styles = StyleSheet.create({})
