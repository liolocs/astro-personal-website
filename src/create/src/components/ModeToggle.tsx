import * as React from "react"
import { MoonIcon, SunIcon } from "@phosphor-icons/react"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const [theme, setThemeState] = React.useState<
    "theme-light" | "dark" | "system"
  >("theme-light")

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setThemeState(isDarkMode ? "dark" : "theme-light")
  }, [])

  React.useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    document.documentElement.classList[isDark ? "add" : "remove"]("dark")
  }, [theme])

  return theme === "theme-light" ? (
      <Button onClick={() => setThemeState("dark")} variant="neutral" size="icon" className="bg-foreground text-secondary-background cursor-pointer">
        <MoonIcon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    ) : (
      <Button onClick={() => setThemeState("theme-light")} variant="neutral" size="icon" className="bg-foreground text-secondary-background cursor-pointer">
        <SunIcon className="h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )  
}