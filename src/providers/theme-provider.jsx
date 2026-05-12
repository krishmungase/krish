import { createContext, useContext, useEffect } from 'react'

const ThemeProviderContext = createContext({
  theme: 'dark',
  resolvedTheme: 'dark',
  setTheme: () => {},
})

export function ThemeProvider({ children }) {
  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light')
    root.classList.add('dark')
    root.style.colorScheme = 'dark'
  }, [])

  return (
    <ThemeProviderContext.Provider
      value={{ theme: 'dark', resolvedTheme: 'dark', setTheme: () => {} }}
    >
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeProviderContext)
