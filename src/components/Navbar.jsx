  import React, { useState } from 'react';

  const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' },
    ];

    return (
      <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex justify-between items-center">
          {/* Update di sini: Membungkus teks Portofolio dengan link ke #home */}
          <a 
            href="#home" 
            className="text-xl font-bold tracking-tighter cursor-pointer text-cyan-400 hover:opacity-80 transition-opacity"
          >
            Portofolio
          </a>

          <ul className="hidden md:flex space-x-8 text-sm font-medium text-white">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-cyan-400 transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button 
            className="md:hidden text-2xl text-white" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 p-4 space-y-4 flex flex-col items-center text-white">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)} 
                className="hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    );
  };

  export default Navbar;