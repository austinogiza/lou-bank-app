import { StyleSheet, Text, View } from "react-native"
import React from "react"
import DownloadTransactionStatements from "./download-statements"
import TransactionDetails from "./transaction-details"
import CustomDateScreen from "./custom-range"
import AddMoneyScreen from "./add-money"
import SendMoneyScreen from "./send-money"

const LouBank = () => {
  return (
    <>
      <SendMoneyScreen />
    </>
  )
}

export default LouBank

const styles = StyleSheet.create({})
