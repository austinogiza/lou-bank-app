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
import {
  ChevronDown,
  Search,
  Star,
  CreditCard,
  PieChart,
  Home,
  ShoppingBag,
  MessageCircle,
  Grid3x3,
  X,
} from "lucide-react-native"
import tw from "twrnc"

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

      <ScrollView style={tw`flex-1`}>
        {/* Header */}
        <View style={tw`flex-row items-center justify-between px-4 py-3`}>
          <View style={tw`flex-row items-center`}>
            <View
              style={tw`w-10 h-10 bg-yellow-400 rounded-full items-center justify-center mr-3`}
            >
              <Text style={tw`text-gray-900 font-bold text-lg`}>L</Text>
            </View>
            <Text style={tw`text-yellow-400 text-xl font-semibold`}>
              LouBank
            </Text>
          </View>
          <TouchableOpacity>
            <Search size={24} color="#fbbf24" />
          </TouchableOpacity>
        </View>

        {/* Balance Section */}
        <View style={tw`px-4 mt-4`}>
          <Text style={tw`text-gray-400 text-sm`}>Your balance</Text>
          <Text style={tw`text-white text-4xl font-bold mt-1`}>$ 7,896</Text>
        </View>

        {/* Cards Section */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={tw`mt-6 px-4`}
        >
          {/* Salary Card */}
          <View style={tw`bg-gray-200 rounded-2xl p-4 mr-3 w-40 h-48`}>
            <View style={tw`flex-row items-center mb-2`}>
              <Text style={tw`text-gray-800 font-semibold text-xs`}>VISA</Text>
            </View>
            <Text style={tw`text-gray-600 text-xs mt-8`}>Salary</Text>
            <Text style={tw`text-gray-900 text-xl font-bold`}>$ 2,230</Text>
            <Text style={tw`text-gray-600 text-xs mt-8`}>** 6917</Text>
          </View>

          {/* Savings Account Card */}
          <View style={tw`bg-yellow-300 rounded-2xl p-4 mr-3 w-40 h-48`}>
            <View style={tw`flex-row items-center mb-2`}>
              <Text style={tw`text-gray-800 font-semibold text-xs`}>VISA</Text>
            </View>
            <Text style={tw`text-gray-700 text-xs mt-8`}>Savings account</Text>
            <Text style={tw`text-gray-900 text-xl font-bold`}>$ 5,566</Text>
            <Text style={tw`text-gray-700 text-xs mt-8`}>** 4552</Text>
          </View>

          {/* Security Card (Partial) */}
          <View style={tw`bg-purple-200 rounded-2xl p-4 w-40 h-48`}>
            <View style={tw`flex-row items-center mb-2`}>
              <Text style={tw`text-gray-800 font-semibold text-xs`}>VISA</Text>
            </View>
            <Text style={tw`text-gray-700 text-xs mt-8`}>Security</Text>
            <Text style={tw`text-gray-900 text-xl font-bold`}>$ 1,100</Text>
            <Text style={tw`text-gray-700 text-xs mt-8`}>** 3298</Text>
          </View>
        </ScrollView>

        {/* Finance Section */}
        <View style={tw`px-4 mt-6`}>
          <Text style={tw`text-gray-400 text-xs uppercase mb-4`}>Finance</Text>
          <View style={tw`flex-row`}>
            <TouchableOpacity style={tw`items-center mr-8`}>
              <View
                style={tw`bg-yellow-400 w-12 h-12 rounded-xl items-center justify-center mb-2`}
              >
                <Star size={20} color="#1a1a1a" />
              </View>
              <Text style={tw`text-gray-400 text-xs`}>My bonuses</Text>
            </TouchableOpacity>

            <TouchableOpacity style={tw`items-center mr-8`}>
              <View
                style={tw`bg-gray-700 w-12 h-12 rounded-xl items-center justify-center mb-2`}
              >
                <CreditCard size={20} color="#9ca3af" />
              </View>
              <Text style={tw`text-gray-400 text-xs`}>My budget</Text>
            </TouchableOpacity>

            <TouchableOpacity style={tw`items-center`}>
              <View
                style={tw`bg-purple-900/50 w-12 h-12 rounded-xl items-center justify-center mb-2`}
              >
                <PieChart size={20} color="#9ca3af" />
              </View>
              <Text style={tw`text-gray-400 text-xs text-center`}>
                Finance{"\n"}analysis
              </Text>
            </TouchableOpacity>
          </View>
        </View>

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

      {/* Bottom Navigation */}
      <View
        style={tw`flex-row items-center justify-around bg-gray-900 border-t border-gray-800 py-2`}
      >
        <TouchableOpacity style={tw`items-center py-2`}>
          <Home size={24} color="#fbbf24" />
        </TouchableOpacity>
        <TouchableOpacity style={tw`items-center py-2`}>
          <ShoppingBag size={24} color="#6b7280" />
        </TouchableOpacity>
        <TouchableOpacity style={tw`items-center py-2`}>
          <CreditCard size={24} color="#6b7280" />
        </TouchableOpacity>
        <TouchableOpacity style={tw`items-center py-2`}>
          <MessageCircle size={24} color="#6b7280" />
        </TouchableOpacity>
        <TouchableOpacity style={tw`items-center py-2`}>
          <Grid3x3 size={24} color="#6b7280" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default BankingDashboard
