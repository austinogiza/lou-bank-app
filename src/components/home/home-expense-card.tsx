import { StyleSheet, Text, View } from "react-native"
import React, { FC } from "react"
import tw from "twrnc"
import { BankColorsThemes } from "@/src/style/color"
import { WalletIcon } from "@/src/utils/image-export"
import { ArrowUpRight, MoveUpRight } from "lucide-react-native"
interface HomeExpenseCardProps {
  title?: string

  amount?: string
}
const HomeExpenseCard: FC<HomeExpenseCardProps> = (props) => {
  const { title, amount } = props
  return (
    <View
      style={tw`flex-1 justify-between bg-black border min-h-[230px] border-gray-700 rounded-3xl py-4 px-5  mr-2`}
    >
      <View style={tw`flex-row justify-between items-center`}>
        <View
          style={tw`border-[0.3px] border-white p-2 rounded-full w-10 h-10 items-center justify-center`}
        >
          <WalletIcon height={16} width={16} />
        </View>
        <View
          style={[
            tw`border-[0.5px] p-2 rounded-full w-10 h-10 items-center justify-center`,
            { borderColor: BankColorsThemes.primary[500] },
          ]}
        >
          <MoveUpRight height={16} width={16} color={BankColorsThemes.white} />
        </View>
      </View>
      <View>
        <Text style={tw`text-white text-lg font-medium`}>{title} Expense</Text>
        <Text style={tw`text-gray-400 text-xs  mt-1`}>
          Total expense this month only
        </Text>
      </View>
      <View>
        <Text style={tw`text-white text-3xl font-medium mt-3`}>${amount}</Text>
      </View>
    </View>
  )
}

export default HomeExpenseCard

const styles = StyleSheet.create({})
