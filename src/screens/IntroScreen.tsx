import { motion } from 'motion/react';
import FloatingHearts from '../components/FloatingHearts';

interface Props {
  onEnter: () => void;
  key?: string;
}

export default function IntroScreen({ onEnter }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      className="relative min-h-screen flex flex-col items-center justify-center bg-romantic-gradient p-4 text-center overflow-hidden"
    >
      <FloatingHearts />
      
      {/* Sparkles overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none mix-blend-screen" />

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.2, ease: 'easeOut' }}
        className="z-10 flex flex-col items-center"
      >
        <h1 className="text-6xl md:text-8xl font-handwriting romantic-gradient-text text-glow mb-6 leading-tight pb-4">
          Hi Kithumi ❤️
        </h1>
        
        <p className="text-lg md:text-2xl font-light text-pink-100 max-w-xl mx-auto mb-16 text-glow-soft">
          Someone loves you more than words can explain.
        </p>

        <motion.button
          whileHover={{ 
            scale: 1.05, 
            boxShadow: '0 0 30px rgba(255,105,180,0.6)' 
          }}
          whileTap={{ scale: 0.95 }}
          onClick={onEnter}
          className="relative overflow-hidden group glass-card px-10 py-4 rounded-full border border-pink-400/40 text-pink-100 font-medium tracking-wider text-lg uppercase shadow-[0_0_15px_rgba(255,105,180,0.3)] transition-all duration-300"
        >
          {/* Button hover ripple/glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-400/20 to-pink-500/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out" />
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">Enter Program</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
