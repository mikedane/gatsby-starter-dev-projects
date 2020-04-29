import React, { createContext, useState } from 'react'

export const Context = createContext({})

export const Provider = ({ children }: ProviderProps) => {
  const [globalName, setGlobalName] = useState('Mike')

  const context: ContextValues = {
    globalName,
    setGlobalName,
  }
  console.log(context)

  return <Context.Provider value={context}>{children}</Context.Provider>
}

interface ProviderProps {
  children: React.ReactNode
}

export interface ContextValues {
  globalName: string
  setGlobalName: React.Dispatch<React.SetStateAction<string>>
}

export const { Consumer } = Context
