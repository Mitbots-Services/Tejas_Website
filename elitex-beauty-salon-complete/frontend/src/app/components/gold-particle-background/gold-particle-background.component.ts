import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-gold-particle-background',
  standalone: true,
  template: `<canvas id="gold-particle-canvas" class="absolute inset-0 z-0"></canvas>`,
  styles: [""]
})
export class GoldParticleBackgroundComponent implements AfterViewInit {

  ngAfterViewInit() {
    const canvas = document.getElementById('gold-particle-canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles: any[] = [];

    const createParticle = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 1;
      const vx = Math.random() * 0.5 - 0.25;
      const vy = Math.random() * 0.5 - 0.25;
      const opacity = Math.random() * 0.3;

      particles.push({ x, y, radius, vx, vy, opacity });
    };

    for (let i = 0; i < 300; i++) {
      createParticle();
    }

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity})`;
        ctx.fill();
      });
    };

    animate();

     window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        particles = [];
        for (let i = 0; i < 300; i++) {
          createParticle();
        }
    });
  }
}
