import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import FloatingHearts from '../components/FloatingHearts';

type Tab = 'Home' | 'I’m Sorry' | 'Images' | 'Video' | 'About';
const TABS: Tab[] = ['Home', 'I’m Sorry', 'Images', 'Video', 'About'];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('Home');

  const handleTabClick = (tab: Tab) => {
    if (tab === 'About') {
      window.open('https://wa.me/61450276919?text=Unblock%20me%20please%20my%20wife%2C%20I%20love%20you%20kithumi%20patto.', '_blank');
      return;
    }
    setActiveTab(tab);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen bg-romantic-gradient relative pt-24 pb-12 px-4 md:px-8"
    >
      <FloatingHearts />
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-md border-b border-pink-500/20">
        <div className="max-w-4xl mx-auto px-4 overflow-x-auto no-scrollbar">
          <ul className="flex space-x-2 md:space-x-8 py-4 px-2 min-w-max">
            {TABS.map((tab) => (
              <li key={tab}>
                <button
                  onClick={() => handleTabClick(tab)}
                  className={`relative px-4 py-2 text-sm md:text-base font-medium transition-all duration-300 ease-out whitespace-nowrap
                    ${activeTab === tab ? 'text-pink-200 text-glow' : 'text-pink-200/50 hover:text-pink-200/80'}
                  `}
                >
                  {tab}
                  {activeTab === tab && tab !== 'About' && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent shadow-[0_0_8px_rgba(255,105,180,0.8)]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto relative z-10 mt-8">
        <AnimatePresence mode="wait">
          {activeTab === 'Home' && <HomeTab key="home" />}
          {activeTab === 'I’m Sorry' && <SorryTab key="sorry" />}
          {activeTab === 'Images' && <ImagesTab key="images" />}
          {activeTab === 'Video' && <VideoTab key="video" />}
        </AnimatePresence>
      </main>
    </motion.div>
  );
}

// -- TABS COMPONENTS --

function HomeTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
      transition={{ duration: 0.8 }}
      className="text-center md:px-12 py-12"
    >
      <div className="glass-card p-8 md:p-16 border border-pink-500/20 shadow-[0_0_40px_rgba(255,105,180,0.15)] relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-pink-500/20 rounded-full blur-[60px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/20 rounded-full blur-[60px] pointer-events-none" />
        
        <p className="text-xl md:text-2xl font-light leading-relaxed text-pink-50 relative z-10 text-glow-soft tracking-wide">
          "Please, my Kithumi patiyo, it’s Sushu. Please forgive me. Please unblock me. You’re my girlfriend — we aren’t broken up, my beautiful baby doll. Come unblock me. I miss you. I love you so much, and I care about you so much. I’m so sorry. I suck at showing it, but I do care. Please, baby doll, unblock me, mage manika, please. I love you, I care for you, and I miss you, my beautiful girlfriend and wife."
        </p>
      </div>
    </motion.div>
  );
}

function SorryTab() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8 }}
      className="py-12"
    >
      <div className="glass-card max-w-2xl mx-auto p-8 md:p-16 border-t-2 border-t-pink-400/40 relative overflow-hidden text-left">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-handwriting romantic-gradient-text mb-8"
        >
          Hi Kithumi,
        </motion.h2>

        <div className="space-y-6 text-lg md:text-xl font-light text-pink-50/90 leading-relaxed">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            I’m really not proud of the way that I have been showing up in this relationship, and I want to take responsibility so that you can feel safe, so you can trust me again.
          </motion.p>
          
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
            I love you, and this is something I just don’t want to be done with.
          </motion.p>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}>
            I love you, and spending all my living breath with you is my goal.
          </motion.p>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.0 }}>
            I love you, and showing you all the love in the world is what I want.
          </motion.p>

          <motion.p className="text-2xl font-script text-pink-200 pt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.0 }}>
            I love you, Kithumi.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 5.0 }} className="pt-8 space-y-4">
            <p className="font-medium text-pink-100 text-glow-soft">Please don’t leave me, my love 💕</p>
            <p className="font-handwriting text-3xl text-pink-300">You mean everything to me 🙏❤️</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function ImagesTab() {
  const images = [
    { title: "Us Together ❤️", src: "/image1.jpg", fallback: "https://images.unsplash.com/photo-1518104593124-ac2e82a5eb9d?auto=format&fit=crop&q=80&w=600" }, // Replace image1.jpg with actual image in /assets
    { title: "My Favorite Girl 🌸", src: "/image2.jpg", fallback: "https://images.unsplash.com/photo-1525946146603-5853f6630fbc?auto=format&fit=crop&q=80&w=600" }, // Replace image2.jpg with actual image in /assets
    { title: "Memories I Never Want To Lose 💕", src: "/image3.jpg", fallback: "https://images.unsplash.com/photo-1534062630713-3b4cc353fced?auto=format&fit=crop&q=80&w=600" } // Replace image3.jpg with actual image in /assets
  ];

  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      {images.map((img, i) => (
        <motion.div
          key={i}
          layoutId={`img-container-${i}`}
          onClick={() => setSelectedId(i)}
          className="relative group cursor-pointer aspect-[4/5] rounded-2xl overflow-hidden glass-card border border-pink-500/30"
          whileHover={{ y: -10, scale: 1.02, boxShadow: '0 15px 30px rgba(255,105,180,0.3)' }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
          <motion.img 
            layoutId={`img-${i}`}
            src={img.src} 
            onError={(e) => (e.currentTarget.src = img.fallback)}
            alt={img.title}
            className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
            <h3 className="font-handwriting text-2xl text-pink-100">{img.title}</h3>
          </div>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          >
            <motion.div
              layoutId={`img-container-${selectedId}`}
              className="relative max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden glass-card border border-pink-400/50"
            >
              <motion.img 
                layoutId={`img-${selectedId}`}
                src={images[selectedId].src} 
                onError={(e) => (e.currentTarget.src = images[selectedId].fallback)}
                className="w-full h-full object-contain max-h-[90vh]" 
              />
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-8 left-0 right-0 text-center font-handwriting text-4xl text-white text-glow shadow-[0_4px_10px_rgba(0,0,0,0.5)] bg-black/30 p-4"
              >
                {images[selectedId].title}
              </motion.h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function VideoTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      className="py-12 flex flex-col items-center"
    >
      <div className="w-full max-w-3xl glass-card rounded-3xl overflow-hidden border border-pink-500/30 p-2 md:p-4 shadow-[0_0_50px_rgba(255,105,180,0.15)] bg-black/40">
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-black flex items-center justify-center group cursor-pointer border border-white/5">
          {/* Replace src with actual video.mp4 */}
          <video 
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
            poster="https://images.unsplash.com/photo-1498144846853-60ca2d43853b?auto=format&fit=crop&q=80&w=1200"
            controls
          >
            <source src="/video.mp4" type="video/mp4" />
            <p className="text-white">Your browser does not support HTML5 video.</p>
          </video>
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 bg-pink-500/40 backdrop-blur-md rounded-full flex items-center justify-center border border-pink-300/50 shadow-[0_0_30px_rgba(255,105,180,0.5)] transition-transform duration-300 group-hover:scale-110"
            >
              <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2" />
            </motion.div>
          </div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center"
      >
        <p className="text-2xl md:text-3xl font-handwriting romantic-gradient-text text-glow">
          I made this because I can’t lose you.
        </p>
      </motion.div>
    </motion.div>
  );
}
