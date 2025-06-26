
import { Home, User, Briefcase, FileText, Moon, Sun } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function NavBarDemo() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'Features', url: '#features', icon: Briefcase },
    { name: 'About', url: '#about', icon: User },
    { name: 'Contact', url: '#contact', icon: FileText }
  ]

  if (!mounted) {
    return null
  }

  return (
    <div className="w-full">
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
                Finpay
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg hover:bg-accent transition-colors"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5 text-foreground" />
                ) : (
                  <Moon className="h-5 w-5 text-foreground" />
                )}
              </button>
              <button className="text-foreground/80 hover:text-teal-600 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Log In
              </button>
              <button className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200">
                Get Started
              </button>
            </div>
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg hover:bg-accent transition-colors"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5 text-foreground" />
                ) : (
                  <Moon className="h-5 w-5 text-foreground" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-20">
        <NavBar items={navItems} />
      </div>
    </div>
  )
}
