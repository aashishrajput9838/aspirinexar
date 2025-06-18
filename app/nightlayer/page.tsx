"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

type Review = { rating: number; text: string; date: string };

export default function NightLayer() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("nightlayerReviews");
      if (stored) setReviews(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("nightlayerReviews", JSON.stringify(reviews));
    }
  }, [reviews]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (rating > 0 && text.trim()) {
      setReviews((prev: Review[]) => [
        { rating, text, date: new Date().toISOString() },
        ...prev.slice(0, 9)
      ]);
      setRating(0);
      setHover(0);
      setText("");
    }
  };

  const avgRating = reviews.length
    ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
            ← Back to Home
          </Link>
        </div>

        <div className="text-center mb-8">
          <Image 
            src="/images/nightLayer.png" 
            alt="NightLayer Logo" 
            width={200} 
            height={200} 
            className="mx-auto mb-4"
          />
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            NightLayer
          </h1>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 mb-8 shadow-xl">
          <p className="text-lg mb-4">
            NightLayer is a simple Python application that creates a semi-transparent black overlay on your laptop screen. 
            It can be toggled on and off, and its opacity adjusted, using keyboard shortcuts or a system tray icon.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Features</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Toggle Overlay using <code className="bg-gray-700 px-2 py-1 rounded">Ctrl + Space</code></span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Adjust opacity with <code className="bg-gray-700 px-2 py-1 rounded">Ctrl + Arrow Keys</code></span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>System tray integration for easy control</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Minimal interface, runs in background</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Standalone executable for Windows</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Installation</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">From Source</h3>
                <pre className="bg-gray-700 p-3 rounded-lg overflow-x-auto">
                  <code>git clone https://github.com/aashishrajput9838/NightLayer.git
cd NightLayer
pip install -r requirements.txt</code>
                </pre>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Run the Application</h3>
                <pre className="bg-gray-700 p-3 rounded-lg overflow-x-auto">
                  <code>python night_layer.py</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gray-800 rounded-lg p-6 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Controls</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Keyboard Shortcuts</h3>
              <ul className="space-y-2">
                <li><code className="bg-gray-700 px-2 py-1 rounded">Ctrl + Space</code> - Toggle Overlay</li>
                <li><code className="bg-gray-700 px-2 py-1 rounded">Ctrl + Left Arrow</code> - Increase Opacity</li>
                <li><code className="bg-gray-700 px-2 py-1 rounded">Ctrl + Right Arrow</code> - Decrease Opacity</li>
                <li><code className="bg-gray-700 px-2 py-1 rounded">Esc</code> - Exit Application</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">System Tray</h3>
              <ul className="space-y-2">
                <li>Right-click the system tray icon for options</li>
                <li>Turn On/Off the overlay</li>
                <li>Close the application</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gray-800 rounded-lg p-6 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Building Executable</h2>
          <p className="mb-4">To create a standalone executable for Windows:</p>
          <pre className="bg-gray-700 p-3 rounded-lg overflow-x-auto">
            <code>pyinstaller --onefile --noconsole night_layer.py</code>
          </pre>
          <p className="mt-4 text-sm text-gray-400">
            The executable will be created in the dist folder.
          </p>
        </div>

        <div className="mt-8 bg-gray-800 rounded-lg p-6 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Download</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-gray-700 p-4 rounded-lg">
              <div>
                <h3 className="text-lg font-medium text-white">NightLayer v1.0.0</h3>
                <p className="text-sm text-gray-400">Latest stable release</p>
              </div>
              <a
                href="https://github.com/aashishrajput9838/NightLayer/releases/tag/v1.0.0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Download
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://github.com/aashishrajput9838/NightLayer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
          >
            View on GitHub
          </a>
        </div>

        <div className="mt-8 bg-gray-800 rounded-lg p-6 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">User Reviews</h2>
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Average Rating:</span>
              {avgRating !== null ? (
                <>
                  <span className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`h-5 w-5 ${i < Math.round(avgRating) ? 'text-yellow-400' : 'text-gray-300'}`} fill={i < Math.round(avgRating) ? '#facc15' : 'none'} />
                    ))}
                    <span className="ml-1 text-sm text-gray-600">{avgRating.toFixed(1)} ({reviews.length} reviews)</span>
                  </span>
                </>
              ) : (
                <span className="text-gray-500">No reviews yet</span>
              )}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="mb-8 p-4 bg-gray-50 rounded-lg shadow">
            <div className="mb-2 font-medium">Leave a review:</div>
            <div className="flex items-center mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => setRating(i + 1)}
                  onMouseEnter={() => setHover(i + 1)}
                  onMouseLeave={() => setHover(0)}
                  className="focus:outline-none"
                >
                  <Star className={`h-7 w-7 ${i < (hover || rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill={i < (hover || rating) ? '#facc15' : 'none'} />
                </button>
              ))}
            </div>
            <textarea
              className="w-full border rounded p-2 mb-2"
              rows={3}
              placeholder="Write your review..."
              value={text}
              onChange={e => setText(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              disabled={rating === 0 || !text.trim()}
            >
              Submit Review
            </button>
          </form>
          <div>
            <h2 className="text-xl font-semibold mb-2">Recent Reviews</h2>
            {reviews.length === 0 && <div className="text-gray-500">No reviews yet.</div>}
            <ul className="space-y-4">
              {reviews.map((r, idx) => (
                <li key={idx} className="bg-white rounded-lg shadow p-4">
                  <div className="flex items-center gap-2 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < r.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill={i < r.rating ? '#facc15' : 'none'} />
                    ))}
                    <span className="ml-2 text-xs text-gray-400">{new Date(r.date).toLocaleDateString()}</span>
                  </div>
                  <div className="text-gray-800">{r.text}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 