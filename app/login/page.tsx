import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-4">
      <div className="w-full max-w-md rounded-lg bg-[#121212] p-8 text-white">
        <div className="flex justify-center mb-8">
          <Image src="/new logo.jpg" alt="Aspirinexar Logo" width={120} height={40} className="rounded-full" />
        </div>
        <h2 className="mb-6 text-center text-3xl font-bold text-white">
          Log in to Spotify
        </h2>

        <div className="space-y-4 mb-8">
          <Button
            variant="outline"
            className="w-full bg-white text-black border border-gray-300 rounded-full py-3 flex items-center justify-center"
          >
            <Image src="/google_icon.png" alt="Google Icon" width={20} height={20} className="mr-2" />
            Continue with Google
          </Button>
          <Button
            variant="outline"
            className="w-full bg-white text-black border border-gray-300 rounded-full py-3 flex items-center justify-center"
          >
            <Image src="/facebook_icon.png" alt="Facebook Icon" width={20} height={20} className="mr-2" />
            Continue with Facebook
          </Button>
          <Button
            variant="outline"
            className="w-full bg-white text-black border border-gray-300 rounded-full py-3 flex items-center justify-center"
          >
            <Image src="/apple_icon.png" alt="Apple Icon" width={20} height={20} className="mr-2" />
            Continue with Apple
          </Button>
          <Button
            variant="outline"
            className="w-full bg-white text-black border border-gray-300 rounded-full py-3 flex items-center justify-center"
          >
            Continue with phone number
          </Button>
        </div>

        <div className="relative flex items-center mb-8">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="flex-shrink mx-4 text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-400 mb-2">
              Email or username
            </label>
            <Input
              id="email"
              type="text"
              placeholder="Email or username"
              required
              className="mt-1 block w-full rounded-md border border-gray-600 bg-[#333333] text-white focus:outline-none focus:ring-0 focus:border-gray-500 p-3"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#1DB954] text-black font-bold rounded-full py-3 hover:bg-[#1ed760]"
          >
            Continue
          </Button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-400">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-semibold text-white hover:underline">
            Sign up for Spotify
          </Link>
        </p>
      </div>

      <p className="absolute bottom-4 text-xs text-gray-500 text-center px-4">
        This site is protected by reCAPTCHA and the Google{" "}
        <Link href="#" className="underline text-gray-500 hover:underline">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link href="#" className="underline text-gray-500 hover:underline">
          Terms of Service
        </Link>{" "}
        apply.
      </p>
    </div>
  )
} 