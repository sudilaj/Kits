import { useEffect, useState, useRef } from 'react';

export default function CursorGlow() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  const trailIdRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      const id = trailIdRef.current++;
      setTrail((prev) => [...prev.slice(-15), { x: e.clientX, y: e.clientY, id }]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (trail.length > 0) {
      const timer = setTimeout(() => {
        setTrail((prev) => prev.slice(1));
      }, 50); // fast fade
      return () => clearTimeout(timer);
    }
  }, [trail]);

  // Hide on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null;
  }

  return (
    <>
      <div 
        className="cursor-glow mix-blend-screen"
        style={{ left: mousePos.x, top: mousePos.y }}
      />
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="cursor-trail"
          style={{
            left: point.x,
            top: point.y,
            opacity: index / trail.length,
            transform: `translate(-50%, -50%) scale(${index / trail.length})`,
          }}
        />
      ))}
    </>
  );
}
