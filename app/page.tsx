"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  Code,
  Search,
  Moon,
  Sun,
  Star
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

const translations: Record<'en' | 'hi', Record<string, string>> = {
  en: {
    home: "Home",
    premium: "Premium",
    support: "Support",
    download: "Download",
    installApp: "Install App",
    signup: "Sign up",
    login: "Log In",
    searchPlaceholder: "Looking for a software? Start typing...",
    innovation: "Innovation Meets Excellence",
    transform: "Transform Your",
    digitalFuture: "Digital Future",
    heroDesc: "Aspirinexar empowers businesses with cutting-edge technology solutions, innovative strategies, and exceptional digital experiences that drive growth and success.",
    ourSoftware: "Our Software",
    softwareSolutions: "Software Solutions",
    discover: "Discover our cutting-edge software products designed to transform your digital experience.",
    trending: "Trending Now",
    popular: "Popular Software",
    recentSearches: "Recent Searches",
    noMatches: "No matches found",
    learnMore: "Learn More",
    downloadBtn: "Download",
    supportAspirinexar: "Support Aspirinexar",
    madeWith: "Made with ❤️ by AASHISH RAJPUT",
    allRights: "All rights reserved. All trademarks are the property of their respective owners.",
  },
  hi: {
    home: "होम",
    premium: "प्रीमियम",
    support: "सहायता",
    download: "डाउनलोड",
    installApp: "ऐप इंस्टॉल करें",
    signup: "साइन अप",
    login: "लॉग इन",
    searchPlaceholder: "सॉफ्टवेयर खोजें... टाइप करना शुरू करें...",
    innovation: "नवाचार उत्कृष्टता से मिलता है",
    transform: "अपना",
    digitalFuture: "डिजिटल भविष्य बदलें",
    heroDesc: "Aspirinexar व्यवसायों को अत्याधुनिक तकनीकी समाधानों, नवाचार रणनीतियों और उत्कृष्ट डिजिटल अनुभवों के साथ सशक्त बनाता है।",
    ourSoftware: "हमारा सॉफ्टवेयर",
    softwareSolutions: "सॉफ्टवेयर समाधान",
    discover: "हमारे अत्याधुनिक सॉफ्टवेयर उत्पादों की खोज करें जो आपके डिजिटल अनुभव को बदलने के लिए डिज़ाइन किए गए हैं।",
    trending: "ट्रेंडिंग",
    popular: "लोकप्रिय सॉफ्टवेयर",
    recentSearches: "हाल की खोजें",
    noMatches: "कोई मेल नहीं मिला",
    learnMore: "और जानें",
    downloadBtn: "डाउनलोड",
    supportAspirinexar: "Aspirinexar सहायता",
    madeWith: "❤️ के साथ बनाया गया - AASHISH RAJPUT",
    allRights: "सभी अधिकार सुरक्षित। सभी ट्रेडमार्क उनके संबंधित मालिकों की संपत्ति हैं।",
  },
};

interface SearchResult {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  tags: string[];
  rating: number;
  download: string;
}

interface PopularSoftware extends SearchResult {
  count: number;
}

const softwareCards: SearchResult[] = [
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
        className="rounded-full"
      />
    ),
    tags: ["Productivity", "Automation"],
    rating: 4.8,
    download: "1.2M"
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
    tags: ["clock", "floating", "transparent", "CustomTkinter", "Python", "widget", "windows"],
    rating: 4.5,
    download: "https://github.com/aashishrajput9838/glasstick/releases",
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
    tags: ["overlay", "screen", "eye strain", "PyWin32", "Python", "windows", "opacity"],
    rating: 4.7,
    download: "https://github.com/aashishrajput9838/nightlayer/releases",
  },
]

