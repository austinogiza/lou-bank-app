import React, { useState } from "react"
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
} from "react-native"
import tw from "twrnc"
import { Feather, MaterialIcons } from "@expo/vector-icons" // or react-native-vector-icons

interface StatementOption {
  id: string
  title: string
  subtitle: string
  icon: "clock" | "calendar" | "calendar-check" | "calendar-range"
}

const DownloadTransactionStatements = ({ navigation }: any) => {
  const [selectedOption, setSelectedOption] = useState<string>("")
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [dateRange, setDateRange] = useState({ start: "", end: "" })

  const statementOptions: StatementOption[] = [
    {
      id: "last3",
      title: "Last 3 Months",
      subtitle: "Jan 1 - March 30, 2025",
      icon: "clock",
    },
    {
      id: "last6",
      title: "Last 6 Months",
      subtitle: "Jan 1 - May 30, 2025",
      icon: "calendar",
    },
    {
      id: "all",
      title: "All Time",
      subtitle: "Since you created account",
      icon: "calendar-check",
    },
    {
      id: "custom",
      title: "Custom Range",
      subtitle: "Specify your date",
      icon: "calendar-range",
    },
  ]

  const getIcon = (iconType: string, isSelected: boolean) => {
    const color = isSelected ? "#8B5CF6" : "#9CA3AF"
    switch (iconType) {
      case "clock":
        return <Feather name="clock" size={24} color={color} />
      case "calendar":
        return <Feather name="calendar" size={24} color={color} />
      case "calendar-check":
        return <MaterialIcons name="date-range" size={24} color={color} />
      case "calendar-range":
        return <MaterialIcons name="calendar-today" size={24} color={color} />
      default:
        return <Feather name="calendar" size={24} color={color} />
    }
  }

  const handleOptionPress = (optionId: string) => {
    setSelectedOption(optionId)
    if (optionId === "custom") {
      setShowDatePicker(true)
    } else {
      // Proceed with download
      handleDownload(optionId)
    }
  }

  const handleDownload = (optionId: string) => {
    // Implement download logic here
    console.log(`Downloading statements for: ${optionId}`)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation?.goBack()}
          style={styles.backButton}
        >
          <Feather name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Download Statements</Text>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Title Section */}
        <View style={styles.titleSection}>
          <View style={styles.titleContainer}>
            <Text style={styles.mainTitle}>Choose a period to</Text>
            <Text style={styles.mainTitle}>download your statement</Text>
          </View>
          <Text style={styles.subtitle}>
            Please select timeframe you want to download
          </Text>
        </View>

        {/* Options List */}
        <View style={styles.optionsList}>
          {statementOptions.map((option) => {
            const isSelected = selectedOption === option.id
            return (
              <TouchableOpacity
                key={option.id}
                onPress={() => handleOptionPress(option.id)}
                style={[styles.optionCard, isSelected && styles.selectedCard]}
                activeOpacity={0.7}
              >
                <View
                  style={[
                    styles.iconContainer,
                    isSelected && styles.selectedIconContainer,
                  ]}
                >
                  {getIcon(option.icon, isSelected)}
                </View>

                <View style={styles.textContainer}>
                  <Text
                    style={[
                      styles.optionTitle,
                      isSelected && styles.selectedText,
                    ]}
                  >
                    {option.title}
                  </Text>
                  <Text style={styles.optionSubtitle}>{option.subtitle}</Text>
                </View>

                <Feather
                  name="chevron-right"
                  size={20}
                  color={isSelected ? "#8B5CF6" : "#6B7280"}
                />
              </TouchableOpacity>
            )
          })}
        </View>

        {/* Download Button (appears when option is selected) */}
        {selectedOption && (
          <TouchableOpacity
            style={styles.downloadButton}
            onPress={() => handleDownload(selectedOption)}
          >
            <Feather name="download" size={20} color="white" />
            <Text style={styles.downloadButtonText}>Download Statement</Text>
          </TouchableOpacity>
        )}
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
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#1F2937",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  titleSection: {
    marginTop: 24,
    marginBottom: 8,
  },
  titleContainer: {
    marginBottom: 12,
  },
  mainTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    color: "#6B7280",
    fontSize: 14,
    marginTop: 8,
  },
  optionsList: {
    marginTop: 32,
  },
  optionCard: {
    backgroundColor: "#111827",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#111827",
  },
  selectedCard: {
    borderColor: "#8B5CF6",
    backgroundColor: "#1A1A2E",
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#1F2937",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  selectedIconContainer: {
    backgroundColor: "#8B5CF633", // 20% opacity purple
  },
  textContainer: {
    flex: 1,
  },
  optionTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  selectedText: {
    color: "#8B5CF6",
  },
  optionSubtitle: {
    color: "#6B7280",
    fontSize: 14,
  },
  downloadButton: {
    backgroundColor: "#8B5CF6",
    borderRadius: 32,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
    marginBottom: 32,
    gap: 8,
  },
  downloadButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
})

export default DownloadTransactionStatements
