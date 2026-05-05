import React from 'react';

const About = () => {
  const skills = [
    "Python", "JavaScript", 
    "Excel", "Git & GitHub", "Power BI/Tableau",
    "SQL"
  ];

  return (
    <section id="about" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Bagian Kiri: Gambar/Ilustrasi */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-slate-900 rounded-2xl p-2">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600" 
                alt="Workspace" 
                className="rounded-xl object-cover h-80 w-full"
              />
            </div>
          </div>

          {/* Bagian Kanan: Teks */}
          <div>
            <h3 className="text-3xl font-bold mb-6">
              About <span className="text-cyan-400">Me</span>
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Saya adalah seorang lulusan Teknik Informatika 
              dan seorang Data Scientist yang berdedikasi untuk mengubah kumpulan data kompleks menjadi wawasan yang berharga dan solusi prediktif yang akurat untuk mendukung pengambilan keputusan strategis.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Perjalanan saya dimulai dari ketertarikan pada bagaimana cara menganalisis berbagai data yang kompleks, hingga kini saya fokus mendalami ekosistem  <span className="text-cyan-400">Python</span> dan <span className="text-cyan-400">Machine Learning</span> untuk membangun model cerdas yang mampu memecahkan masalah dunia nyata.
            </p>

            {/* List Skills */}
            <h4 className="text-lg font-semibold mb-4 text-white">Tech Stack</h4>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-cyan-400 font-medium hover:border-cyan-400 transition-colors cursor-default "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;