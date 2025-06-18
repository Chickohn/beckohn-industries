import React, { useRef, useEffect } from 'react';
import '../index.css'

const DOT_SPACING = 35; // px
const DOT_RADIUS = 1.5;
const BASE_REPULSE_RADIUS = 80; // px
const BASE_REPULSE_STRENGTH = 30; // px
const CLICK_MULTIPLIER = 3;

const HeroBackgroundDots: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -1000, y: -1000 });
  const dots = useRef<{ x: number; y: number; ox: number; oy: number }[]>([]);
  const isClicking = useRef(false);

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

    // Mouse handlers
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse.current.x = -1000;
      mouse.current.y = -1000;
      isClicking.current = false;
    };
    const handleMouseDown = () => {
      isClicking.current = true;
    };
    const handleMouseUp = () => {
      isClicking.current = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    // Handle case where mouse is released outside canvas
    window.addEventListener('mouseup', handleMouseUp);

    // Animation loop
    let running = true;
    function animate() {
      if (!running || !ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const currentRepulseRadius = isClicking.current ? BASE_REPULSE_RADIUS * (CLICK_MULTIPLIER/2) : BASE_REPULSE_RADIUS;
      const currentRepulseStrength = isClicking.current ? BASE_REPULSE_STRENGTH * CLICK_MULTIPLIER : BASE_REPULSE_STRENGTH;

      for (const dot of dots.current) {
        // Repulsion logic
        const dx = dot.ox - mouse.current.x;
        const dy = dot.oy - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < currentRepulseRadius) {
          // Calculate repulsion
          const angle = Math.atan2(dy, dx);
          const force = (currentRepulseRadius - dist) / currentRepulseRadius;
          const tx = dot.ox + Math.cos(angle) * force * currentRepulseStrength;
          const ty = dot.oy + Math.sin(angle) * force * currentRepulseStrength;
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
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        zIndex: 0,
        pointerEvents: 'auto',
        display: 'block',
        cursor: 'pointer', // Add cursor pointer to indicate interactivity
      }}
    />
  );
};

export default HeroBackgroundDots; 