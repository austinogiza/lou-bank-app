import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export default function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 3,
        gcTime: 1000 * 60 * 5,
      },
    },
  })
  return (
    <>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </>
  )
}
