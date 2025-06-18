"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Menu,
  Code,
  Clock,
  Search,
  Home
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Component() {
  const [search, setSearch] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [popular, setPopular] = useState<any[]>([])
  const router = useRouter()

  // Load recent searches from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("recentSearches")
      if (stored) setRecentSearches(JSON.parse(stored))
    }
  }, [])

  // Save recent searches to localStorage when they change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("recentSearches", JSON.stringify(recentSearches))
    }
  }, [recentSearches])

  // Load popular software counts from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("popularSoftware")
      if (stored) {
        const counts = JSON.parse(stored)
        // Sort by count and get top 3
        const sorted = softwareCards
          .map(card => ({ ...card, count: counts[card.title] || 0 }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 3)
        setPopular(sorted)
      }
    }
  }, [search])

  // Helper to increment popular count
  const incrementPopular = (title: string) => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("popularSoftware")
      const counts = stored ? JSON.parse(stored) : {}
      counts[title] = (counts[title] || 0) + 1
      localStorage.setItem("popularSoftware", JSON.stringify(counts))
    }
  }

  const handleSearchSelect = (term: string) => {
    setSearch(term)
    setShowSuggestions(true)
    // Increment popular count if matches a software
    const match = softwareCards.find(card => card.title.toLowerCase() === term.toLowerCase())
    if (match) incrementPopular(match.title)
  }

  const handleSuggestionClick = (s: any) => {
    setShowSuggestions(false)
    setSearch("")
    // Add to recent searches (avoid duplicates, max 5)
    setRecentSearches(prev => {
      const filtered = prev.filter(item => item.toLowerCase() !== s.title.toLowerCase())
      return [s.title, ...filtered].slice(0, 5)
    })
    incrementPopular(s.title)
    router.push(s.link)
  }

  const softwareCards = [
    {
      title: "Typink",
      link: "/typink",
      description: "A powerful auto-typing tool with a modern UI.",
      icon: (
        <Image
          src="/images/Typink-logo.png"
          alt="Typink Logo"
          width={95}
          height={95}
          className="rounded-full mr-2 border border-gray-200 bg-white"
        />
      ),
    },
    {
      title: "GlassTick",
      link: "/floating-clock",
      description: "A minimal, transparent floating clock widget.",
      icon: (
        <Image
          src="/images/GlassStick.png"
          alt="GlassTick Logo"
          width={95}
          height={95}
          className="rounded-full mr-2 border border-gray-200 bg-white"
        />
      ),
    },
    {
      title: "NightLayer",
      link: "/nightlayer",
      description: "A screen overlay tool to reduce eye strain.",
      icon: (
        <Image
          src="/images/nightLayer.png"
          alt="NightLayer Logo"
          width={95}
          height={95}
          className="rounded-full mr-2 border border-gray-200 bg-white"
        />
      ),
    },
  ]

  const suggestions = search.trim()
    ? softwareCards.filter(card =>
        card.title.toLowerCase().includes(search.toLowerCase())
      )
    : []

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-black text-white py-3">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image src="/new logo.jpg" alt="Aspirinexar Logo" width={50} height={50} className="rounded-full my-0" />
              
              <div className="flex space-x-6">
                <Link href="#home" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                  <Home className="h-5 w-5" />
                  <span className="text-sm font-medium">Home</span>
                </Link>
                <div className="relative flex items-center bg-gray-800 rounded-full pl-3 pr-2 py-2">
                  <Search className="h-5 w-5 text-gray-400 mr-2" />
                  <input 
                    type="text" 
                    placeholder="Looking for a software? Start typing..."
                    className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-64"
                    value={search}
                    onChange={e => {
                      setSearch(e.target.value)
                      setShowSuggestions(true)
                    }}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                    onKeyDown={e => {
                      if (e.key === "Enter" && search.trim()) {
                        // Add to recent searches (avoid duplicates, max 5)
                        setRecentSearches(prev => {
                          const filtered = prev.filter(item => item.toLowerCase() !== search.trim().toLowerCase())
                          return [search.trim(), ...filtered].slice(0, 5)
                        })
                        setShowSuggestions(false)
                        // Increment popular count if matches a software
                        const match = softwareCards.find(card => card.title.toLowerCase() === search.trim().toLowerCase())
                        if (match) incrementPopular(match.title)
                      }
                    }}
                  />
                  {/* Recent Searches Dropdown */}
                  {showSuggestions && !search.trim() && recentSearches.length > 0 && (
                    <div className="absolute left-0 top-12 w-full bg-white rounded-b-lg shadow-lg z-50">
                      <div className="px-4 py-2 text-xs text-gray-500">Recent Searches</div>
                      {recentSearches.map(term => (
                        <div
                          key={term}
                          className="px-4 py-2 text-black hover:bg-blue-100 cursor-pointer"
                          onMouseDown={() => handleSearchSelect(term)}
                        >
                          {term}
                        </div>
                      ))}
                    </div>
                  )}
                  {/* Suggestions Dropdown */}
                  {showSuggestions && search.trim() && (
                    <div className="absolute left-0 top-12 w-full bg-white rounded-b-lg shadow-lg z-50">
                      {suggestions.length > 0 ? (
                        suggestions.map(s => (
                          <div
                            key={s.title}
                            className="flex items-start px-4 py-2 text-black hover:bg-blue-100 cursor-pointer"
                            onMouseDown={() => handleSuggestionClick(s)}
                          >
                            <span className="mt-0.5">{s.icon}</span>
                            <div>
                              <div className="font-medium">{s.title}</div>
                              <div className="text-xs text-gray-500">{s.description}</div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="px-4 py-2 text-gray-500">No matches found</div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#premium" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Premium
              </Link>
              <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Support
              </Link>
              <Link href="#download" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Download
              </Link>
              <Link href="#install-app" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Install App
              </Link>
              <Link href="/signup" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Sign up
              </Link>
              <Link href="/login">
                <Button className="bg-white text-black font-bold px-5 py-2 rounded-full hover:scale-105 transition-transform">
                  Log In
                </Button>
              </Link>
            </nav>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">🚀 Innovation Meets Excellence</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Transform Your
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {" "}
                    Digital Future
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Aspirinexar empowers businesses with cutting-edge technology solutions, innovative strategies, and
                  exceptional digital experiences that drive growth and success.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-20" />
              <div className="relative w-full h-96 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden animate-gradient-pulse">
                <div className="absolute w-64 h-64 bg-white/10 rounded-full blur-xl animate-float-glow" />
                <Code className="h-24 w-24 text-white opacity-75 animate-pulse-fast" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Showcase Section */}
      <section id="software" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-700">Our Software</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Innovative
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Software Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our cutting-edge software products designed to transform your digital experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareCards.map(card => (
              <Card key={card.title} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    {card.icon}
                  </div>
                  <CardTitle className="text-xl">{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={card.link}>
                    <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Software Section */}
      {popular.length > 0 && (
        <section className="py-8">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center space-y-2 mb-4">
              <Badge className="bg-purple-100 text-purple-700">Trending Now</Badge>
            </div>
            <ul className="max-w-md mx-auto divide-y divide-gray-200 bg-white/70 rounded-xl shadow-sm">
              {popular.map(card => (
                <li key={card.title} className="flex items-center gap-4 px-4 py-3 hover:bg-blue-50 transition cursor-pointer" onClick={() => router.push(card.link)}>
                  <span>{card.icon}</span>
                  <div className="flex-1">
                    <div className="font-semibold text-base text-gray-900">{card.title}</div>
                  </div>
                  <span className="text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-0.5 rounded-full">Trending</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-8 bg-white border-t">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Aspirinexar Inc. All rights reserved. All trademarks are the property of their respective owners.
            <br />
            Made with ❤️ by AASHISH RAJPUT
          </div>
        </div>
      </footer>
    </div>
  )
}
