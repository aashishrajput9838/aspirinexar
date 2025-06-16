import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NightLayer() {
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
      </div>
    </div>
  );
} 