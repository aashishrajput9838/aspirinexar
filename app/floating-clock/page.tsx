"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, Github, Settings, Clock, Layers, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

type Review = { rating: number; text: string; date: string };

export default function FloatingClockPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("glasstickReviews");
      if (stored) setReviews(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("glasstickReviews", JSON.stringify(reviews));
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/aashishrajput9838/GlassTick" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2">
                  <Github className="h-4 w-4" />
                  View on GitHub
                </Button>
              </a>
              <a href="https://github.com/aashishrajput9838/GlassTick/releases/tag/v1.0.1" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 gap-2">
                  <Download className="h-4 w-4" />
                  Download v1.0.1
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              GlassTick
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A minimal, transparent floating clock widget that stays on top of other windows with customizable settings.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="mb-4">Floating Widget</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  GlassTick - Minimal & Elegant
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  A minimal, transparent floating clock widget that stays on top of other windows. Features a clean Windows 8.1 style interface with customizable settings.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a href="https://github.com/aashishrajput9838/GlassTick/releases/tag/v1.0.1" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg rounded-lg shadow-lg flex items-center justify-center">
                      <Download className="w-5 h-5 mr-2" />
                      Download GlassTick v1.0.1
                    </Button>
                  </a>
                  <a href="https://github.com/aashishrajput9838/GlassTick" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="px-8 py-3 text-lg rounded-lg shadow-lg flex items-center justify-center">
                      <Github className="w-5 h-5 mr-2" />
                      View Source Code
                    </Button>
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge className="bg-blue-100 text-blue-700">Python</Badge>
                <Badge className="bg-purple-100 text-purple-700">CustomTkinter</Badge>
                <Badge className="bg-green-100 text-green-700">Windows</Badge>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-20" />
              <Image
                src="/images/GlassStick.png"
                alt="GlassTick Interface"
                width={600}
                height={400}
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-purple-100 text-purple-700">Features</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Powerful Features for
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Enhanced Experience
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Always on Top</CardTitle>
                <CardDescription>
                  Stays visible above other windows while remaining unobtrusive
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Transparent Background</CardTitle>
                <CardDescription>
                  Customizable transparency level from 10% to 100%
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Customizable Settings</CardTitle>
                <CardDescription>
                  Adjust font size, colors, time format, and more
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-700">Installation</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Get Started with
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                GlassTick
              </span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Prerequisites</CardTitle>
                <CardDescription>Python 3.x and Windows OS</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-semibold">Installation Steps</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <pre className="text-sm">
                      <code>
                        {`# Clone repository
git clone https://github.com/aashishrajput9838/floating-clock-widget.git

# Navigate to project directory
cd floating-clock-widget

# Install dependencies
pip install -r requirements.txt`}
                      </code>
                    </pre>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">Build Executable</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <pre className="text-sm">
                      <code>
                        {`# Build standalone executable
pyinstaller clock.spec`}
                      </code>
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-purple-100 text-purple-700">User Reviews</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              What Users Say About GlassTick
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">GlassTick Reviews</CardTitle>
                <CardDescription>
                  Leave a review and see what others have said
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
} 