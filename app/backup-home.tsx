import React from "react"
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native"
import tw from "twrnc"

export default function HomeScreen() {
  return (
    <View style={tw`flex-1 bg-neutral-900`}>
      {/* Header */}
      <View style={tw`flex-row items-center justify-between px-4 pt-4`}>
        <View style={tw`flex-row items-center`}>
          <View style={tw`w-10 h-10 rounded-full bg-yellow-300 mr-2`} />
          <Text style={tw`text-yellow-300 font-bold text-lg`}>Lou</Text>
          <Text style={tw`text-white font-semibold text-lg`}>Bank</Text>
        </View>
      </View>

      {/* Balance */}
      <Text style={tw`text-gray-400 text-base mt-6 ml-4`}>Your balance</Text>
      <Text style={tw`text-white font-bold text-4xl ml-4 mt-1`}>$ 7,896</Text>

      {/* Cards Carousel */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={tw`mt-6 ml-4`}
        contentContainerStyle={{ gap: 12 }}
      >
        <View
          style={tw`w-44 h-28 rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-300 p-4`}
        >
          <Text style={tw`text-black font-bold mb-2`}>VISA</Text>
          <Text style={tw`text-black text-xs mb-1`}>Salary</Text>
          <Text style={tw`text-black font-bold text-lg`}>$ 2,230</Text>
          <Text style={tw`text-black text-xs mt-2`}>** 6917</Text>
        </View>
        <View
          style={tw`w-44 h-28 rounded-2xl bg-gradient-to-br from-yellow-100 to-yellow-300 p-4`}
        >
          <Text style={tw`text-black font-bold mb-2`}>VISA</Text>
          <Text style={tw`text-black text-xs mb-1`}>Savings account</Text>
          <Text style={tw`text-black font-bold text-lg`}>$ 5,566</Text>
          <Text style={tw`text-black text-xs mt-2`}>** 4552</Text>
        </View>
        <View
          style={tw`w-44 h-28 rounded-2xl bg-gradient-to-br from-purple-200 to-purple-400 p-4`}
        >
          <Text style={tw`text-black font-bold mb-2`}>VISA</Text>
          <Text style={tw`text-black text-xs mb-1`}>Savings account</Text>
          <Text style={tw`text-black font-bold text-lg`}>$ 1,234</Text>
          <Text style={tw`text-black text-xs mt-2`}>** 1234</Text>
        </View>
      </ScrollView>

      {/* Finance Quick Actions */}
      <View style={tw`flex-row justify-between mt-8 px-4`}>
        <TouchableOpacity
          style={tw`w-20 h-20 bg-yellow-200 rounded-xl flex items-center justify-center`}
        >
          <Icon name="star" size={30} color="#333" />
          <Text style={tw`text-xs font-semibold text-neutral-900 mt-2`}>
            My bonuses
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`w-20 h-20 bg-neutral-800 rounded-xl flex items-center justify-center`}
        >
          <Icon name="wallet" size={30} color="#333" />
          <Text style={tw`text-xs font-semibold text-white mt-2`}>
            My budget
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`w-20 h-20 bg-purple-300 rounded-xl flex items-center justify-center`}
        >
          <Icon name="stats-chart" size={30} color="#333" />
          <Text style={tw`text-xs font-semibold text-neutral-900 mt-2`}>
            Finance analysis
          </Text>
        </TouchableOpacity>
      </View>

      {/* Current Loans */}
      <View
        style={tw`mt-8 mx-4 p-4 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-700`}
      >
        <View style={tw`flex-row justify-between items-center mb-2`}>
          <Text style={tw`text-gray-400 font-semibold`}>CURRENT LOANS</Text>
          <TouchableOpacity>
            <Icon name="add" size={18} color="#F1F1F1" />
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row justify-between items-center`}>
          <View>
            <Text style={tw`text-white font-semibold`}>Account Nº 3874825</Text>
            <Text style={tw`text-gray-400 text-xs mt-1`}>
              Expires 12/22/2023
            </Text>
          </View>
          <View style={tw`items-end`}>
            <Text style={tw`text-white font-semibold`}>$ 78,92</Text>
            <Text style={tw`text-gray-400 text-xs mt-1`}>Rate 3.5%</Text>
          </View>
        </View>
      </View>

      {/* Investment Banner */}
      <View
        style={tw`mx-4 my-4 p-4 rounded-2xl bg-neutral-100 flex-row items-center`}
      >
        <Icon name="flash" size={22} color="#333" style={tw`mr-2`} />
        <View>
          <Text style={tw`text-black font-semibold`}>Start investing now!</Text>
          <Text style={tw`text-gray-600 text-xs`}>
            Protected savings and investment plans
          </Text>
        </View>
        <TouchableOpacity style={tw`ml-auto`}>
          <Icon name="close" size={18} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Currencies and Metals */}
      <View style={tw`mx-4 mt-2`}>
        <Text style={tw`text-gray-400 font-semibold mb-2`}>
          CURRENCIES AND METALS
        </Text>
        <View style={tw`rounded-2xl bg-neutral-800 p-4 mb-2`}>
          <View style={tw`flex-row justify-between mb-3`}>
            <Text style={tw`text-gray-400`}>Currency</Text>
            <Text style={tw`text-gray-400`}>Buy</Text>
            <Text style={tw`text-gray-400`}>Sell</Text>
          </View>
          <View style={tw`flex-row justify-between items-center mb-2`}>
            <View style={tw`flex-row items-center`}>
              <Icon name="logo-usd" size={18} color="#fff" style={tw`mr-2`} />
              <Text style={tw`text-white font-semibold`}>USD</Text>
            </View>
            <Text style={tw`text-white`}>$ 78,92</Text>
            <Text style={tw`text-white`}>$ 78,92</Text>
          </View>
          <View style={tw`flex-row justify-between items-center`}>
            <View style={tw`flex-row items-center`}>
              <Icon name="logo-euro" size={18} color="#fff" style={tw`mr-2`} />
              <Text style={tw`text-white font-semibold`}>EUR</Text>
            </View>
            <Text style={tw`text-white`}>$ 78,92</Text>
            <Text style={tw`text-white`}>$ 78,92</Text>
          </View>
        </View>
        <View style={tw`rounded-2xl bg-neutral-800 p-4`}>
          <View style={tw`flex-row justify-between mb-3`}>
            <Text style={tw`text-gray-400`}>Metals</Text>
            <Text style={tw`text-gray-400`}>Buy</Text>
            <Text style={tw`text-gray-400`}>Sell</Text>
          </View>
          <View style={tw`flex-row justify-between items-center mb-2`}>
            <View style={tw`flex-row items-center`}>
              <Icon name="diamond" size={18} color="#fff" style={tw`mr-2`} />
              <Text style={tw`text-white font-semibold`}>Gold</Text>
            </View>
            <Text style={tw`text-white`}>$ 78,92</Text>
            <Text style={tw`text-white`}>$ 78,92</Text>
          </View>
          <View style={tw`flex-row justify-between items-center`}>
            <View style={tw`flex-row items-center`}>
              <Icon
                name="diamond-outline"
                size={18}
                color="#fff"
                style={tw`mr-2`}
              />
              <Text style={tw`text-white font-semibold`}>Silver</Text>
            </View>
            <Text style={tw`text-white`}>$ 78,92</Text>
            <Text style={tw`text-white`}>$ 78,92</Text>
          </View>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View
        style={tw`flex-row justify-between items-center px-8 py-3 mt-4 bg-neutral-900 border-t border-neutral-800`}
      >
        <TouchableOpacity>
          <Icon name="home" size={28} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="lock-closed" size={28} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="card" size={28} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="chatbubble-ellipses" size={28} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="person" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  )
}
