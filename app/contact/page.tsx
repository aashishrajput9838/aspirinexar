'use client';

import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Mail, Phone, MapPin, Search, Globe, ChevronRight } from "lucide-react";
import SpotifyFooter from '../../components/SpotifyFooter';

export default function ContactUsPage() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const categories = [
    { id: 'payments', name: 'Payments & billing', description: 'Solutions for payment and billing issues.', icon: <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg> },
    { id: 'account', name: 'Manage your account', description: 'Help with account settings, profile, and login.', icon: <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> },
    { id: 'premium', name: 'Premium plans', description: 'Information about Premium features and subscriptions.', icon: <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg> },
    { id: 'features', name: 'In-app features', description: 'Guidance on using various features within the app.', icon: <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg> },
    { id: 'devices', name: 'Devices & troubleshooting', description: 'Help with device compatibility and common issues.', icon: <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg> },
    { id: 'safety', name: 'Safety & privacy', description: 'Understanding and managing your safety and privacy settings.', icon: <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v3h8z" /></svg> },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* New Spotify-like Navbar */}
      <header className="sticky top-0 z-50 w-full bg-black text-white py-3">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-6">
              {/* Aspirinexar Logo */}
              <Link href="/" className="flex items-center space-x-2 cursor-pointer">
                <Image src="/InShot_20240426_153104300.jpg" alt="Aspirinexar Logo" width={50} height={50} className="rounded-lg my-0" quality={100} />
                <h1 className="text-xl flex items-end font-alfa-slab-one hover:text-green-500 transition-colors">
                  Aspirinexar<sup className="text-xs ml-0.5 mb-2">®</sup>
                </h1>
              </Link>
              <Link href="#premium" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Explore Premium
              </Link>
              <Link href="#install-app" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Install App
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <Globe className="h-5 w-5 text-gray-300" />
              <Link href="/signup" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Sign up
              </Link>
              <Link href="/login">
                <Button className="bg-green-500 text-black font-bold px-5 py-2 rounded-full hover:scale-105 transition-transform">
                  Log In
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content: Support Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">How can we help you?</h1>
          <p className="text-lg mb-6">
            <a href="/login" className="text-green-300 hover:underline">Log in</a> for faster help
          </p>
          <div className="relative w-full max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-6 w-6" />
            <Input 
              type="text" 
              placeholder="Search"
              className="w-full py-4 pl-12 pr-4 bg-gray-800 border-none rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="px-8 py-16 text-white max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Browse categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div key={category.name} className="bg-neutral-800 p-4 rounded-lg hover:bg-neutral-700 transition-colors cursor-pointer">
              <h3 className="font-bold mb-2">{category.name}</h3>
              <p className="text-neutral-400 text-sm">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="px-8 py-16 text-white text-center">
        <h2 className="text-4xl font-bold mb-8">Quick help</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-neutral-800 p-6 rounded-lg hover:bg-neutral-700 transition-colors cursor-pointer">
            <h3 className="font-bold text-lg mb-2">Account Help</h3>
            <p className="text-neutral-400 text-sm">Manage your account settings and profile.</p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg hover:bg-neutral-700 transition-colors cursor-pointer">
            <h3 className="font-bold text-lg mb-2">Payment Support</h3>
            <p className="text-neutral-400 text-sm">Troubleshoot payment issues and subscriptions.</p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg hover:bg-neutral-700 transition-colors cursor-pointer">
            <h3 className="font-bold text-lg mb-2">Troubleshooting</h3>
            <p className="text-neutral-400 text-sm">Find solutions to common technical problems.</p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg hover:bg-neutral-700 transition-colors cursor-pointer">
            <h3 className="font-bold text-lg mb-2">App Support</h3>
            <p className="text-neutral-400 text-sm">Get help with the Aspirinexar application.</p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg hover:bg-neutral-700 transition-colors cursor-pointer">
            <h3 className="font-bold text-lg mb-2">Privacy Settings</h3>
            <p className="text-neutral-400 text-sm">Understand and manage your privacy options.</p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg hover:bg-neutral-700 transition-colors cursor-pointer">
            <h3 className="font-bold text-lg mb-2">Contact Us</h3>
            <p className="text-neutral-400 text-sm">Reach out to our support team directly.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SpotifyFooter />
    </div>
  );
} 