import { StyleSheet, Text, View } from "react-native"
import React from "react"

import TransactionHistory from "./(tabs)/transaction-history"
import AccountBalance from "./(tabs)/account-balance"

const LouBank = () => {
  return (
    <>
      {/* <AccountBalance /> */}
      <TransactionHistory />
    </>
  )
}

export default LouBank

const styles = StyleSheet.create({})
