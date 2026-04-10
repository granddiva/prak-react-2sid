import React from 'react';

export default function TailwindCSS() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 pt-10 space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
            Belajar Tailwind <span className="text-blue-600">v4</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Membangun antarmuka modern dengan utilitas CSS yang cepat, responsif, dan sangat fleksibel.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium shadow-lg shadow-blue-200 transition-all active:scale-95">
              Mulai Belajar
            </button>
            <button className="border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 px-8 py-3 rounded-full font-medium transition-all">
              Dokumentasi
            </button>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* Grid Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SpacingCard />
          <ShadowCard />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard 
            title="Typography" 
            desc="Sistem font yang elegan dan mudah dibaca." 
            icon="Aa"
          />
          <FeatureCard 
            title="Colors" 
            desc="Palet warna profesional untuk UI modern." 
            icon="🎨"
          />
          <FeatureCard 
            title="Responsive" 
            desc="Tampilan sempurna di semua ukuran layar." 
            icon="📱"
          />
        </div>
      </main>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/75 border-b border-gray-200 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-black text-blue-600 tracking-tighter">DEVKITA</h1>
        <ul className="hidden md:flex space-x-8 font-medium text-gray-600">
          <li className="hover:text-blue-600 cursor-pointer transition">Home</li>
          <li className="hover:text-blue-600 cursor-pointer transition">Tutorial</li>
          <li className="hover:text-blue-600 cursor-pointer transition">Showcase</li>
        </ul>
        <button className="bg-gray-900 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-800">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

function SpacingCard() {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-indigo-950 p-8 rounded-3xl shadow-xl text-white overflow-hidden relative group">
      <div className="relative z-10">
        <span className="bg-blue-500/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
          Layout Tips
        </span>
        <h2 className="text-2xl font-bold mt-4">Auto Spacing</h2>
        <p className="mt-2 text-blue-100/80">
          Gunakan <code className="bg-white/10 px-1 rounded">gap-*</code> dan <code className="bg-white/10 px-1 rounded">space-x-*</code> untuk mengatur jarak antar elemen dengan lebih konsisten.
        </p>
      </div>
      {/* Dekorasi Abstract */}
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition"></div>
    </div>
  );
}

function ShadowCard() {
  return (
    <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
      <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-gray-900">Efek Interaktif</h3>
      <p className="text-gray-500 mt-2">
        Mainkan <code>hover:shadow</code> dan <code>transition</code> untuk memberikan feedback visual kepada pengguna.
      </p>
    </div>
  );
}

function FeatureCard({ title, desc, icon }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-blue-100 transition shadow-sm">
      <div className="text-3xl mb-4">{icon}</div>
      <h4 className="text-lg font-bold text-gray-800">{title}</h4>
      <p className="text-gray-500 text-sm mt-1">{desc}</p>
    </div>
  );
}

