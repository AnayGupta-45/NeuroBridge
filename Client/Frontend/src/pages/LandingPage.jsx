import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#181c2f] via-[#232946] to-[#0f111a] text-white font-sans">
      {/* Hero Section */}
      <header className="w-full flex justify-between items-center px-10 py-8">
        <span className="text-3xl font-extrabold tracking-tight text-[#eebbc3] drop-shadow-lg cursor-pointer">
          🧠 NeuroBridge
        </span>
        <div className="space-x-6">
          <Link to="/login" className="hover:text-[#eebbc3] font-bold transition">Login</Link>
          <Link to="/register" className="hover:text-[#eebbc3] font-bold transition">Register</Link>
        </div>
      </header>
      <main className="flex flex-col md:flex-row items-center justify-center flex-grow px-8 py-10 gap-16">
        {/* Left: Text Content */}
        <div className="space-y-8 max-w-xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 border border-white/10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#eebbc3] drop-shadow-lg mb-4">
            Welcome to NeuroBridge
          </h1>
          <p className="text-lg text-gray-200 font-medium mb-6">
            NeuroBridge is an intelligent bridge between your brain and the digital world.<br />
            <span className="text-[#eebbc3]">Connect</span>, <span className="text-[#eebbc3]">collaborate</span>, and <span className="text-[#eebbc3]">create</span> efficiently.
          </p>
          <div className="space-x-4">
            <Link
              to="/register"
              className="bg-[#eebbc3] text-[#232946] px-8 py-3 rounded-full font-bold shadow-md hover:bg-[#ffd6e0] transition"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="border border-[#eebbc3] px-8 py-3 rounded-full font-bold text-[#eebbc3] hover:bg-[#eebbc3] hover:text-[#232946] transition"
            >
              Sign In
            </Link>
          </div>
        </div>
        {/* Right: Illustration */}
        <div className="flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
            alt="NeuroBridge abstract brain network"
            className="rounded-3xl shadow-2xl w-[400px] h-[320px] object-cover border-4 border-[#eebbc3]/30 bg-[#232946]/70"
          />
        </div>
      </main>
      {/* Features Section */}
      <section className="w-full flex flex-col items-center py-12 bg-[#181c2f]/70 border-t border-white/10">
        <h2 className="text-3xl font-bold text-[#eebbc3] mb-8">Why NeuroBridge?</h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl w-full justify-center">
          <div className="flex-1 bg-white/10 rounded-xl p-6 shadow-lg border border-white/10 text-center">
            <h3 className="text-xl font-bold mb-2 text-[#eebbc3]">AI-Powered Insights</h3>
            <p className="text-gray-300">Leverage advanced AI to analyze and enhance your digital interactions and productivity.</p>
          </div>
          <div className="flex-1 bg-white/10 rounded-xl p-6 shadow-lg border border-white/10 text-center">
            <h3 className="text-xl font-bold mb-2 text-[#eebbc3]">Seamless Collaboration</h3>
            <p className="text-gray-300">Work together in real-time with secure, intuitive tools designed for teams and individuals.</p>
          </div>
          <div className="flex-1 bg-white/10 rounded-xl p-6 shadow-lg border border-white/10 text-center">
            <h3 className="text-xl font-bold mb-2 text-[#eebbc3]">Emotion Recognition</h3>
            <p className="text-gray-300">Understand and respond to emotional cues for more meaningful digital communication.</p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-400 bg-[#181c2f] bg-opacity-70 backdrop-blur-md border-t border-white/10">
        © 2025 <span className="text-[#eebbc3] font-semibold">NeuroBridge</span>. All rights reserved.
      </footer>
    </div>
  );
}
