const projects = [
  {
    title: "VisaHire.ai",
    desc: "AI-powered visa-sponsored job platform built with Next.js and NestJS for international students and job seekers.",
    tech: ["Next.js", "NestJS", "TypeScript", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Alzheimer's Disease Detection",
    desc: "Deep learning system using CNNs and Explainable AI techniques for MRI-based Alzheimer's detection.",
    tech: ["Python", "TensorFlow", "Grad-CAM", "Computer Vision"],
    image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "AI Research Dashboard",
    desc: "Interactive ML analytics dashboard with ROC curves, confusion matrices, and t-SNE visualizations.",
    tech: ["React", "Analytics", "Visualization", "Machine Learning"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "3D Genome Structure Analysis",
    desc: "Bioinformatics research using Hi-C genomic datasets and computational biology workflows.",
    tech: ["Bioinformatics", "Python", "Hi-C", "Data Analysis"],
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-blue-900/40" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-purple-400 uppercase tracking-[0.3em] mb-4 text-sm">AI Researcher • Full-Stack Developer</p>
              <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">Bhavana<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> Gutta</span></h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">Building intelligent AI systems, scalable full-stack applications, and research-driven healthcare solutions using Machine Learning, Cloud Technologies, and Modern Web Development.</p>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 font-semibold hover:scale-105 transition">View Projects</a>
                <a href="https://github.com/Bhavanaa95" target="_blank" className="px-8 py-4 rounded-2xl border border-gray-700 hover:border-purple-500 transition">GitHub</a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-3xl opacity-30" />
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    ["96.7%", "CNN Accuracy", "text-purple-400"],
                    ["4+", "Major Projects", "text-blue-400"],
                    ["AI", "Healthcare Research", "text-green-400"],
                    ["ML", "Explainable AI", "text-pink-400"]
                  ].map(([num, label, color]) => <div key={label} className="bg-white/5 rounded-2xl p-6"><h3 className={`text-4xl font-bold ${color}`}>{num}</h3><p className="text-gray-400 mt-2">{label}</p></div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16"><h2 className="text-4xl lg:text-5xl font-bold mb-4">Featured Projects</h2><p className="text-gray-400 text-lg">AI, Machine Learning, Bioinformatics, and Full-Stack Applications</p></div>
        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project) => (
            <article key={project.title} className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover group-hover:scale-110 transition duration-500" />
              <div className="p-8"><h3 className="text-2xl font-bold mb-4">{project.title}</h3><p className="text-gray-400 leading-relaxed mb-6">{project.desc}</p><div className="flex flex-wrap gap-3">{project.tech.map((tech) => <span key={tech} className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">{tech}</span>)}</div></div>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 rounded-3xl p-10 border border-white/10">
          <h2 className="text-4xl font-bold mb-10">Technical Skills</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[['AI / ML',['TensorFlow','PyTorch','CNNs','Grad-CAM','Scikit-learn'],'text-purple-400'],['Frontend',['Next.js','React','Tailwind CSS','TypeScript','Framer Motion'],'text-blue-400'],['Backend',['NestJS','Node.js','REST APIs','JWT Auth','PostgreSQL'],'text-green-400'],['Research',['Bioinformatics','Hi-C Analysis','MRI Analysis','Data Visualization','Computational Biology'],'text-pink-400']].map(([cat, list, color]: any) => <div key={cat}><h3 className={`text-xl font-semibold mb-4 ${color}`}>{cat}</h3><ul className="space-y-2 text-gray-300">{list.map((item: string) => <li key={item}>{item}</li>)}</ul></div>)}
          </div>
        </div>
      </section>

      <footer className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Let's Build Something Amazing</h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">Open to AI research collaborations, freelance projects, internships, and full-stack development opportunities.</p>
        <div className="flex justify-center gap-6 flex-wrap"><a href="https://github.com/Bhavanaa95" target="_blank" className="px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition">GitHub</a><a href="https://linkedin.com" target="_blank" className="px-8 py-4 rounded-2xl border border-gray-700 hover:border-purple-500 transition">LinkedIn</a></div>
        <p className="text-gray-600 mt-16">© 2026 Bhavana Gutta. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
