import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(20px)' }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-romantic-gradient bg-black"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          filter: [
            'drop-shadow(0 0 10px rgba(255,105,180,0.4))',
            'drop-shadow(0 0 30px rgba(255,105,180,0.8))',
            'drop-shadow(0 0 10px rgba(255,105,180,0.4))'
          ]
        }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Heart fill="#ff69b4" className="w-16 h-16 text-pink-500 mb-6" />
      </motion.div>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-xl font-sans tracking-widest text-pink-200 text-glow-soft"
      >
        Loading love...
      </motion.h2>
    </motion.div>
  );
}
