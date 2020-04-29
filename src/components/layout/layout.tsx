import React from 'react'
import Header from '../header/header'
import { Provider } from '../../utils/Context'

const Layout = ({ children }: LayoutProps) => {
  return (
    <Provider>
      <Header />
      {children}
    </Provider>
  )
}

interface LayoutProps {
  children: React.ReactNode
}

export default Layout
