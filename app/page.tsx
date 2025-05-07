import { MenuDigital } from "@/components/menu-digital"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <main className="min-h-screen bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-50">
        <MenuDigital />
      </main>
    </ThemeProvider>
  )
}
