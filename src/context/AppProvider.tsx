import { ReactNode, createContext, useEffect } from 'react'

export type AppContextType = {}
export const AppContext = createContext<AppContextType | null>(null)
export function AppProvider({ children }: { children: ReactNode }) {
  // useEffect(() => {
  // }, []);
  const value = {
    user: null,
  }
  return <AppContext.Provider value={value}> {children} </AppContext.Provider>
}
