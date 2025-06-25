
import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'Features', url: '#features', icon: Briefcase },
    { name: 'About', url: '#about', icon: User },
    { name: 'Contact', url: '#contact', icon: FileText }
  ]

  return (
    <div className="w-full">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Shoply
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-700 hover:text-purple-600 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Sign In
              </button>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-16">
        <NavBar items={navItems} />
      </div>
    </div>
  )
}
