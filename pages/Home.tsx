import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Code2, Cpu, Globe, Layout, X, ZoomIn } from 'lucide-react';
import { Link } from 'react-router-dom';

// KONFIGURASI PROJECT / SELECTED WORKS
// Panduan Upload Gambar:
// 1. Buat folder bernama 'projects' di dalam folder 'public' proyek Anda.
// 2. Simpan gambar desain Anda di folder tersebut (public/projects/).
// 3. Pastikan nama file sesuai dengan 'image' di bawah ini.
const WORKS = [
  {
    id: 1,
    title: "Wireless Headphone",
    category: "E-commerce",
    // Gambar desain dari user: public/projects/headphone.png
    image: "/projects/headphone.webp",
    // Fallback opsional jika gambar lokal gagal load
    fallbackImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
    color: "bg-red-500",
    delay: 0,
    direction: "up"
  },
  {
    id: 2,
    title: "Calcu.Id",
    category: "Artikel Komunitas Edukasi",
    image: "/projects/calcu.webp",
    fallbackImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    color: "bg-emerald-900",
    delay: 0.2,
    direction: "up"
  },
  {
    id: 3,
    title: "Tama Coffee",
    category: "F&B / Coffee Shop",
    image: "/projects/coffee.webp",
    fallbackImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop",
    color: "bg-orange-900",
    delay: 0.1,
    direction: "down"
  },
  {
    id: 4,
    title: "Conztru Company",
    category: "Construction & Real Estate",
    image: "/projects/conztru.webp",
    fallbackImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop",
    color: "bg-sky-100",
    delay: 3,
    direction: "down"
  }
];

