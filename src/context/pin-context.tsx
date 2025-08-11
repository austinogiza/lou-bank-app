import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react"

type PinContextType = {
  firstPin: string | null
  setFirstPin: (pin: string | null) => void
}

const PinContext = createContext<PinContextType>({
  firstPin: null,
  setFirstPin: () => {},
})

export const PinProvider: FC<PropsWithChildren> = ({ children }) => {
  const [firstPin, setFirstPin] = useState<string | null>(null)
  return (
    <PinContext.Provider value={{ firstPin, setFirstPin }}>
      {children}
    </PinContext.Provider>
  )
}

export const useAuthPin = () => useContext(PinContext)
