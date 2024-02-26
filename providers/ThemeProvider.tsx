import { useEffect, useContext, createContext, useMemo } from "react"
import { useLocalStorage } from "usehooks-ts"
import useStickyMode from "../hooks/useStickyMode"

const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useLocalStorage<string>("theme", "light")
  const stickyMode = useStickyMode()

  const toggleMode = () => {
    const html = document.querySelector<HTMLHtmlElement>("html")!
    if (themeMode == "light") {
      html.classList.remove("dark")
    } else {
      html.classList.add("dark")
    }
  }

  useEffect(() => {
    toggleMode()
  }, [themeMode])

  const onChangeThemeConfig = (mode?: string) => {
    if (mode === undefined) {
      setThemeMode(themeMode == "light" ? "dark" : "light")
      return
    }
    setThemeMode(mode)
  }

  const value = useMemo(
    () => ({
      themeMode,
      onChangeThemeConfig,
      ...stickyMode,
    }),
    [themeMode, onChangeThemeConfig, stickyMode],
  )
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within an ThemeProvider")
  }
  return context
}
