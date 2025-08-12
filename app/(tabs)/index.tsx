import React, { useState } from "react"
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Image,
} from "react-native"
import { ChevronDown, CreditCard, X } from "lucide-react-native"
import tw from "twrnc"
import AppBalance from "@/src/components/home/app-balance"
import SalaryCards from "@/src/components/home/salary-cards"
import FinanceQuick from "@/src/components/home/finance-quick"

const BankingDashboard = () => {
  const [showInvestmentBanner, setShowInvestmentBanner] = useState(true)
  const [expandedSections, setExpandedSections] = useState({
    loans: false,
    currencies: false,
  })

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-900`}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a1a" />

      <ScrollView style={tw`flex-1 px-4 `}>
        {/* Header */}
        <AppBalance />

        {/* Balance Section */}

        {/* Cards Section */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={tw`mt-6 px-4`}
        >
          <SalaryCards />
        </ScrollView>

        {/* Finance Section */}
        <FinanceQuick />

        {/* Current Loans Section */}
        <TouchableOpacity
          onPress={() => toggleSection("loans")}
          style={tw`flex-row items-center justify-between px-4 mt-8 mb-4`}
        >
          <Text style={tw`text-gray-400 text-xs uppercase`}>Current Loans</Text>
          <ChevronDown
            size={20}
            color="#9ca3af"
            style={{
              transform: [
                { rotate: expandedSections.loans ? "180deg" : "0deg" },
              ],
            }}
          />
        </TouchableOpacity>

        {expandedSections.loans && (
          <View style={tw`px-4 mb-4`}>
            <View
              style={tw`bg-gray-800 rounded-2xl p-4 flex-row items-center justify-between`}
            >
              <View style={tw`flex-row items-center`}>
                <View
                  style={tw`bg-gray-700 w-10 h-10 rounded-lg items-center justify-center mr-3`}
                >
                  <CreditCard size={20} color="#9ca3af" />
                </View>
                <View>
                  <Text style={tw`text-white font-medium`}>
                    Account N° 3874825
                  </Text>
                  <Text style={tw`text-gray-500 text-xs`}>
                    Expires 12/22/2023
                  </Text>
                </View>
              </View>
              <View style={tw`items-end`}>
                <Text style={tw`text-white font-medium`}>$ 78.92</Text>
                <Text style={tw`text-gray-500 text-xs`}>Rate 3.5%</Text>
              </View>
            </View>
          </View>
        )}

        {/* Investment Banner */}
        {showInvestmentBanner && (
          <View
            style={tw`mx-4 mb-4 bg-teal-900/30 rounded-2xl p-4 flex-row items-center justify-between`}
          >
            <View style={tw`flex-row items-center flex-1`}>
              <View
                style={tw`bg-gray-700 w-10 h-10 rounded-full items-center justify-center mr-3`}
              >
                <Text style={tw`text-white text-lg`}>🚀</Text>
              </View>
              <View style={tw`flex-1`}>
                <Text style={tw`text-white font-medium`}>
                  Start investing now!
                </Text>
                <Text style={tw`text-gray-400 text-xs`}>
                  Protected savings and investment plans
                </Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => setShowInvestmentBanner(false)}>
              <X size={20} color="#9ca3af" />
            </TouchableOpacity>
          </View>
        )}

        {/* Currencies and Metals Section */}
        <TouchableOpacity
          onPress={() => toggleSection("currencies")}
          style={tw`flex-row items-center justify-between px-4 mt-4 mb-4`}
        >
          <Text style={tw`text-gray-400 text-xs uppercase`}>
            Currencies and Metals
          </Text>
          <ChevronDown
            size={20}
            color="#9ca3af"
            style={{
              transform: [
                { rotate: expandedSections.currencies ? "180deg" : "0deg" },
              ],
            }}
          />
        </TouchableOpacity>

        {expandedSections.currencies && (
          <View style={tw`px-4 mb-4`}>
            {/* Currencies */}
            <View style={tw`flex-row justify-between mb-2`}>
              <Text style={tw`text-gray-500 text-xs flex-1`}>Currencies</Text>
              <Text style={tw`text-gray-500 text-xs w-20 text-right`}>Buy</Text>
              <Text style={tw`text-gray-500 text-xs w-20 text-right`}>
                Sell
              </Text>
            </View>

            <View style={tw`flex-row items-center justify-between mb-3`}>
              <View style={tw`flex-row items-center flex-1`}>
                <View
                  style={tw`bg-gray-700 w-8 h-8 rounded-full items-center justify-center mr-2`}
                >
                  <Text style={tw`text-white text-xs font-bold`}>$</Text>
                </View>
                <Text style={tw`text-white`}>USD</Text>
              </View>
              <Text style={tw`text-white w-20 text-right`}>$ 78.92</Text>
              <Text style={tw`text-white w-20 text-right`}>$ 78.92</Text>
            </View>

            <View style={tw`flex-row items-center justify-between mb-4`}>
              <View style={tw`flex-row items-center flex-1`}>
                <View
                  style={tw`bg-gray-700 w-8 h-8 rounded-full items-center justify-center mr-2`}
                >
                  <Text style={tw`text-white text-xs font-bold`}>€</Text>
                </View>
                <Text style={tw`text-white`}>EUR</Text>
              </View>
              <Text style={tw`text-white w-20 text-right`}>$ 78.92</Text>
              <Text style={tw`text-white w-20 text-right`}>$ 78.92</Text>
            </View>

            {/* Metals */}
            <View style={tw`flex-row justify-between mb-2 mt-4`}>
              <Text style={tw`text-gray-500 text-xs flex-1`}>Metals</Text>
              <Text style={tw`text-gray-500 text-xs w-20 text-right`}>Buy</Text>
              <Text style={tw`text-gray-500 text-xs w-20 text-right`}>
                Sell
              </Text>
            </View>

            <View style={tw`flex-row items-center justify-between mb-3`}>
              <View style={tw`flex-row items-center flex-1`}>
                <View
                  style={tw`bg-gray-700 w-8 h-8 rounded-full items-center justify-center mr-2`}
                >
                  <Text style={tw`text-yellow-400 text-xs font-bold`}>Au</Text>
                </View>
                <Text style={tw`text-white`}>Gold</Text>
              </View>
              <Text style={tw`text-white w-20 text-right`}>$ 78.92</Text>
              <Text style={tw`text-white w-20 text-right`}>$ 78.92</Text>
            </View>

            <View style={tw`flex-row items-center justify-between mb-4`}>
              <View style={tw`flex-row items-center flex-1`}>
                <View
                  style={tw`bg-gray-700 w-8 h-8 rounded-full items-center justify-center mr-2`}
                >
                  <Text style={tw`text-gray-300 text-xs font-bold`}>Ag</Text>
                </View>
                <Text style={tw`text-white`}>Silver</Text>
              </View>
              <Text style={tw`text-white w-20 text-right`}>$ 78.92</Text>
              <Text style={tw`text-white w-20 text-right`}>$ 78.92</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default BankingDashboard
