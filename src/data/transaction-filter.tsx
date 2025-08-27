import { int } from "zod"

interface FilterOptionProps {
  label: string
  value: string
}
export const FilterDataOptions: FilterOptionProps[] = [
  { label: "All", value: "all" },
  { label: "Received", value: "received" },
  { label: "Sent", value: "sent" },
  { label: "Type", value: "type" },
]
