import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center text-white font-sans"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="bg-black bg-opacity-70 min-h-screen flex flex-col">
        {/* Hero Section */}
        <main className="flex flex-col md:flex-row items-center justify-center flex-grow px-8 py-10 gap-16">
          {/* Left: Text Content */}
          <div className="space-y-8 max-w-xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 border border-white/10">
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#eebbc3] drop-shadow-lg mb-4">
              Empower Your Mind with NeuroBridge
            </h1>
            <p className="text-lg text-gray-200 font-medium mb-6 leading-relaxed">
              NeuroBridge is your intelligent companion that connects{" "}
              <span className="text-[#eebbc3]">neuroscience</span> and{" "}
              <span className="text-[#eebbc3]">digital technology</span>.
              Seamlessly collaborate, track emotions, and unlock insights.
            </p>
          </div>

          {/* Right: Illustration */}
          <div className="flex-shrink-0">
            <img
              src="\public\images.jpeg"
              alt="NeuroBridge AI"
              className="rounded-3xl shadow-2xl w-[400px] h-[400px] object-cover border-4 border-[#eebbc3]/30 bg-[#232946]/70"
            />
          </div>
        </main>

        {/* Features Section */}
        <section className="w-full flex flex-col items-center py-16 bg-[#181c2f]/80 border-t border-white/10">
          <h2 className="text-4xl font-bold text-[#eebbc3] mb-12 drop-shadow-lg">
            Our Key Features
          </h2>
          <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full justify-center px-4">
            <div className="flex-1 bg-white/10 rounded-xl p-8 shadow-lg border border-white/10 text-center hover:scale-105 transition transform duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold mb-3 text-[#eebbc3]">
                AI-Powered Insights
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Real-time analytics to help you better understand emotions,
                productivity, and client engagement patterns.
              </p>
            </div>

            <div className="flex-1 bg-white/10 rounded-xl p-8 shadow-lg border border-white/10 text-center hover:scale-105 transition transform duration-300">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-3 text-[#eebbc3]">
                Seamless Collaboration
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Work securely and effortlessly with clients and teams through
                real-time collaboration tools.
              </p>
            </div>

            <div className="flex-1 bg-white/10 rounded-xl p-8 shadow-lg border border-white/10 text-center hover:scale-105 transition transform duration-300">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-bold mb-3 text-[#eebbc3]">
                Emotion Recognition
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Detect and analyze emotional cues to create more empathetic and
                meaningful digital interactions.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full py-16 bg-[#232946]/90 border-t border-white/10 px-6 md:px-20 text-center">
          <h2 className="text-4xl font-bold text-[#eebbc3] mb-6">
            About NeuroBridge
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
            NeuroBridge is a smart platform that integrates
            neuroscience-inspired techniques with modern collaboration tools.
            Whether you are a therapist, a professional, or an individual user,
            NeuroBridge offers an intelligent way to bridge communication gaps,
            understand emotions, and boost productivity. We are dedicated to
            creating digital spaces that feel more human.
          </p>
        </section>

        {/* Testimonials */}
        <section className="w-full py-16 bg-[#181c2f]/90 border-t border-white/10 px-6 md:px-20 text-center">
          <h2 className="text-4xl font-bold text-[#eebbc3] mb-12">
            What Our Users Say
          </h2>
          <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 rounded-xl p-6 shadow-lg border border-white/10">
              <p className="text-gray-300 mb-4 leading-relaxed">
                "NeuroBridge has transformed the way I interact with my clients.
                The AI insights help me deliver better sessions."
              </p>
              <h4 className="text-[#eebbc3] font-semibold">
                - Alex, Therapist
              </h4>
            </div>

            <div className="bg-white/10 rounded-xl p-6 shadow-lg border border-white/10">
              <p className="text-gray-300 mb-4 leading-relaxed">
                "The emotion recognition tools helped me understand my team
                better and improve our collaboration significantly."
              </p>
              <h4 className="text-[#eebbc3] font-semibold">
                - Maria, Project Manager
              </h4>
            </div>

            <div className="bg-white/10 rounded-xl p-6 shadow-lg border border-white/10">
              <p className="text-gray-300 mb-4 leading-relaxed">
                "A seamless experience from day one! The platform feels
                intuitive, intelligent, and perfectly designed for real human
                connections."
              </p>
              <h4 className="text-[#eebbc3] font-semibold">
                - Sam, Entrepreneur
              </h4>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-sm text-gray-400 bg-[#181c2f]/80 backdrop-blur-md border-t border-white/10">
          © 2025{" "}
          <span className="text-[#eebbc3] font-semibold">NeuroBridge</span>. All
          rights reserved.
        </footer>
      </div>
    </div>
  );
}
