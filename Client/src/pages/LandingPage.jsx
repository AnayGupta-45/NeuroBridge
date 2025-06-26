import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181c2f] via-[#232946] to-[#0f111a] text-white flex flex-col font-sans">
      <main className="flex flex-col md:flex-row items-center justify-between flex-grow px-8 py-10">
        <div className="space-y-8 max-w-xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 animate-fadeIn border border-white/10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#eebbc3] drop-shadow-lg">Welcome to NeuroBridge</h1>
          <p className="text-lg text-gray-200 font-medium">
            NeuroBridge is an intelligent bridge between your brain and the digital world.<br />
            <span className="text-[#eebbc3]">Connect</span>, <span className="text-[#eebbc3]">collaborate</span>, and <span className="text-[#eebbc3]">create</span> efficiently.
          </p>
          <div className="space-x-4">
            <Link
              to="/register"
              className="bg-[#eebbc3] text-[#232946] px-8 py-3 rounded-full font-bold shadow-md hover:bg-[#ffd6e0] transition"
            >
              User Register
            </Link>
            <Link
              to="/register/admin"
              className="border border-[#eebbc3] px-8 py-3 rounded-full font-bold text-[#eebbc3] hover:bg-[#eebbc3] hover:text-[#232946] transition"
            >
              Admin Register
            </Link>
          </div>
        </div>

        <div className="mt-12 md:mt-0 md:ml-16 animate-slideInRight">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
            alt="NeuroBridge illustration"
            className="rounded-3xl shadow-2xl w-[420px] h-[340px] object-cover border-4 border-[#eebbc3]/30 bg-[#232946]/70"
          />
        </div>
      </main>

      <footer className="text-center py-6 text-sm text-gray-400 bg-[#181c2f] bg-opacity-70 backdrop-blur-md border-t border-white/10">
        © 2025 <span className="text-[#eebbc3] font-semibold">NeuroBridge</span>. All rights reserved.
      </footer>
    </div>
  );
}

export default LandingPage;
