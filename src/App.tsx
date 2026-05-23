import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import LoadingScreen from './screens/LoadingScreen';
import IntroScreen from './screens/IntroScreen';
import PasswordScreen from './screens/PasswordScreen';
import Dashboard from './screens/Dashboard';
import MusicPlayer from './components/MusicPlayer';
import CursorGlow from './components/CursorGlow';
import EasterEgg from './components/EasterEgg';

type ScreenState = 'loading' | 'intro' | 'password' | 'dashboard';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenState>('loading');

  useEffect(() => {
    // Initial loading simulated delay
    const timer = setTimeout(() => {
      setCurrentScreen('intro');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-romantic-gradient text-white overflow-x-hidden selection:bg-pink-500/40">
      <CursorGlow />
      <MusicPlayer />
      <EasterEgg />

      <AnimatePresence mode="wait">
        {currentScreen === 'loading' && (
          <LoadingScreen key="loading" />
        )}
        
        {currentScreen === 'intro' && (
          <IntroScreen 
            key="intro" 
            onEnter={() => setCurrentScreen('password')} 
          />
        )}
        
        {currentScreen === 'password' && (
          <PasswordScreen 
            key="password" 
            onSuccess={() => setCurrentScreen('dashboard')} 
          />
        )}
        
        {currentScreen === 'dashboard' && (
          <Dashboard key="dashboard" />
        )}
      </AnimatePresence>
    </div>
  );
}
