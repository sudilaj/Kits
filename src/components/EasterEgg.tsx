import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function EasterEgg() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'K' || e.key === 'k') {
        setShow(true);
        setTimeout(() => setShow(false), 4000);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[9999] px-6 py-4 glass-card border border-pink-500/30 flex items-center gap-3"
        >
          <motion.span 
            animate={{ scale: [1, 1.2, 1] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-2xl"
          >
            ❤️
          </motion.span>
          <p className="font-handwriting text-3xl romantic-gradient-text pr-2">
            I'll always love you, Kithumi ❤️
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
