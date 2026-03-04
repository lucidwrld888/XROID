import Head from 'next/head'
import Link from 'next/link'

const games = [
  { name: 'CODM', label: 'Call of Duty Mobile', icon: '🎯', color: 'from-red-900 to-red-700' },
  { name: 'Fortnite', label: 'Fortnite', icon: '⚡', color: 'from-blue-900 to-blue-700' },
  { name: 'PUBG', label: 'PUBG Mobile', icon: '🪖', color: 'from-yellow-900 to-yellow-700' },
  { name: 'Valorant', label: 'Valorant', icon: '💎', color: 'from-pink-900 to-pink-700' },
]

const features = [
  { icon: '🔒', title: 'Secure Trading', desc: 'Admin-protected disputes and verified sellers' },
  { icon: '⚡', title: 'Fast Deals', desc: 'Direct contact between buyers and sellers' },
  { icon: '🌍', title: 'Nigeria First', desc: 'Supports Opay, Palmpay, bank transfer & more' },
  { icon: '⭐', title: 'Trusted Reviews', desc: 'Real ratings from real buyers' },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>XROID — Buy & Sell Gaming Accounts</title>
        <meta name="description" content="Nigeria's #1 gaming account marketplace. Buy and sell CODM, Fortnite, PUBG and Valorant accounts safely." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-dark">
        {/* Navbar */}
        <nav className="border-b border-dark-border sticky top-0 z-50 bg-dark/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-white tracking-tighter">
                  X<span className="text-primary">ROID</span>
                </span>
              </div>
              <div className="hidden md:flex items-center gap-6">
                <Link href="/browse" className="text-gray-400 hover:text-white transition-colors text-sm">Browse</Link>
                <Link href="/sell" className="text-gray-400 hover:text-white transition-colors text-sm">Sell Account</Link>
                <Link href="/how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm">How it Works</Link>
              </div>
              <div className="flex items-center gap-3">
                <Link href="/auth/login" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Login
                </Link>
                <Link href="/auth/register" className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-dark to-dark pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-primary text-sm font-medium">Nigeria's #1 Gaming Marketplace</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                Buy & Sell
                <span className="text-primary block">Gaming Accounts</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
                The safest marketplace to trade CODM, Fortnite, PUBG and Valorant accounts in Nigeria. Verified sellers, real reviews, instant deals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/browse" className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105">
                  Browse Accounts
                </Link>
                <Link href="/auth/register" className="border border-dark-border hover:border-primary/50 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:bg-dark-hover">
                  Start Selling
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Game Categories */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Browse by Game</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {games.map((game) => (
              <Link
                key={game.name}
                href={`/browse?game=${game.name}`}
                className="group relative bg-dark-card border border-dark-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all card-
