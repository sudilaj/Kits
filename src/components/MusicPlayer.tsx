import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play, Pause } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // This creates an audio instance but waits for user interaction across browsers
    audioRef.current = new Audio();
    // Using a reliable safe classical/emotional audio URL. 
    // In production, user should replace with local mp3 or specific URL.
    audioRef.current.src = 'https://cdn.pixabay.com/download/audio/2022/10/25/audio_2d0cc710be.mp3?filename=sad-piano-ambient-music-123497.mp3'; // Replace with actual music later
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play().catch(e => console.log("Audio play prevented:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
      onClick={togglePlay}
      className={`fixed top-6 right-6 z-50 p-4 rounded-full glass-card transition-all duration-300 hover:scale-110 ` + (isPlaying ? 'shadow-[0_0_15px_rgba(255,105,180,0.6)]' : '')}
      aria-label="Toggle ambient music"
    >
      {isPlaying ? (
        <Pause className="w-5 h-5 text-pink-300 drop-shadow-[0_0_8px_rgba(255,105,180,0.8)]" />
      ) : (
        <Play className="w-5 h-5 text-pink-300 ml-1" />
      )}
    </motion.button>
  );
}
