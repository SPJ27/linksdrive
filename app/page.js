import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BarChart3, LinkIcon, Share2, Zap, CheckCircle, ChevronDown } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <LinkIcon className="h-8 w-8 text-purple-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">LinksDrive</span>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Features
              </Link>
              <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                How It Works
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Pricing
              </Link>
              <Link href="/login" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Login
              </Link>
              <Link href="/signup" className="bg-purple-600 text-white hover:bg-purple-700 px-4 py-2 rounded-md text-sm font-medium">
                Get Started
              </Link>
            </div>
            <div className="flex items-center sm:hidden">
              <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                <ChevronDown className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Share your links.</span>
                <span className="block text-purple-600">Track your success.</span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Create a beautiful custom page for all your products and social links. Get powerful insights on how your audience interacts with your content.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link href="/signup" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10">
                      Get started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link href="#how-it-works" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200 md:py-4 md:text-lg md:px-10">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="LinksDrive dashboard preview"
                    width={600}
                    height={400}
                    className="w-full"
                  />
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                    <div className="bg-white bg-opacity-75 rounded-lg p-4">
                      <span className="text-sm font-medium text-purple-600">Preview your LinksDrive page</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to succeed online
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
              LinksDrive gives you all the tools to create, share, and analyze your links in one place.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-purple-600 rounded-md shadow-lg">
                        <LinkIcon className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Custom Link Pages</h3>
                    <p className="mt-5 text-base text-gray-600">
                      Create beautiful, branded pages that showcase all your important links in one place. Customize colors, fonts, and layouts to match your brand.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-purple-600 rounded-md shadow-lg">
                        <BarChart3 className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Detailed Analytics</h3>
                    <p className="mt-5 text-base text-gray-600">
                      Get powerful insights on how your audience interacts with your links. Track clicks, geographic data, referral sources, and more.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-purple-600 rounded-md shadow-lg">
                        <Share2 className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Easy Sharing</h3>
                    <p className="mt-5 text-base text-gray-600">
                      Share your LinksDrive page across all your social platforms with a single, memorable URL. Update once, change everywhere.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-purple-600 rounded-md shadow-lg">
                        <Zap className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Performance Optimization</h3>
                    <p className="mt-5 text-base text-gray-600">
                      Our AI-powered insights help you optimize which links to feature and when, maximizing your conversion rates.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-purple-600 rounded-md shadow-lg">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Mobile Optimized</h3>
                    <p className="mt-5 text-base text-gray-600">
                      Your LinksDrive page looks great on any device, ensuring a seamless experience for all your visitors.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-purple-600 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Customizable Settings</h3>
                    <p className="mt-5 text-base text-gray-600">
                      Control every aspect of your page, from SEO settings to privacy options. You're in complete control.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">How It Works</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Three simple steps to get started
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
              Setting up your LinksDrive page is quick and easy. You'll be up and running in minutes.
            </p>
          </div>

          <div className="mt-16">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                  <span className="text-lg font-bold">1</span>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Create your account</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Sign up for LinksDrive in seconds. No credit card required to get started with our free plan.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                  <span className="text-lg font-bold">2</span>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Add your links</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Add all your important links - social profiles, products, portfolio items, and more. Organize them however you like.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                  <span className="text-lg font-bold">3</span>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Share and analyze</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Share your custom LinksDrive URL with your audience and start tracking performance with our powerful analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Loved by creators everywhere
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="User avatar"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold">Sarah Johnson</h4>
                  <p className="text-gray-600">Fashion Influencer</p>
                </div>
              </div>
              <p className="text-gray-700">
                "LinksDrive has completely transformed how I share my content. The analytics have helped me understand what my audience really wants to see."
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="User avatar"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold">Mark Thompson</h4>
                  <p className="text-gray-600">Entrepreneur</p>
                </div>
              </div>
              <p className="text-gray-700">
                "As someone with multiple businesses, having one place to organize all my links has been a game-changer. My conversion rates have increased by 35%!"
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="User avatar"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold">Elena Rodriguez</h4>
                  <p className="text-gray-600">Content Creator</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The customization options are incredible. I was able to create a page that perfectly matches my brand, and my followers love how easy it is to find my content."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Pricing</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Plans for everyone
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
              Choose the perfect plan for your needs. All plans include our core features.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
            {/* Free Plan */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-2xl font-medium text-gray-900">Free</h3>
                <p className="mt-4 text-gray-600">Perfect for getting started</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">$0</span>
                  <span className="text-base font-medium text-gray-500">/mo</span>
                </p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="ml-3 text-gray-600">1 custom page</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="ml-3 text-gray-600">Up to 5 links</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="ml-3 text-gray-600">Basic analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="ml-3 text-gray-600">LinksDrive branding</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link href="/signup" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700">
                    Get started
                  </Link>
                </div>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-purple-600">
              <div className="px-6 py-8">
                <h3 className="text-2xl font-medium text-gray-900">Pro</h3>
                <p className="mt-4 text-gray-600">For growing creators</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">$9</span>
                  <span className="text-base font-medium text-gray-500">/mo</span>
                </p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="ml-3 text-gray-600">1 custom page</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="ml-3 text-gray-600">Unlimited links</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="ml-3 text-gray-600">Advanced analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="ml-3 text-gray-600">No LinksDrive branding</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="ml-3 text-gray-600">Custom domains</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link href="/signup" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700">
                    Get started
                  </Link>
                </div>
              </div>
            </div>

            {/* Business Plan */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-2xl font-medium text-gray-900">Business</h3>
                <p className="mt-4 text-gray-600">For teams and businesses</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">$29</span>
                  <span className="text-base font-medium text-gray-500">/mo</span>
                </p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="ml-3 text-gray-600">5 custom pages</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="ml-3 text-gray-600">Unlimited links</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="ml-3 text-gray-600">Premium analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="ml-3 text-gray-600">Team collaboration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="ml-3 text-gray-600">Priority support</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link href="/signup" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700">
                    Get started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-purple-200">Create your LinksDrive page today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/signup" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-gray-50">
                Get started
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link href="#features" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-800 hover:bg-purple-900">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <div className="flex items-center">
                <LinkIcon className="h-8 w-8 text-purple-500" />
                <span className="ml-2 text-xl font-bold text-white">LinksDrive</span>
              </div>
              <p className="text-gray-400 text-base">
                Making it easy to share and track all your important links in one beautiful page.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Product</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#features" className="text-base text-gray-400 hover:text-gray-300">
                        Features
                      </a>
                    </li>
                    <li>
                      <a href="#pricing" className="text-base text-gray-400 hover:text-gray-300">
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Testimonials
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Support</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        API Documentation
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Status
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Company</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Press
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Legal</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Privacy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Terms
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Cookie Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; {new Date().getFullYear()} LinksDrive. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
