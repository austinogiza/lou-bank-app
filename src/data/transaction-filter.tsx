import { ArrowDownLeft, ArrowUpRight, Plus, Shield } from "lucide-react-native"
import { ReactNode } from "react"
import { int } from "zod"
import { BankColorsThemes } from "../style/color"

interface FilterOptionProps {
  label: string
  value: string
}
interface AccountActionProps {
  label?: string
  color?: string
  icon?: ReactNode
}

export const FilterDataOptions: FilterOptionProps[] = [
  { label: "All", value: "all" },
  { label: "Received", value: "received" },
  { label: "Sent", value: "sent" },
  { label: "Type", value: "type" },
]
export const AccountActions: AccountActionProps[] = [
  {
    label: "Add",
    icon: <Plus width={24} height={24} color={BankColorsThemes.white} />,
    color: BankColorsThemes.balanceAdd,
  },
  {
    label: "Send",
    icon: (
      <ArrowUpRight width={24} height={24} color={BankColorsThemes.white} />
    ),
    color: BankColorsThemes.tertiary[500],
  },
  {
    label: "Receive",
    icon: (
      <ArrowDownLeft width={24} height={24} color={BankColorsThemes.white} />
    ),
    color: BankColorsThemes.accent[600],
  },
  {
    label: "Pay Bill",
    icon: <Shield width={24} height={24} color={BankColorsThemes.white} />,
    color: BankColorsThemes.balanceBill,
  },
]
