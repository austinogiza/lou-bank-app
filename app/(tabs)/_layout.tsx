import GoBackButton from "@/src/components/helpers/go-back-button"
import { BankColorsThemes } from "@/src/style/color"
import {
  HomeActiveIcon,
  HomeInactiveIcon,
  NotificationIcon,
  WalletIcon,
} from "@/src/utils/image-export"
import { Tabs } from "expo-router"
import { Gavel, User } from "lucide-react-native"
import React from "react"
import { Text, View } from "react-native"
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "",
        headerShown: false,
        // tabBarBackgroundColor: "black",
        tabBarStyle: { backgroundColor: "black", borderTopColor: "#1f2937" },
        tabBarInactiveTintColor: "gray",
        tabBarIconStyle: { marginTop: 5, color: "white" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 12,
                marginBottom: 3,
                color: focused
                  ? BankColorsThemes.white
                  : BankColorsThemes.neutral[400],
              }}
            >
              Home
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <>
                  <HomeActiveIcon />
                </>
              ) : (
                <>
                  <HomeInactiveIcon />
                </>
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="account-balance"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 12,
                marginBottom: 3,
                color: focused
                  ? BankColorsThemes.white
                  : BankColorsThemes.neutral[400],
              }}
            >
              Account
            </Text>
          ),
          headerShown: false,
          headerShadowVisible: false,
          tabBarIcon: ({ color, focused }) => (
            <View></View>
            // <Banknote
            //   width={20}
            //   color={
            //     focused ? BankColorsThemes.white : BankColorsThemes.neutral[400]
            //   }
            // />
          ),
          headerLeft: () => <GoBackButton />,
          // headerRight: () => <TransactionCustom />,
        }}
      />

      <Tabs.Screen
        name="notification"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 12,
                marginBottom: 3,
                color: focused
                  ? BankColorsThemes.white
                  : BankColorsThemes.neutral[400],
              }}
            >
              Notifications
            </Text>
          ),
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <NotificationIcon height={20} width={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="transaction-history"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 12,
                marginBottom: 3,
                color: focused
                  ? BankColorsThemes.white
                  : BankColorsThemes.neutral[400],
              }}
            >
              Transaction
            </Text>
          ),
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <WalletIcon height={20} width={20} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => <User width={20} color={color} />,
        }}
      />


      <Tabs.Screen
        name="legal"
        options={{
          title: "Legal",
          tabBarIcon: ({ color }) => <Gavel width={20} color={color} />,
        }}
      />
    </Tabs>
  )
}
