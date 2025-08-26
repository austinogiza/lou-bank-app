import React, { useState } from "react"
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  FlatList,
} from "react-native"
import tw from "twrnc"
import { Feather, MaterialIcons, FontAwesome5 } from "@expo/vector-icons"

interface TransferOption {
  id: string
  title: string
  subtitle: string
  icon: string
  iconType: "feather" | "material" | "fontawesome5"
}

interface Recipient {
  id: string
  name: string
  accountNumber: string
  avatar: string
}

// Version 2: Using StyleSheet
const SendMoneyStyleIndex = ({ navigation }: any) => {
  const [searchVisible, setSearchVisible] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const transferOptions: TransferOption[] = [
    {
      id: "bank",
      title: "Via Bank Transfer",
      subtitle: "Safely transfer money from your other bank accounts",
      icon: "bank",
      iconType: "fontawesome5",
    },
    {
      id: "international",
      title: "Send Internationally",
      subtitle: "Safely transfer money from your otherbank accounts",
      icon: "globe",
      iconType: "feather",
    },
    {
      id: "contact",
      title: "Send to Contact",
      subtitle: "Safely transfer money from your otherbank accounts",
      icon: "users",
      iconType: "feather",
    },
  ]

  const savedRecipients: Recipient[] = [
    {
      id: "1",
      name: "Adom Shafi",
      accountNumber: "2334 4783 389 00-04-00-04",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: "2",
      name: "Ava Kaysar",
      accountNumber: "2334 4783 389 00-04-00-04",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: "3",
      name: "Sara William",
      accountNumber: "2334 4783 389 00-04-00-04",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  ]

  const renderIcon = (option: TransferOption) => {
    const iconColor = "#FFFFFF"
    const iconSize = 24

    switch (option.iconType) {
      case "fontawesome5":
        return (
          <FontAwesome5 name={option.icon} size={iconSize} color={iconColor} />
        )
      case "material":
        return (
          <MaterialIcons
            name={option.icon as any}
            size={iconSize}
            color={iconColor}
          />
        )
      default:
        return (
          <Feather
            name={option.icon as any}
            size={iconSize}
            color={iconColor}
          />
        )
    }
  }

  const handleOptionPress = (optionId: string) => {
    // Navigate to specific transfer screen
    console.log("Selected option:", optionId)
  }

  const handleRecipientPress = (recipient: Recipient) => {
    // Navigate to send money to recipient
    console.log("Selected recipient:", recipient.name)
  }

  const filteredRecipients = savedRecipients.filter((recipient) =>
    recipient.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation?.goBack()}
          style={styles.headerButton}
        >
          <Feather name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Send Money</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Feather name="info" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Title Section */}
        <View style={styles.titleSection}>
          <View style={styles.titleContainer}>
            <Text style={styles.mainTitle}>How would you</Text>
            <Text style={styles.mainTitle}>like to send</Text>
            <Text style={styles.mainTitle}>money?</Text>
          </View>
          <Text style={styles.subtitle}>Choose your document type</Text>
        </View>

        {/* Transfer Options */}
        <View style={styles.optionsContainer}>
          {transferOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={styles.optionCard}
              onPress={() => handleOptionPress(option.id)}
              activeOpacity={0.7}
            >
              <View style={styles.optionIcon}>{renderIcon(option)}</View>
              <View style={styles.optionContent}>
                <Text style={styles.optionTitle}>{option.title}</Text>
                <Text style={styles.optionSubtitle}>{option.subtitle}</Text>
              </View>
              <Feather name="chevron-right" size={20} color="#6B7280" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Saved Recipients Section */}
        <View style={styles.recipientsSection}>
          <View style={styles.recipientsHeader}>
            <View>
              <Text style={styles.recipientsTitle}>Saved recipients</Text>
              <Text style={styles.recipientsCount}>
                You have 10 saved recipients
              </Text>
            </View>
            <TouchableOpacity onPress={() => setSearchVisible(!searchVisible)}>
              <Feather name="search" size={20} color="#8B5CF6" />
            </TouchableOpacity>
          </View>

          {/* Search Bar (if visible) */}
          {searchVisible && (
            <View style={styles.searchContainer}>
              <Feather name="search" size={16} color="#6B7280" />
              <TextInput
                style={styles.searchInput}
                placeholder="Search recipients..."
                placeholderTextColor="#6B7280"
                value={searchQuery}
                onChangeText={setSearchQuery}
                autoFocus
              />
            </View>
          )}

          {/* Recipients List */}
          {filteredRecipients.map((recipient) => (
            <TouchableOpacity
              key={recipient.id}
              style={styles.recipientItem}
              onPress={() => handleRecipientPress(recipient)}
              activeOpacity={0.7}
            >
              <Image
                source={{ uri: recipient.avatar }}
                style={styles.recipientAvatar}
              />
              <View style={styles.recipientInfo}>
                <Text style={styles.recipientName}>{recipient.name}</Text>
                <Text style={styles.recipientAccount}>
                  {recipient.accountNumber}
                </Text>
              </View>
              <Feather name="chevron-right" size={20} color="#6B7280" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#1F2937",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
  scrollView: {
    flex: 1,
  },
  titleSection: {
    paddingHorizontal: 20,
    marginTop: 16,
    marginBottom: 32,
  },
  titleContainer: {
    marginBottom: 8,
  },
  mainTitle: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "bold",
    lineHeight: 34,
  },
  subtitle: {
    color: "#6B7280",
    fontSize: 14,
    marginTop: 4,
  },
  optionsContainer: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  optionCard: {
    backgroundColor: "#111827",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  optionIcon: {
    width: 48,
    height: 48,
    backgroundColor: "#1F2937",
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  optionContent: {
    flex: 1,
  },
  optionTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  optionSubtitle: {
    color: "#6B7280",
    fontSize: 12,
    lineHeight: 16,
    paddingRight: 16,
  },
  recipientsSection: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  recipientsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  recipientsTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
  recipientsCount: {
    color: "#6B7280",
    fontSize: 12,
    marginTop: 2,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111827",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 14,
    marginLeft: 8,
  },
  recipientItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  recipientAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  recipientInfo: {
    flex: 1,
  },
  recipientName: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },
  recipientAccount: {
    color: "#6B7280",
    fontSize: 12,
    marginTop: 2,
  },
})

const enhancedStyles = StyleSheet.create({
  ...styles,
  optionCardSelected: {
    borderWidth: 1,
    borderColor: "#8B5CF6",
    backgroundColor: "#1A1A2E",
  },
  optionIconSelected: {
    backgroundColor: "#8B5CF633",
  },
  optionTitleSelected: {
    color: "#8B5CF6",
  },
  emptyState: {
    alignItems: "center",
    paddingVertical: 32,
  },
  emptyStateText: {
    color: "#6B7280",
    fontSize: 14,
  },
})

export default SendMoneyStyleIndex