const Home = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  // Split works for the 2-column layout
  const col1 = WORKS.filter((_, i) => i < 2); // First 2 items
  const col2 = WORKS.filter((_, i) => i >= 2); // Last 2 items

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-28 md:pt-32 px-4 flex flex-col items-center overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto relative z-10">

        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-32">


          <motion.h1
            className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold leading-[0.9] tracking-tight mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500">JASA WEBSITE</span>
            <span className="block text-brand-accent relative inline-block">
              PREMIUM
              <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-3 md:h-6 text-brand-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-light leading-relaxed px-2"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            AriseHash creates <span className="text-white font-medium">high-performance</span> web experiences.
            We blend art with code to build your digital legacy.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto px-6 sm:px-0"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/packages" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group w-full sm:w-auto relative px-8 py-4 bg-brand-accent text-black text-lg font-bold rounded-full overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View Packages <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Selected Works Section - Floating Animation */}
        <div className="mb-32 relative">
          <div className="text-center mb-16 px-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Selected Works</h2>
            <p className="text-gray-400">Examples of our premium template collections. Click to view details.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4 md:px-12">
            {/* Column 1 - Moves Up/Down */}
            <div className="flex flex-col gap-8 md:gap-12 md:mt-0">
              {col1.map((work) => (
                <FloatingCard
                  key={work.id}
                  delay={work.delay}
                  direction={work.direction}
                  image={work.image}
                  fallback={work.fallbackImage}
                  category={work.category}
                  title={work.title}
                  color={work.color}
                  onClick={() => setSelectedProject(work.image)}
                />
              ))}
            </div>

            {/* Column 2 - Moves Down/Up (Offset) */}
            <div className="flex flex-col gap-8 md:gap-12 md:mt-24">
              {col2.map((work) => (
                <FloatingCard
                  key={work.id}
                  delay={work.delay}
                  direction={work.direction}
                  image={work.image}
                  fallback={work.fallbackImage}
                  category={work.category}
                  title={work.title}
                  color={work.color}
                  onClick={() => setSelectedProject(work.image)}
                />
              ))}
            </div>
          </div>

          {/* Background decorative glow for this section */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none -z-10" />
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          <BentoCard
            colSpan="md:col-span-2"
            title="Next-Gen Technology"
            desc="Built with React, Tailwind, and Motion for 60fps performance."
            icon={<Cpu size={32} className="text-brand-accent" />}
            delay={0.7}
          />
          <BentoCard
            colSpan="md:col-span-1"
            title="Dynamic Design"
            desc="Animations that feel alive."
            icon={<Globe size={32} className="text-brand-accent" />}
            delay={0.8}
          />
          <BentoCard
            colSpan="md:col-span-1"
            title="Secure"
            desc="Enterprise grade protection included."
            icon={<Code2 size={32} className="text-brand-accent" />}
            delay={0.9}
          />
          <BentoCard
            colSpan="md:col-span-2"
            title="Custom CMS"
            desc="Take control of your content with our intuitive management systems designed for non-techies."
            icon={<ArrowUpRight size={32} className="text-brand-accent" />}
            delay={1.0}
          />
        </div>
      </div>

      {/* Full View Modal (Lightbox) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-4"
            onClick={() => setSelectedProject(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" />

            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors z-[110] bg-white/10 p-3 rounded-full"
              onClick={() => setSelectedProject(null)}
            >
              <X size={24} />
            </motion.button>

            {/* Content Container - Maximized Size */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-[95vw] md:max-w-[90vw] h-[85vh] md:h-[90vh] overflow-hidden rounded-xl md:rounded-2xl bg-[#0a0a0a] shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-full w-full overflow-y-auto custom-scrollbar bg-neutral-900">
                <img
                  src={selectedProject}
                  alt="Full Project View"
                  className="w-full h-auto block"
                  onError={(e) => {
                    // Fallback logic inside modal
                    const target = e.target as HTMLImageElement;
                    const work = WORKS.find(w => w.image === selectedProject);
                    if (work && work.fallbackImage && target.src !== work.fallbackImage) {
                      target.src = work.fallbackImage;
                    }
                  }}
                />
              </div>

              {/* Tip */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md text-white text-xs px-4 py-2 rounded-full border border-white/10 pointer-events-none">
                Scroll to view full design
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FloatingCard = ({ image, fallback, category, title, delay, direction, color, onClick }: any) => {
  // Animation variants
  const isMobile = window.innerWidth < 768;
  const yValues = direction === 'up' ? [0, -30, 0] : [0, 30, 0];

  return (
    <motion.div
      animate={isMobile ? {} : { y: yValues }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
      className="group relative cursor-pointer"
      onClick={onClick}
    >
      {/* Browser Frame Look */}
      <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-brand-accent/50 transition-colors duration-500 shadow-2xl">
        {/* Browser Header */}
        <div className="h-8 bg-black/20 border-b border-white/5 flex items-center px-4 gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
          <div className="ml-4 w-1/2 h-1.5 rounded-full bg-white/10" />
        </div>

        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {/* REMOVED: Color Overlay causing blur/washout */}
          {/* <div className={`absolute inset-0 ${color} opacity-10 mix-blend-overlay z-10`} /> */}
          <img
            src={image}
            alt={title}
            onError={(e) => {
              // Automatically switch to fallback if local image is missing
              const target = e.target as HTMLImageElement;
              if (fallback && target.src.indexOf(fallback) === -1) {
                target.src = fallback;
              }
            }}
            className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700 ease-out"
          />

          {/* Overlay Info */}
          {/* Overlay Info - Lighter gradient to show image better */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />

          {/* Zoom Icon Hint */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100">
            <div className="bg-brand-accent/90 p-4 rounded-full text-black shadow-lg shadow-brand-accent/20">
              <ZoomIn size={32} />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 p-6 md:p-8 z-20">
            <span className="text-brand-accent text-xs font-bold tracking-widest uppercase mb-2 block">{category}</span>
            <h3 className="font-display text-2xl md:text-3xl text-white">{title}</h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BentoCard = ({ title, desc, colSpan, icon, delay }: { title: string, desc: string, colSpan: string, icon: any, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -5 }}
    className={`${colSpan} group relative p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-500 overflow-hidden`}
  >
    <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
      {icon}
    </div>

    <div className="relative z-10 h-full flex flex-col justify-end">
      <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">{title}</h3>
      <p className="text-gray-400 group-hover:text-gray-200 transition-colors">{desc}</p>
    </div>

    {/* Gradient Glow Effect */}
    <div className="absolute -inset-full group-hover:inset-[-50%] bg-gradient-radial from-brand-accent/10 to-transparent transition-all duration-700 opacity-0 group-hover:opacity-100" />
  </motion.div>
);

export default Home;