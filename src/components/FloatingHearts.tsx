import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; duration: number; delay: number; scale: number }>>([]);

  useEffect(() => {
    // Generate ~20 random hearts
    const newHearts = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // 0 to 100vw
      duration: 10 + Math.random() * 15, // 10s to 25s
      delay: Math.random() * 10,
      scale: 0.3 + Math.random() * 0.7,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute bottom-[-50px]"
          style={{ left: `${heart.left}%` }}
          initial={{ y: 0, opacity: 0, scale: heart.scale }}
          animate={{ 
            y: '-110vh', 
            opacity: [0, 0.4, 0.6, 0.4, 0],
            x: [0, 30, -30, 15, 0] // Gentle drift
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: 'linear',
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="rgba(255, 105, 180, 0.4)"
            stroke="none"
            style={{ filter: 'drop-shadow(0 0 8px rgba(255,105,180,0.5))' }}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
