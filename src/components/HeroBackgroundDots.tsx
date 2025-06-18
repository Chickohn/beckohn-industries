import React, { useRef, useEffect } from 'react';
import '../index.css'

const DOT_SPACING = 50; // px
const DOT_RADIUS = 1.5;
const REPULSE_RADIUS = 80; // px
const REPULSE_STRENGTH = 30; // px

const HeroBackgroundDots: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -1000, y: -1000 });
  const dots = useRef<{ x: number; y: number; ox: number; oy: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to fill parent
    const resize = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
      ctx.scale(dpr, dpr);
      // Recalculate dot positions to fill the canvas
      dots.current = [];
      const cols = Math.floor(width / DOT_SPACING);
      const rows = Math.floor(height / DOT_SPACING);
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * DOT_SPACING + DOT_SPACING / 2;
          const y = j * DOT_SPACING + DOT_SPACING / 2;
          dots.current.push({ x, y, ox: x, oy: y });
        }
      }
    };
    resize();
    window.addEventListener('resize', resize);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse.current.x = -1000;
      mouse.current.y = -1000;
    };
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    let running = true;
    function animate() {
      if (!running || !ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const dot of dots.current) {
        // Repulsion logic
        const dx = dot.ox - mouse.current.x;
        const dy = dot.oy - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < REPULSE_RADIUS) {
          // Calculate repulsion
          const angle = Math.atan2(dy, dx);
          const force = (REPULSE_RADIUS - dist) / REPULSE_RADIUS;
          const tx = dot.ox + Math.cos(angle) * force * REPULSE_STRENGTH;
          const ty = dot.oy + Math.sin(angle) * force * REPULSE_STRENGTH;
          // Smoothly move dot to target
          dot.x += (tx - dot.x) * 0.2;
          dot.y += (ty - dot.y) * 0.2;
        } else {
          // Return to original position
          dot.x += (dot.ox - dot.x) * 0.1;
          dot.y += (dot.oy - dot.y) * 0.1;
        }
        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, DOT_RADIUS, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(255,255,255,0.5)';
        ctx.fill();
      }
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      running = false;
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        zIndex: 0,
        pointerEvents: 'auto', // Allow mouse events for interactivity
        display: 'block',
      }}
    />
  );
};

export default HeroBackgroundDots; 