import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">
            Kirim <span className="text-cyan-400">Pesan</span>
          </h3>
          <p className="text-slate-400">
            Punya pertanyaan atau ingin bekerja sama? Isi formulir di bawah ini.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Info Kontak */}
          <div className="md:col-span-2 space-y-6 mt-4">
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-700">
              <p className="text-cyan-400 font-bold mb-1">Email Saya</p>
              <p className="text-slate-300">yobert.geraldo@gmail.com</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-700">
              <p className="text-cyan-400 font-bold mb-1">Kontak</p>
              <a 
              href="https://wa.me/6287788082004" 
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-cyan-400 hover:underline">087788082004 </a>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-700">
              <p className="text-cyan-400 font-bold mb-1">Lokasi</p>
              <p className="text-slate-300">Semarang, Jawa Tengah, Indonesia</p>
            </div>
          </div>

          {/* Formulir Kontak */}
          <div className="md:col-span-3">
            <form 
              action="https://api.web3forms.com/submit" 
              method="POST"
              className="space-y-4"
            >
              {/* API KEY dari Web3Forms */}
              <input type="hidden" name="access_key" value="b49763f1-1a24-4fb6-8961-2a59c22ff0cd" />

              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Nama Anda" 
                  required 
                  className="bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email Anda" 
                  required 
                  className="bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
              <input 
                type="text" 
                name="subject" 
                placeholder="Subjek" 
                required 
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <textarea 
                name="message" 
                rows="5" 
                placeholder="Pesan Anda" 
                required 
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
              ></textarea>
              
              <button 
                type="submit" 
                className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-cyan-600/20"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;