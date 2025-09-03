import { useQuery } from "@tanstack/react-query"

import { authAxios } from "./auth-axios"
import { AccountsOverviewURL } from "../constant"

export const useFetchAccountOverview = () => {
  const fetchAccountOverview = async () => {
    const response = await authAxios.get(AccountsOverviewURL)
    return response.data
  }
  const queryKey = ["account-overview"]
  const {
    data: allAccountOverview,
    isLoading: isAccountLoading,
    refetch: refetchUserAccount,
  } = useQuery({ queryKey, queryFn: () => fetchAccountOverview, retry: 1 })
  return {
    allAccountOverview,
    isAccountLoading,
    refetchUserAccount,
  }
}
