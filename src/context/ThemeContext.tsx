import React, { createContext, useState } from 'react'

type ThemeContextType = {
  theme: string
  toggleTheme: () => void
}
export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType,
)

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
