import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Globe } from 'lucide-react';

export default function SpotifyFooter() {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-8">
          <div className="md:col-span-1">
            <Image src="/InShot_20240426_153104300.jpg" alt="Aspirinexar Logo" width={50} height={50} className="rounded-lg my-0" quality={100} />
          </div>

          <div className="md:col-span-1">
            <h3 className="text-gray-400 font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Jobs</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">For the Record</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-gray-400 font-bold mb-4">Communities</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">For Artists</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Developers</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Advertising</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Investors</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Vendors</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-gray-400 font-bold mb-4">Useful Links</h3>
            <ul className="space-y-3">
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Support</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Web Player</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Free Mobile App</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Aspirinexar</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-gray-400 font-bold mb-4">Aspirinexar Plans</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Premium Individual</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Premium Duo</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Premium Family</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Premium Student</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Aspirinexar Free</Link></li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors"><svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.084 10.638a2.533 2.533 0 11-5.067 0 2.533 2.533 0 015.067 0zM12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM18 6a1 1 0 110 2 1 1 0 010-2z" /></svg></a> {/* Instagram */}
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors"><svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5.793 8.207L12 15.001 6.207 9.207l1.414-1.414L12 12.172l4.38-4.38 1.414 1.414z" /></svg></a> {/* X/Twitter - simplified for example */}
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors"><svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.36 7.427h-1.637v-1.12c0-.528.252-.832.842-.832h.795V5.518H14.1c-1.84 0-2.583 1.11-2.583 2.656v1.253h-1.74V12h1.74v7h2.82V12h1.884l.28-2.573z" /></svg></a> {/* Facebook */}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <ul className="flex space-x-6 mb-4 md:mb-0">
            <li><Link href="#" className="hover:text-white transition-colors">Legal</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Safety & Privacy Center</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Cookies</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">About Ads</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Accessibility</Link></li>
          </ul>
          <div className="flex items-center space-x-2">
            <Globe className="h-4 w-4" />
            <span>India (English)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}