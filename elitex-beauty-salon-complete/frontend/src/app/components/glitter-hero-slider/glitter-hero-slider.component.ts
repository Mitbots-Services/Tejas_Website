import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-glitter-hero-slider',
  standalone: true,
  template: `
    <div class="relative w-full h-screen overflow-hidden">
      <div class="absolute inset-0 bg-dark opacity-50 z-10"></div>
      <div id="hero-slider" class="absolute inset-0">
        <!-- Background image would go here -->
        <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('assets/images/hero-1.jpg');"></div>
      </div>
      <div class="relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 class="text-6xl md:text-8xl font-heading text-primary">Experience True Luxury</h1>
        <p class="mt-4 text-lg md:text-xl font-quote text-accent">Your sanctuary of beauty and elegance</p>
        <button class="mt-8 px-8 py-3 bg-primary text-dark font-bold rounded-full hover:bg-opacity-80 transition duration-300 sparkle-button">
          Book Now
        </button>
      </div>
      <canvas id="glitter-canvas" class="absolute inset-0 z-0"></canvas>
    </div>
  `,
  styles: [`
    .sparkle-button:hover {
      box-shadow: 0 0 25px 5px rgba(212,175,55,0.4);
    }
  `]
})
export class GlitterHeroSliderComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.initGlitterEffect();
  }

  initGlitterEffect() {
    const canvas = document.getElementById('glitter-canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles: any[] = [];

    const createParticle = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 1.5;
      const vx = Math.random() * 1 - 0.5;
      const vy = Math.random() * 1 - 0.5;
      const opacity = Math.random() * 0.5 + 0.2;

      particles.push({ x, y, radius, vx, vy, opacity });
    };

    for (let i = 0; i < 150; i++) {
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
        for (let i = 0; i < 150; i++) {
          createParticle();
        }
    });
  }
}
