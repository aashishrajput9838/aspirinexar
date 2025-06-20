import Image from "next/image";
import Link from "next/link";

export default function DownloadPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center bg-black">
        <Image
          src="/images/GlassStick.png" // Placeholder hero image
          alt="Aspirinexar Hero"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4">Download Aspirinexar</h1>
          <p className="text-2xl mb-6 text-center">
            Experience Aspirinexar on your device. Get the app for mobile or PC.
          </p>
        </div>
      </div>

      {/* Download Section */}
      <div className="flex flex-col items-center py-12 bg-white">
        <h2 className="text-3xl font-semibold mb-4">Get Aspirinexar for:</h2>
        <div className="flex gap-6">
          <a
            href="#" // Replace with your App Store link
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/Typink-logo.png" // Placeholder for App Store badge
              alt="Download on the App Store"
              width={120}
              height={40}
            />
          </a>
          <a
            href="#" // Replace with your Play Store link
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/nightLayer.png" // Placeholder for Google Play badge
              alt="Get it on Google Play"
              width={120}
              height={40}
            />
          </a>
          <a
            href="#" // Replace with your Windows/PC software link
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/window.svg" // Placeholder for Windows badge
              alt="Download for Windows"
              width={120}
              height={40}
            />
          </a>
        </div>
      </div>
    </div>
  );
} 