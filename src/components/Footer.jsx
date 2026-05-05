import React from 'react';

const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-3 gap-10 mb-10 text-center md:text-left">

          {/* Kolom 1: Branding */}
          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-3">Yobert G.</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Data Scientist yang berfokus pada pengembangan solusi berbasis data dan teknologi modern.
            </p>
          </div>

          {/* Kolom 2: Navigasi */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Sosial */}
          <div>
            <h4 className="text-white font-semibold mb-4">Hubungi Saya</h4>
            <div className="flex justify-center md:justify-start gap-5 text-xl">
              <a
                href="https://linkedin.com/in//yobert-geraldo-6850473b7/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-[#0077b5] transition-all"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>

              <a
                href="https://instagram.com/yobert_geraldo/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-[#e4405f] transition-all"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a
                href="https://wa.me/6287788082004"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-[#25d366] transition-all"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-slate-500 text-xs border-t border-slate-800/50 pt-6">
          © {new Date().getFullYear()} Yobert Geraldo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;