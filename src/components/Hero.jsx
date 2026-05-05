import React from 'react';
import profil from '../assets/profil.png'
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 text-center">
      <div className="relative mb-8">
        <div className="w-40 h-40 md:w-48 md:h-48 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full flex items-center justify-center p-1 shadow-2xl shadow-cyan-500/30">
          <div className="bg-slate-900 w-full h-full rounded-full flex items-center justify-center overflow-hidden">
            <img src={profil} alt="Avatar" className="w-full h-full object-cover scale-[2.0] origin-center translate-x-2" />
          </div>
        </div>
      </div>
      <div className="max-w-3xl">
        <h2 className="text-slate-400 text-lg font-medium mb-2 uppercase">Data Scientist</h2>
        <h1 className="text-5xl md:text-4xl font-extrabold mb-6">
          Halo, Saya <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Tan, Valencio Yobert Geraldo Setiawan</span>
        </h1>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="#projects" className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-bold transition-all">Lihat Karya Saya</a>
          <a href="#contact" className="px-8 py-4 border border-slate-700 hover:border-cyan-400 text-slate-300 rounded-full font-bold transition-all">Hubungi Saya</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;