'use client';

import React, { useState, useEffect } from 'react';
import { Gamepad2, Zap, Globe, Coins, TrendingUp, Users, Shield, Sparkles, Play, Mail, ChevronRight, CheckCircle, Star, Cpu, Cloud, Lock } from 'lucide-react';

export default function GamingWaitlist() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState('player');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async () => {
    if (email && email.includes('@')) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 4000);
    }
  };

  const features = [
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "Play Anywhere",
      description: "Stream AAA games to any device - phone, tablet, or old laptop",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Sub-50ms latency with local P2P connections. Feels like native gaming",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Coins className="w-6 h-6" />,
      title: "Earn Passive Income",
      description: "PC owners earn $5-15/hour sharing their idle gaming rigs",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Community First",
      description: "No corporate servers. Real gamers helping gamers worldwide",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Bank-Grade Security",
      description: "Encrypted sessions, verified hosts, and reputation system",
      gradient: "from-red-500 to-rose-500"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Fair Pricing",
      description: "Starting at $2/hour. No subscriptions, no hidden fees",
      gradient: "from-indigo-500 to-violet-500"
    }
  ];

  const benefits = {
    player: [
      "Play on any device - even a phone",
      "Access 1000+ AAA games instantly",
      "No expensive GPU required",
      "Cloud saves across all sessions",
      "Cancel anytime, pay per minute"
    ],
    host: [
      "Earn $150-400/month passive income",
      "You control when to share",
      "Automatic security sandboxing",
      "Get paid in crypto or cash",
      "Join the sharing economy"
    ]
  };

  const stats = [
    { number: '3.2K+', label: 'Early Adopters', icon: <Users className="w-5 h-5" /> },
    { number: '127', label: 'Beta Hosts', icon: <Cpu className="w-5 h-5" /> },
    { number: '< 45ms', label: 'Avg Latency', icon: <Zap className="w-5 h-5" /> },
    { number: '4K/60', label: 'Max Quality', icon: <Play className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated mesh background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, rgba(139, 92, 246, 0.1) 0px, transparent 1px, transparent 40px),
              repeating-linear-gradient(90deg, rgba(139, 92, 246, 0.1) 0px, transparent 1px, transparent 40px)
            `,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/50 border-b border-white/10">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 blur-lg opacity-50" />
                <Gamepad2 className="w-8 h-8 text-white relative z-10" />
              </div>
              <div>
                <h1 className="text-xl font-bold">P2P Gaming Cloud</h1>
                <p className="text-xs text-gray-400">Powered by Community</p>
              </div>
            </div>
            <button 
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              Join Waitlist
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 mb-8 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-400">Launching Q2 2025</span>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-black mb-6 leading-none">
                <span className="block text-white mb-2">Game Without</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Limits
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light">
                Rent powerful gaming PCs from the community. Play any game on any device. 
                <span className="text-purple-400 font-medium"> Starting at $2/hour.</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <button 
                  onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-2xl shadow-purple-500/30 flex items-center justify-center gap-2"
                >
                  Get Early Access
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </button>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {stats.map((stat, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all group">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="text-purple-400 group-hover:scale-110 transition-transform">{stat.icon}</div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative max-w-5xl mx-auto">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-sm border border-white/10 overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.2),transparent_70%)]" />
                
                {/* Mockup UI */}
                <div className="absolute inset-0 p-8 flex items-center justify-center">
                  <div className="w-full max-w-2xl">
                    <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                          <Cpu className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold">RTX 4090 Beast</div>
                          <div className="text-sm text-gray-400">Mumbai, India • $3.50/hr</div>
                        </div>
                        <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                          Available
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs text-gray-400">
                        <div className="bg-white/5 rounded p-2">i9-13900K</div>
                        <div className="bg-white/5 rounded p-2">64GB RAM</div>
                        <div className="bg-white/5 rounded p-2">32ms ping</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 ml-1" fill="white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-6 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold mb-4">
                Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">P2P Gaming</span>
              </h3>
              <p className="text-gray-400 text-lg">The future of gaming is decentralized, affordable, and accessible</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:scale-105 cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-4 group-hover:scale-110 transition-transform`}>
                    <div className="w-full h-full rounded-xl bg-black flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works - Interactive Tabs */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h3>
              <p className="text-gray-400 text-lg">Choose your role in the revolution</p>
            </div>

            {/* Tab Switcher */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex p-1 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <button
                  onClick={() => setActiveTab('player')}
                  className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === 'player'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  I Want to Play
                </button>
                <button
                  onClick={() => setActiveTab('host')}
                  className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === 'host'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  I Want to Earn
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-cyan-500/30">
                  {activeTab === 'player' ? '1' : '1'}
                </div>
                <h4 className="text-2xl font-bold mb-4 text-cyan-400">
                  {activeTab === 'player' ? 'Browse & Connect' : 'Install & Share'}
                </h4>
              </div>

              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-center py-12">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6">
                    {activeTab === 'player' ? (
                      <Gamepad2 className="w-12 h-12 text-cyan-400" />
                    ) : (
                      <Coins className="w-12 h-12 text-purple-400" />
                    )}
                  </div>
                  <h5 className="text-xl font-bold mb-2">
                    {activeTab === 'player' ? 'Start Playing in Minutes' : 'Start Earning Today'}
                  </h5>
                  <p className="text-gray-400 mb-6">
                    {activeTab === 'player' 
                      ? 'No downloads, no setup, just instant gaming'
                      : 'Turn your gaming PC into a money-making machine'
                    }
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Lock className="w-4 h-4" />
                    <span>Secure & Encrypted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <section id="waitlist" className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="relative p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-md border border-white/20 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.2),transparent_50%)]" />
              
              <div className="relative z-10 text-center">
                <Star className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
                <h3 className="text-4xl md:text-5xl font-bold mb-4">
                  Join the <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Beta Waitlist</span>
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Be among the first 5,000 to experience P2P gaming. Early members get <span className="text-cyan-400 font-semibold">50% off</span> for life.
                </p>

                {!submitted ? (
                  <div className="max-w-md mx-auto">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="relative flex-1">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                          placeholder="your.email@example.com"
                          className="w-full pl-12 pr-6 py-4 bg-black/40 backdrop-blur-md border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-500 transition-all"
                        />
                      </div>
                      <button
                        onClick={handleSubmit}
                        className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-bold hover:scale-105 transition-transform duration-200 hover:shadow-2xl hover:shadow-purple-500/50 whitespace-nowrap"
                      >
                        Claim My Spot
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-4">
                      No spam. Unsubscribe anytime. We respect your privacy.
                    </p>
                  </div>
                ) : (
                  <div className="max-w-md mx-auto p-6 bg-green-500/20 border-2 border-green-500/50 rounded-xl backdrop-blur-md">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      <span className="text-xl font-bold text-green-400">You're In!</span>
                    </div>
                    <p className="text-gray-300">We'll email you when we launch. Check your inbox for a confirmation.</p>
                  </div>
                )}

                <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-400">
                  <Users className="w-4 h-4" />
                  <span><span className="text-cyan-400 font-semibold">3,247</span> gaming enthusiasts already joined</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-white/10">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <Gamepad2 className="w-8 h-8 text-cyan-400" />
                  <span className="text-xl font-bold">P2P Gaming Cloud</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Democratizing gaming through peer-to-peer technology. Built by gamers, for gamers.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all">
                    <span className="text-sm">𝕏</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all">
                    <span className="text-sm">DC</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all">
                    <span className="text-sm">GH</span>
                  </a>
                </div>
              </div>
              
              <div>
                <h6 className="font-semibold mb-3 text-sm">Product</h6>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">FAQ</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Roadmap</a></li>
                </ul>
              </div>
              
              <div>
                <h6 className="font-semibold mb-3 text-sm">Company</h6>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
            
            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
              <p>© 2025 P2P Gaming Cloud. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
                <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
                <a href="#" className="hover:text-gray-300 transition-colors">Security</a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}