export default function Component() {
  const [search, setSearch] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [popular, setPopular] = useState<PopularSoftware[]>([])
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1)
  const [darkMode, setDarkMode] = useState(false)
  const [language, setLanguage] = useState<'en' | 'hi'>('en')
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

  // Reset highlighted index when suggestions or search changes
  useEffect(() => {
    setHighlightedIndex(-1)
  }, [search, showSuggestions])

  // Load dark mode preference from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("darkMode");
      if (stored) setDarkMode(stored === "true");
    }
  }, []);

  // Save dark mode preference to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("darkMode", darkMode ? "true" : "false");
    }
  }, [darkMode]);

  // Load language preference from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("language");
      if (stored) setLanguage(stored as 'en' | 'hi');
    }
  }, []);

  // Save language preference to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language);
    }
  }, [language]);

  // Toggle dark mode
  const toggleDarkMode = () => setDarkMode(d => !d);

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

  const handleSuggestionClick = (result: SearchResult) => {
    setSearch(result.title)
    setShowSuggestions(false)
    router.push(result.link)
  }

  const suggestions = search.trim()
    ? softwareCards.filter(card => {
        const q = search.toLowerCase();
        return (
          card.title.toLowerCase().includes(q) ||
          card.description.toLowerCase().includes(q) ||
          (card.tags && card.tags.some(tag => tag.toLowerCase().includes(q)))
        );
      })
    : []

  const t = translations[language];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950`}>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-black dark:bg-gray-950 text-white py-3">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image src="/new logo.jpg" alt="Aspirinexar Logo" width={50} height={50} className="rounded-full my-0" />
              <div className="relative flex items-center bg-gray-800 rounded-full pl-3 pr-2 py-2 ml-4">
                <Search className="h-5 w-5 text-gray-400 mr-2" />
                <input 
                  type="text" 
                  placeholder={t.searchPlaceholder}
                  className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-64"
                  value={search}
                  onChange={e => {
                    setSearch(e.target.value)
                    setShowSuggestions(true)
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                  onKeyDown={e => {
                    if (showSuggestions && search.trim() && suggestions.length > 0) {
                      if (e.key === "ArrowDown") {
                        e.preventDefault()
                        setHighlightedIndex(i => (i + 1) % suggestions.length)
                      } else if (e.key === "ArrowUp") {
                        e.preventDefault()
                        setHighlightedIndex(i => (i - 1 + suggestions.length) % suggestions.length)
                      } else if (e.key === "Enter") {
                        if (highlightedIndex >= 0 && highlightedIndex < suggestions.length) {
                          handleSuggestionClick(suggestions[highlightedIndex])
                        } else if (search.trim()) {
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
                      }
                    } else if (e.key === "Enter" && search.trim()) {
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
                    <div className="px-4 py-2 text-xs text-gray-500">{t.recentSearches}</div>
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
                  <div
                    className={`absolute left-0 top-12 w-full bg-white rounded-b-lg shadow-lg z-50 transition-all duration-300 transform
                      ${showSuggestions ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
                    style={{ willChange: 'opacity, transform' }}
                  >
                    {suggestions.length > 0 ? (
                      suggestions.map((s, idx) => (
                        <div
                          key={s.title}
                          className={`flex items-start px-4 py-2 text-black hover:bg-blue-100 cursor-pointer ${highlightedIndex === idx ? 'bg-blue-100' : ''}`}
                          onMouseDown={() => handleSuggestionClick(s)}
                          aria-selected={highlightedIndex === idx}
                        >
                          <span className="mt-0.5">{s.icon}</span>
                          <div>
                            <div className="font-medium flex items-center gap-2">{s.title}
                              <span className="flex items-center">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star key={i} className={`h-4 w-4 ${i < Math.round(s.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill={i < Math.round(s.rating) ? '#facc15' : 'none'} />
                                ))}
                                <span className="ml-1 text-xs text-gray-500">{s.rating.toFixed(1)}</span>
                              </span>
                            </div>
                            <div className="text-xs text-gray-500">{s.description}</div>
                            <div className="flex gap-2 mt-2">
                              <button
                                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-xs transition"
                                onMouseDown={e => {
                                  e.preventDefault();
                                  router.push(s.link);
                                }}
                              >
                                {t.learnMore}
                              </button>
                              {s.download && (
                                <a
                                  href={s.download}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-xs transition"
                                  onMouseDown={e => e.stopPropagation()}
                                >
                                  {t.downloadBtn}
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="px-4 py-2 text-gray-500">{t.noMatches}</div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#home" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                {t.home}
              </Link>
              <Link href="/premium" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                {t.premium}
              </Link>
              <Link href="/support" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                {t.support}
              </Link>
              <Link href="/download" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                {t.download}
              </Link>
              <Link href="#install-app" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                {t.installApp}
              </Link>
              <Link href="/signup" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                {t.signup}
              </Link>
              <Link href="/login">
                <Button className="bg-white text-black font-bold px-5 py-2 rounded-full hover:scale-105 transition-transform">
                  {t.login}
                </Button>
              </Link>
              <button
                onClick={toggleDarkMode}
                className="ml-4 p-2 rounded-full bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-300" />}
              </button>
              <select
                value={language}
                onChange={e => setLanguage(e.target.value as 'en' | 'hi')}
                className="ml-4 p-2 rounded bg-gray-200 text-black text-xs"
                aria-label="Select language"
              >
                <option value="en">EN</option>
                <option value="hi">हिंदी</option>
              </select>
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
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">🚀 {t.innovation}</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  {t.transform}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {" "}{t.digitalFuture}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {t.heroDesc}
                </p>
                <Link href="/download">
                  <Button className="mt-6 px-8 py-3 text-lg font-bold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg transition-transform hover:scale-105">
                    {t.downloadBtn}
                  </Button>
                </Link>
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
      <section id="software" className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-700">{t.ourSoftware}</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Innovative
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}{t.softwareSolutions}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.discover}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareCards.map(card => (
              <Card key={card.title} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    {card.icon}
                </div>
                  <CardTitle className="text-xl flex items-center gap-2">{card.title}
                    <span className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < Math.round(card.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill={i < Math.round(card.rating) ? '#facc15' : 'none'} />
                      ))}
                      <span className="ml-1 text-xs text-gray-500">{card.rating.toFixed(1)}</span>
                    </span>
                  </CardTitle>
                  <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                  <Link href={card.link}>
                  <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      {t.learnMore}
                  </Button>
                </Link>
              </CardContent>
            </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Software Section */}
      <div className="mt-16 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-6">
          <Badge className="bg-purple-100 text-purple-700">{t.popular}</Badge>
          <h3 className="text-2xl lg:text-3xl font-bold">{t.popular}</h3>
        </div>
        <ul className="space-y-8 w-full max-w-3xl">
          {popular.map(card => (
            <li key={card.title} className="flex items-center gap-8 px-4 py-3 hover:bg-blue-50 transition cursor-pointer rounded-xl" onClick={() => router.push(card.link)}>
              <span className="flex-shrink-0">{card.icon}</span>
              <div>
                <div className="font-semibold text-xl text-gray-900">{card.title}</div>
                <div className="text-base text-gray-500">{card.description}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-white dark:bg-gray-950 border-t dark:border-gray-800">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Aspirinexar Inc. {t.allRights}
            <br />
            {t.madeWith}
          </div>
        </div>
      </footer>
    </div>
  )
}
