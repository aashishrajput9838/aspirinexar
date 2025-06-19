"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import SpotifyFooter from '../../components/SpotifyFooter';

export default function PremiumPage() {
  const [open, setOpen] = React.useState<number | null>(null);

  const faqData = [
    {
      q: "How does Aspirinexar Premium remove ads?",
      a: "Aspirinexar Premium disables all advertisements across the platform, giving you a seamless and distraction-free experience.",
    },
    {
      q: "What features do I get with Aspirinexar Premium?",
      a: "You get an ad-free experience, priority support, and help support the ongoing development of Aspirinexar.",
    },
    {
      q: "How do I subscribe to a Premium plan?",
      a: "Simply choose a plan above and follow the steps to complete your purchase. You may need to log in or sign up first.",
    },
    {
      q: "Can I cancel my Premium subscription anytime?",
      a: "Yes, you can cancel your subscription at any time from your account settings. Your Premium benefits will remain until the end of your billing period.",
    },
    {
      q: "Is my payment information secure?",
      a: "Yes, we use secure payment gateways to process your transactions and never store your payment details on our servers.",
    },
    {
      q: "What happens if my payment fails?",
      a: "If your payment fails, your Premium benefits may be paused until the payment is completed. You will receive an email with instructions if this happens.",
    },
    {
      q: "Do I need to log in to use Premium features?",
      a: "Yes, you need to be logged in to access Premium features and manage your subscription.",
    },
    {
      q: "Who can I contact for Premium support?",
      a: "You can reach out to our support team via the support page for any Premium-related queries.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full bg-black text-white py-3">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link href="/" className="flex items-center space-x-2 cursor-pointer">
                <Image src="/new logo.jpg" alt="Aspirinexar Logo" width={50} height={50} className="rounded-full my-0" quality={100} />
                <h1 className="text-xl flex items-end alfa-slab-one-regular hover:text-green-500 transition-colors">
                  Aspirinexar<sup className="text-xs ml-0.5 mb-2">®</sup>
                </h1>
              </Link>
              <span className="text-sm font-medium text-green-400">Premium</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Go Premium. Remove Ads.</h1>
          <p className="text-lg mb-6 text-gray-200">Enjoy an ad-free experience and support Aspirinexar. Choose a plan that fits you best!</p>
        </div>
      </section>

      {/* Plans Section */}
      <section className="px-8 py-16 text-white max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Choose your plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Monthly Plan */}
          <div className="bg-neutral-800 p-8 rounded-lg flex flex-col items-center hover:bg-neutral-700 transition-colors">
            <h3 className="font-bold text-2xl mb-2">Monthly</h3>
            <p className="text-4xl font-extrabold text-green-400 mb-2">₹29</p>
            <p className="text-neutral-400 mb-4">per month, billed monthly</p>
            <ul className="text-left mb-6 space-y-2">
              <li>✔️ Remove all ads</li>
              <li>✔️ Support the developer</li>
              <li>✔️ Priority support</li>
            </ul>
            <Button className="bg-green-500 text-black font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform w-full">Buy Monthly</Button>
          </div>
          {/* Yearly Plan */}
          <div className="bg-neutral-800 p-8 rounded-lg flex flex-col items-center hover:bg-neutral-700 transition-colors">
            <h3 className="font-bold text-2xl mb-2">Yearly</h3>
            <p className="text-4xl font-extrabold text-green-400 mb-2">₹249</p>
            <p className="text-neutral-400 mb-4">per year, billed yearly</p>
            <ul className="text-left mb-6 space-y-2">
              <li>✔️ Remove all ads</li>
              <li>✔️ Support the developer</li>
              <li>✔️ Priority support</li>
              <li>✔️ Save 30% vs monthly</li>
            </ul>
            <Button className="bg-green-500 text-black font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform w-full">Buy Yearly</Button>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="px-8 py-12 text-white max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Affordable plans for any situation</h2>
        <p className="text-lg mb-8 text-gray-300">Choose a Premium plan and enjoy an ad-free experience on all your devices. Pay in various ways. Cancel anytime.</p>
        <div className="flex justify-center gap-4 mb-2 flex-wrap">
          {/* UPI */}
          <span className="bg-white rounded-lg px-6 py-3 flex items-center justify-center"><span className="text-black font-bold">BHIM-UPI</span></span>
          {/* PhonePe */}
          <span className="bg-white rounded-lg px-4 py-3 flex items-center justify-center"><svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#6f42c1"/><text x="16" y="21" textAnchor="middle" fontSize="16" fill="white" fontFamily="Arial">फ</text></svg></span>
          {/* Google Pay */}
          <span className="bg-white rounded-lg px-4 py-3 flex items-center justify-center"><svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#4285F4"/><text x="16" y="21" textAnchor="middle" fontSize="16" fill="white" fontFamily="Arial">G</text></svg></span>
          {/* Paytm */}
          <span className="bg-white rounded-lg px-4 py-3 flex items-center justify-center"><svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#00baf2"/><text x="16" y="21" textAnchor="middle" fontSize="16" fill="white" fontFamily="Arial">₹</text></svg></span>
        </div>
        <a href="#" className="text-white underline text-base hover:text-green-300">+ 6 more</a>
      </section>

      {/* FAQ Section */}
      <section className="px-8 py-16 text-white max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Questions?</h2>
        <p className="text-center text-lg mb-8 text-gray-300">We've got answers.<br />Find more answers in our <Link href="/support" className="underline text-green-300 hover:text-green-400">support page</Link>.</p>
        <div className="space-y-4">
          {faqData.map((item, idx) => (
            <div key={item.q} className="bg-neutral-900 rounded-lg">
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-lg focus:outline-none hover:bg-neutral-800 transition-colors"
                onClick={() => setOpen(idx === open ? null : idx)}
                aria-expanded={open === idx}
              >
                {item.q}
                <span className="ml-4">{open === idx ? '▲' : '▼'}</span>
              </button>
              {open === idx && (
                <div className="px-6 pb-4 text-gray-300 text-base animate-fade-in">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <SpotifyFooter />
    </div>
  );
} 