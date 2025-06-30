"use client";

import { Circle } from "@/utils/animation/particles";
import { useEffect, useRef } from "react";

function ParticlesAnim() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
  if (!canvasRef.current) return;
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Setup resize
  const resize = () => {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
  };
  resize();
  window.addEventListener("resize", resize);

  // Setup particles
  const circles: Circle[] = [];
  for (let i = 0; i < 20; i++) {
    circles.push(
      new Circle(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        10,
        "#b76e0b",
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      )
    );
  }

  let animationFrameId: number;

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circles.forEach(circle => {
      circle.update(canvas.width, canvas.height);
      circle.draw(ctx);
    });
    animationFrameId = requestAnimationFrame(animate);
  };
  animate();

  return () => {
    window.removeEventListener("resize", resize);
    cancelAnimationFrame(animationFrameId);
  };
}, []);


  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 z-[-10] m-0 p-0 overflow-hidden"
    />
  );
}

export default ParticlesAnim;
