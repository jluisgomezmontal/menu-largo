import { MenuDigital } from "./components/MenuDigital"
import { ThemeProvider } from "./components/ThemeContext"
import "./index.css"

function App() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-50">
        <MenuDigital />
      </main>
    </ThemeProvider>
  )
}

export default App
