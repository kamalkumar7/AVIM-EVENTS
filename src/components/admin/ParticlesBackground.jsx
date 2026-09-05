"use client";
import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles = [];
    let animationFrameId;
    let mouse = { x: null, y: null, radius: 150 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener("resize", resize);
    
    const mouseMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };
    
    const mouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };
    
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseout", mouseOut);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1; // slightly larger for soft look
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        // Slow, gentle drifting
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3 - 0.2; // slight upward drift
        
        // Randomize opacity
        this.opacity = Math.random() * 0.5 + 0.1;
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        // Create soft glow effect
        ctx.fillStyle = `rgba(201, 162, 39, ${this.opacity})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(201, 162, 39, 0.8)";
        ctx.fill();
        // Reset shadow for performance on other elements if any (none here though)
        ctx.shadowBlur = 0;
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around edges smoothly
        if (this.x < -10) this.x = canvas.width + 10;
        if (this.x > canvas.width + 10) this.x = -10;
        if (this.y < -10) this.y = canvas.height + 10;
        if (this.y > canvas.height + 10) this.y = -10;

        // Soft mouse interaction (dodge)
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            let force = (mouse.radius - distance) / mouse.radius;
            // Soft pushing force
            this.x -= forceDirectionX * force * 2;
            this.y -= forceDirectionY * force * 2;
          }
        }
        
        this.draw();
      }
    }

    function init() {
      particles = [];
      // Far fewer particles for a cleaner look
      const numberOfParticles = Math.min((canvas.width * canvas.height) / 25000, 60); 
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      animationFrameId = requestAnimationFrame(animate);
    }
    
    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseout", mouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-80"
    />
  );
}
