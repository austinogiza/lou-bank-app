import React, { memo } from "react"
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  FlatList,
  Image,
  ScrollView,
} from "react-native"
import tw from "twrnc"

import { LinearGradient } from "expo-linear-gradient"
import ScreensWrapper from "@/src/components/wrapper/screens-wrapper"
import { BankColorsThemes } from "@/src/style/color"
import ContactRow from "@/src/components/transfer-container/contact-row"
import QuickPerson from "@/src/components/transfer-container/quick-person"

const C = {
  bg: "#0e0f12",
  card: "#1a1c1f",
  panel: "#1b1d20",
  text: "#f3f4f6",
  sub: "#a1a1aa",
  tick: "#9ca3af",
  chip: "#2a2d31",
}

const BALANCE = 7896

const QUICK = [
  {
    id: "john",
    name: "John",
    avatar:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=240&fit=crop",
  },
  {
    id: "jeniffer",
    name: "Jeniffer",
    avatar:
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=240&fit=crop",
  },
  {
    id: "maya",
    name: "Maya 🪄",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=240&fit=crop",
  },
  { id: "add", name: "Send", avatar: "" },
]

const CONTACTS = [
  {
    id: "c1",
    name: "Jeniffer",
    note: "Hi! I return the debt",
    date: "10 Feb",
    avatar:
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=240&fit=crop",
  },
  {
    id: "c2",
    name: "John Baldwin",
    note: "Thanks!",
    date: "07 Feb",
    avatar:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=240&fit=crop",
  },
  {
    id: "c3",
    name: "Maya 👋",
    note: "Transfer",
    date: "07 Feb",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=240&fit=crop",
  },
  {
    id: "c4",
    name: "Sister Alice 🌸",
    note: "Hi! I return the debt",
    date: "04 Feb",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=240&fit=crop",
  },
  {
    id: "c5",
    name: "Jess",
    note: "Hi! I return the debt",
    date: "02 Feb",
    avatar:
      "https://images.unsplash.com/photo-1541534401786-2077eed87a76?q=80&w=240&fit=crop",
  },
]

export default function TransferHubScreen() {
  return (
    <ScreensWrapper>
      <SafeAreaView style={[tw`flex-1 pt-10`]}>
        {/* Header */}
        <View style={tw`items-center mt-10 mb-4`}>
          <Text style={[tw`text-base text-white font-normal`]}>Balance</Text>
          <Text style={tw`text-white text-4xl font-medium mt-1`}>
            ${BALANCE.toLocaleString()}
          </Text>
        </View>
        <LinearGradient
          colors={["#DFF7F6", "#CDE8F8"]}
          start={{ x: 0.1, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={tw`mx-4 mt-5 rounded-3xl px-4 py-5 mb-6`}
        >
          <Text
            style={[
              { color: BankColorsThemes.brandSecondary },
              tw`font-normal text-center mb-6`,
            ]}
          >
            Send money to
          </Text>

          <FlatList
            data={QUICK}
            horizontal
            keyExtractor={(i) => i.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={tw`px-2`}
            renderItem={({ item }) => (
              <QuickPerson
                name={item.name}
                avatar={item.avatar}
                isAdd={item.id === "add"}
                onPress={() => {}}
              />
            )}
          />
        </LinearGradient>
        <View
          style={[
            tw`px-4 mt-4 pt-6 rounded-t-3xl`,
            { backgroundColor: BankColorsThemes.contactsBG },
          ]}
        >
          <Text style={tw`text-white/90 mb-4`}>Contacts</Text>
          <ScrollView>
            {CONTACTS.map((c, idx) => (
              <ContactRow
                key={c.id}
                name={c.name}
                note={c.note}
                date={c.date}
                avatar={c.avatar}
                last={idx === CONTACTS.length - 1}
                onPress={() => {}}
              />
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </ScreensWrapper>
  )
}
