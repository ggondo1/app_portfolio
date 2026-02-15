"use client"

import { useEffect, useState } from "react"
import { Moon , Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

const DEFAULT_THEME = "light"

export function ThemeToggle() {
  const [theme,setTheme] = useState(DEFAULT_THEME)

  useEffect(() =>
  {
    const savedTheme = localStorage.getItem("theme") || DEFAULT_THEME
    document.documentElement.classList.toggle("dark" ,savedTheme === "dark")
  }, [])


  const ThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark")

  }
  return (
    <Button variant="ghost" size="icon" onClick={ThemeToggle}>
  {theme === "light" ? (
    <Moon className="h-5 w-5" />
  ) : (
    <Sun className="h-5 w-5" />
  )}
</Button>
  )
}