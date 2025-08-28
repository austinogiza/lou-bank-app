import React from "react"
import { Tabs } from "expo-router"
import {
  House,
  Banknote,
  CreditCard,
  Send,
  CircleDollarSign,
} from "lucide-react-native"
import GoBackButton from "@/src/components/helpers/go-back-button"
import TransactionCustom from "@/src/components/transaction/transaction-custom"
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <House width={20} color={color} />,
        }}
      />
      <Tabs.Screen
        name="transaction-history"
        options={{
          title: "Transaction History",
          headerShown: true,
          headerLeft: () => <GoBackButton />,
          headerRight: () => <TransactionCustom />,
        }}
      />
      <Tabs.Screen
        name="my-cards"
        options={{
          title: "My Cards",
          tabBarIcon: ({ color }) => <CreditCard width={20} color={color} />,
        }}
      />
      <Tabs.Screen
        name="transfer-hub-screen"
        options={{
          title: "Transfer",
          tabBarIcon: ({ color }) => <Send width={20} color={color} />,
        }}
      />
      <Tabs.Screen
        name="transfer-money"
        options={{
          title: "Send money",
          tabBarIcon: ({ color }) => (
            <CircleDollarSign width={20} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
