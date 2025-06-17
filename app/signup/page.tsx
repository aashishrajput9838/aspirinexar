import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-4">
      <div className="w-full max-w-md rounded-lg bg-[#121212] p-8 text-white">
        <div className="flex justify-center mb-8">
          <Image src="/new logo.jpg" alt="Aspirinexar Logo" width={120} height={40} className="rounded-full" />
        </div>
        <h2 className="mb-6 text-center text-3xl font-bold text-white">
          Sign up to start listening
        </h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-400 mb-2">
              Email address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="name@domain.com"
              required
              className="mt-1 block w-full rounded-md border border-gray-600 bg-[#282828] text-white focus:outline-none focus:ring-0 focus:border-gray-500 p-3"
            />
            <Link href="#" className="block text-sm text-[#1DB954] mt-2 hover:underline">
              Use phone number instead.
            </Link>
          </div>
          <Button
            type="submit"
            className="w-full bg-[#1DB954] text-black font-bold rounded-full py-3 hover:bg-[#1ed760]"
          >
            Next
          </Button>
        </form>

        <div className="relative flex items-center my-8">
          <div className="flex-grow border-t border-gray-700"></div>
          <span className="flex-shrink mx-4 text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-700"></div>
        </div>

        <div className="space-y-4 mb-8">
          <Button
            variant="outline"
            className="w-full bg-white text-black border border-gray-400 rounded-full py-3 flex items-center justify-center hover:bg-gray-50"
          >
            <Image src="/google_icon.png" alt="Google Icon" width={20} height={20} className="mr-2" />
            Sign up with Google
          </Button>
          <Button
            variant="outline"
            className="w-full bg-white text-black border border-gray-400 rounded-full py-3 flex items-center justify-center hover:bg-gray-50"
          >
            <Image src="/facebook_icon.png" alt="Facebook Icon" width={20} height={20} className="mr-2" />
            Sign up with Facebook
          </Button>
          <Button
            variant="outline"
            className="w-full bg-white text-black border border-gray-400 rounded-full py-3 flex items-center justify-center hover:bg-gray-50"
          >
            <Image src="/apple_icon.png" alt="Apple Icon" width={20} height={20} className="mr-2" />
            Sign up with Apple
          </Button>
        </div>

        <p className="mt-8 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="font-bold text-black hover:underline">
            Log in here.
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