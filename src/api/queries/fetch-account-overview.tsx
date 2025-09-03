import { useQuery } from "@tanstack/react-query"
import { authAxios } from "./auth-axios"
import { AccountsOverviewURL } from "../constant"

const fetchAccountOverview = async () => {
  try {
    const response = await authAxios.get(AccountsOverviewURL)
    console.log("✅ API response:", response.data)
    return response.data
  } catch (error: any) {
    console.log("❌ API error:", error?.response?.data || error.message)
    throw error
  }
}

export const useFetchAccountOverview = () => {
  const queryKey = ["account-overview"]

  const {
    data: allAccountOverview,
    isLoading: isAccountLoading,
    error: accountError,
    refetch: refetchUserAccount,
  } = useQuery({
    queryKey,
    queryFn: fetchAccountOverview,
    retry: 1,
  })

  return {
    allAccountOverview,
    isAccountLoading,
    accountError,
    refetchUserAccount,
  }
}
