import { Link } from 'react-router-dom';
import '../LandingPage.css';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center text-white font-sans relative"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')` }}>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center flex-grow px-8 py-10 text-center animate-fade-in relative z-10">
        <h1 className="text-6xl font-extrabold text-[#eebbc3] drop-shadow-lg mb-6">Welcome to NeuroBridge</h1>
        <p className="text-xl text-gray-200 max-w-2xl mb-8 leading-relaxed">
          NeuroBridge is your intelligent gateway to smarter, emotionally aware digital collaboration.
          Connect, collaborate, and grow with advanced AI-powered tools.
        </p>
        <Link to="/register" className="bg-[#eebbc3] text-[#232946] px-8 py-3 rounded-full font-bold shadow hover:bg-[#ffd6e0] transition">
          Get Started
        </Link>
      </main>

      {/* Features Section */}
      <section className="w-full flex flex-col items-center py-16 bg-[#181c2f]/90 backdrop-blur-lg border-t border-white/10 relative z-10">
        <h2 className="text-4xl font-bold text-[#eebbc3] mb-12">Why NeuroBridge?</h2>
        <div className="flex flex-col md:flex-row gap-12 max-w-5xl w-full justify-center text-center">
          {[
            { title: "AI-Powered Insights", desc: "Track emotions, optimize workflows, and personalize experiences with cutting-edge AI." },
            { title: "Real-Time Collaboration", desc: "Work seamlessly with therapists, clients, and teams in one intelligent space." },
            { title: "Emotion Recognition", desc: "Foster deeper digital connections through emotional awareness and smart interactions." }
          ].map((feature, index) => (
            <div key={index} className="flex-1 bg-white/10 rounded-2xl p-8 shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
              <h3 className="text-2xl font-bold mb-4 text-[#eebbc3]">{feature.title}</h3>
              <p className="text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full flex flex-col items-center py-16 bg-[#232946]/90 backdrop-blur-lg border-t border-white/10 relative z-10">
        <h2 className="text-4xl font-bold text-[#eebbc3] mb-12">What People Say</h2>
        <div className="flex flex-col md:flex-row gap-12 max-w-5xl w-full justify-center text-center">
          {[
            { name: "Alex", feedback: "NeuroBridge transformed the way I collaborate. The tools are seamless and intuitive!" },
            { name: "Maria", feedback: "Emotion recognition helped me connect better with my clients like never before." },
            { name: "Sam", feedback: "Beautiful, smart, and incredibly efficient. A must-have platform." }
          ].map((review, index) => (
            <div key={index} className="flex-1 bg-white/10 rounded-2xl p-8 shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
              <p className="text-gray-300 italic mb-4">"{review.feedback}"</p>
              <h4 className="text-xl font-bold text-[#eebbc3]">{review.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section (Horizontal Layout) */}
      <section className="w-full flex flex-col items-center py-16 bg-[#181c2f]/90 backdrop-blur-lg border-t border-white/10 relative z-10">
        <h2 className="text-4xl font-bold text-[#eebbc3] mb-8">Contact Us</h2>
        <form className="flex flex-col md:flex-row gap-6 max-w-4xl w-full px-4">
          <input type="text" placeholder="Your Name" required
            className="flex-1 p-4 rounded bg-[#232946] text-white placeholder-gray-400 border border-[#eebbc3]/30 focus:outline-none focus:ring-2 focus:ring-[#eebbc3] transition" />
          <input type="email" placeholder="Your Email" required
            className="flex-1 p-4 rounded bg-[#232946] text-white placeholder-gray-400 border border-[#eebbc3]/30 focus:outline-none focus:ring-2 focus:ring-[#eebbc3] transition" />
          <input type="text" placeholder="Your Message" required
            className="flex-1 p-4 rounded bg-[#232946] text-white placeholder-gray-400 border border-[#eebbc3]/30 focus:outline-none focus:ring-2 focus:ring-[#eebbc3] transition" />
          <button className="bg-[#eebbc3] text-[#232946] p-4 rounded-full font-bold shadow-md hover:bg-[#ffd6e0] transition min-w-[120px]">
            Send
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-400 bg-[#181c2f] bg-opacity-80 backdrop-blur-md border-t border-white/10 relative z-10">
        © 2025 <span className="text-[#eebbc3] font-semibold">NeuroBridge</span>. All rights reserved.
      </footer>
    </div>
  );
}
