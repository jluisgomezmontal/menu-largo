"use client"

import { createContext, useState, useEffect, useContext } from "react"

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    // Cargar tema desde localStorage al iniciar
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setTheme(savedTheme)
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark")
    }
  }, [])

  useEffect(() => {
    // Aplicar clase dark al elemento html cuando cambia el tema
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    // Guardar en localStorage
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}
