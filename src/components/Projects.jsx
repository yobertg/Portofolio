import React, { useState } from 'react';
import notarich from '../assets/notarich.png'
import braille from '../assets/braille.png'
import cluster from '../assets/cluster.png'
const Projects = () => {
  // State untuk menyimpan proyek mana yang sedang dilihat detailnya
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    {
      title: "Website Restoran",
      desc: "Platform untuk memesan menu dengan fitur keranjang dan integrasi pembayaran yang langsung terhubung ke kasir",
      longDesc: "Platform yang dibuat saat magang bersama dengan tim berjumlah 6 orang. Tugas utama saya di projek ini adalah membangun sistem POS kasir yang mengambil data dari order pelanggan secara real time",
      tech: ["Next.js", "Tailwind", "Prisma"],
      features: ["Autentikasi User", "Real-time Database", "Payment Gateway Integration", "Responsive Design"],
      image: notarich,
      link: "https://github.com/yobertg/notarich"
    },
    {
      title: "Jurnal Braille Recognition System",
      desc: "Sistem untuk mendeteksi dan mengklasifikasi huruf braille menjadi abjad A-Z dengan machine learning",
      longDesc: "Sistem braille recognition dua tahap dengan menggunakan YOLO untuk deteksi dan CNN untuk klasifikasi. Sistem ini dapat digunakan sebagai alat bantu pendidikan bagi masyarakat umum yang ingin belajar Braille atau sebagai fitur tambahan pada aplikasi perangkat bergerak untuk mendukung aksesibilitas informasi bagi tunanetra di lingkungan publik.",
      tech: ["Python", "TensorFlow & Keras", "Ultralytics", "YOLOv8", "MobileNetV2"],
      features: ["Two-Stage Deep Learning Pipeline", "Real-Time Braille Translation", "Automatic Spatial Sorting", "High-Accuracy Classification", "Transfer Learning & Fine-Tuning"],
      image: braille,
      link: "https://jurnal.polibatam.ac.id/index.php/JAIC/article/view/11483"
    },
    {
      title: "Analisis Segmentasi Pelanggan Berdasarkan Perilaku Pembelian",
      desc: "Segmentasi pelanggan menggunakan RFM dan K-Means, divisualisasikan dalam Power BI untuk menghasilkan insight bisnis.",
      longDesc: "Proyek analisis pelanggan menggunakan RFM dan K-Means untuk mengelompokkan customer berdasarkan perilaku pembelian. Hasil divisualisasikan dalam dashboard Power BI untuk menghasilkan insight bisnis yang mendukung pengambilan keputusan.",
      tech: ["Python", "Scikit-learn", "Power BI"],
      features: ["Data cleaning dan preprocessing dataset", "Perhitungan RFM (Recency, Frequency, Monetary)", "Segmentasi pelanggan berbasis RFM", "Clustering pelanggan menggunakan K-Means", "Analisis perilaku pelanggan berdasarkan data transaksi"],
      image: cluster,
      link: "https://github.com/yobertg/customer-segmentation-rfm"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <h3 className="text-3xl font-bold mb-4">
            Proyek <span className="text-cyan-400">Pilihan</span>
          </h3>
          <p className="text-slate-400 max-w-4xl">
            Berikut adalah beberapa proyek yang pernah saya kerjakan. Klik "Lihat Detail" untuk informasi lebih lanjut.
          </p>
        </div>

        {/* Grid Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div 
              key={index} 
              className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 flex flex-col"
            >
              <div className="h-48 bg-slate-700 relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-slate-900/40"></div>
              </div>

              <div className="p-6 flex flex-col grow">
                <h4 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h4>
                <p className="text-slate-400 text-sm mb-6 grow">{project.desc}</p>
                
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="text-white font-semibold text-sm flex items-center gap-2 hover:text-cyan-400 transition-colors w-fit"
                >
                  Lihat Detail <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- TEMPLATE MODAL DETAIL --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
          {/* Overlay (Klik untuk menutup) */}
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}></div>
          
          {/* Modal Content */}
          <div className="relative bg-slate-900 border border-slate-700 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl">
            {/* Tombol Close */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-white bg-slate-800 hover:bg-slate-700 w-10 h-10 rounded-full flex items-center justify-center z-10"
            >
              ✕
            </button>

            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 md:h-80 object-cover" />
            
            <div className="p-6 md:p-10">
              <h2 className="text-3xl font-bold mb-4 text-white">{selectedProject.title}</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">{selectedProject.longDesc}</p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h5 className="text-cyan-400 font-bold mb-3">Fitur Utama:</h5>
                  <ul className="list-disc list-inside text-slate-300 text-sm space-y-2">
                    {selectedProject.features.map((feature, i) => <li key={i}>{feature}</li>)}
                  </ul>
                </div>
                <div>
                  <h5 className="text-cyan-400 font-bold mb-3">Teknologi:</h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-xs border border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

               <a 
                href={selectedProject.link} 
                target="_blank" 
                rel="noreferrer"
                className="inline-block w-full text-center py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-colors"
              >
                {selectedProject.title === "Jurnal Braille Recognition System" 
                  ? "Lihat Jurnal" 
                  : "Lihat Kode di GitHub"}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;