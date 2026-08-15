import React, { useEffect, useRef } from 'react';

export const AmbientBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle pool setup
    const particleCount = Math.min(Math.floor((width * height) / 18000), 45);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 0.8,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.4 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.005,
      goldHue: Math.random() > 0.5 ? '#D4AF37' : '#C5A059'
    }));

    let laserAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep radial background gradient glow
      const bgGlow = ctx.createRadialGradient(
        width * 0.5,
        height * 0.4,
        100,
        width * 0.5,
        height * 0.5,
        Math.max(width, height)
      );
      bgGlow.addColorStop(0, 'rgba(45, 46, 45, 0.6)');
      bgGlow.addColorStop(0.5, 'rgba(36, 37, 36, 0.4)');
      bgGlow.addColorStop(1, 'rgba(28, 29, 28, 0.9)');
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, width, height);

      // Render subtle metallic gold laser sweep line
      laserAngle += 0.002;
      const laserX = width * 0.5 + Math.sin(laserAngle) * (width * 0.4);
      const laserGrad = ctx.createLinearGradient(laserX - 150, 0, laserX + 150, height);
      laserGrad.addColorStop(0, 'rgba(212, 175, 55, 0)');
      laserGrad.addColorStop(0.5, 'rgba(212, 175, 55, 0.04)');
      laserGrad.addColorStop(1, 'rgba(197, 160, 89, 0)');
      ctx.fillStyle = laserGrad;
      ctx.fillRect(0, 0, width, height);

      // Render particles & connect mesh
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.alpha += Math.sin(laserAngle * 5 + i) * 0.003;

        // Draw particle dot with faint gold radial glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.goldHue;
        ctx.globalAlpha = Math.max(0.1, Math.min(0.6, p.alpha));
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#D4AF37';
            ctx.globalAlpha = (1 - dist / 130) * 0.12;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
};
