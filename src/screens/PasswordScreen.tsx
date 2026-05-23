import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, ArrowRight } from 'lucide-react';
import FloatingHearts from '../components/FloatingHearts';

interface Props {
  onSuccess: () => void;
  key?: string;
}

export default function PasswordScreen({ onSuccess }: Props) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validPasswords = ['wait', 'WAIT', 'Wait'];
    if (validPasswords.includes(password.trim())) {
      onSuccess();
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -50, filter: 'blur(20px)' }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
      className="relative min-h-screen flex items-center justify-center bg-romantic-gradient p-4 overflow-hidden"
    >
      <FloatingHearts />

      <motion.div 
        className="glass-card relative z-10 p-8 md:p-12 max-w-md w-full text-center border border-pink-500/20 shadow-[0_0_50px_rgba(255,105,180,0.15)]"
        animate={error ? { x: [-10, 10, -10, 10, 0], transition: { duration: 0.4 } } : {}}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.2 }}
          className="w-16 h-16 rounded-full bg-pink-500/20 mx-auto flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(255,105,180,0.4)]"
        >
          <Lock className="w-8 h-8 text-pink-300" />
        </motion.div>

        <h2 className="text-3xl font-script romantic-gradient-text mb-2 pb-2">
          Only my Kithumi can enter ❤️
        </h2>
        
        <form onSubmit={handleSubmit} className="mt-8">
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter the password..."
              className={`w-full bg-black/20 border ${error ? 'border-red-500/50' : 'border-pink-300/30'} focus:border-pink-400 focus:ring-1 focus:ring-pink-400 rounded-xl py-4 px-6 text-pink-100 placeholder-pink-200/50 outline-none transition-all duration-300 text-center font-serif tracking-widest`}
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-pink-500/20 text-pink-300 transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-6 mb-2 min-h-[24px]">
            {error ? (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm font-medium"
              >
                That’s not it, my love 💔
              </motion.p>
            ) : (
              <p className="text-pink-200/60 text-sm italic font-light">
                Hint: The last WhatsApp message sent to you.
              </p>
            )}
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
