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

export default function Component() {
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
                    placeholder="What do you want to play?"
                    className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-64"
                  />
                </div>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#premium" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Premium
              </Link>
              <Link href="/support" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
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
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Typink</CardTitle>
                <CardDescription>
                  A powerful auto-typing tool with a modern UI that helps you automate text input with precision and control.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Precise Speed Control (1ms increments)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Floating Control Window
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Pause/Resume with Countdown
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Real-time Progress Tracking
                  </li>
                </ul>
                <div className="mt-4 space-y-2">
                  <Badge className="bg-blue-100 text-blue-700">Python</Badge>
                  <Badge className="bg-purple-100 text-purple-700">CustomTkinter</Badge>
                  <Badge className="bg-green-100 text-green-700">PyAutoGUI</Badge>
                </div>
                <Link href="/typink">
                  <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">GlassTick</CardTitle>
                <CardDescription>
                  A minimal, transparent floating clock widget that stays on top of other windows with customizable settings.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Always on Top
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Transparent Background
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Draggable Interface
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Customizable Settings
                  </li>
                </ul>
                <div className="mt-4 space-y-2">
                  <Badge className="bg-blue-100 text-blue-700">Python</Badge>
                  <Badge className="bg-purple-100 text-purple-700">CustomTkinter</Badge>
                  <Badge className="bg-green-100 text-green-700">Windows</Badge>
                </div>
                <Link href="/floating-clock">
                  <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <CardTitle className="text-xl">NightLayer</CardTitle>
                <CardDescription>
                  A screen overlay tool that creates a semi-transparent black layer to reduce eye strain, with customizable opacity and keyboard shortcuts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Toggle with Ctrl + Space
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Adjustable Opacity
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    System Tray Integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Minimal Interface
                  </li>
                </ul>
                <div className="mt-4 space-y-2">
                  <Badge className="bg-blue-100 text-blue-700">Python</Badge>
                  <Badge className="bg-purple-100 text-purple-700">PyWin32</Badge>
                  <Badge className="bg-green-100 text-green-700">Windows</Badge>
                </div>
                <Link href="/nightlayer">
                  <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
