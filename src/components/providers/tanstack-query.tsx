import React, { FC, useMemo } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

interface ReactQueryProviderProps {
  children: React.ReactNode
}

const ReactQueryProvider: FC<ReactQueryProviderProps> = (props) => {
  const { children } = props

  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60 * 3, // 3 minutes
            gcTime: 1000 * 60 * 5, // 5 minutes
          },
        },
      }),
    []
  )

  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  )
}
export default ReactQueryProvider
