"use client";

import { useEffect, useRef } from "react";

export default function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const DOT_SPACING = 40;
    const DOT_RADIUS = 1;
    const GLOW_RADIUS = 150;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const { x: mx, y: my } = mouseRef.current;

      for (let x = DOT_SPACING; x < canvas.width; x += DOT_SPACING) {
        for (let y = DOT_SPACING; y < canvas.height; y += DOT_SPACING) {
          const dx = x - mx;
          const dy = y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let opacity = 0.15;
          let radius = DOT_RADIUS;

          if (dist < GLOW_RADIUS) {
            const intensity = 1 - dist / GLOW_RADIUS;
            opacity = 0.15 + intensity * 0.7;
            radius = DOT_RADIUS + intensity * 1.5;
          }

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(96, 165, 250, ${opacity})`;
          ctx.fill();
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
