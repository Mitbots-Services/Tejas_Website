import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="app-container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.initParticles();
  }

  private initParticles(): void {
    const particlesContainer = document.getElementById('particles-js');
    if (!particlesContainer) return;

    const colors = ['#BDCDE6', '#B2BABC', '#FAF3EE'];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.cssText = `
        position: fixed;
        width: ${Math.random() * 5 + 1}px;
        height: ${Math.random() * 5 + 1}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        left: ${Math.random() * 100}vw;
        top: ${Math.random() * 100}vh;
        opacity: ${Math.random() * 0.5 + 0.2};
        border-radius: 50%;
        animation: float ${Math.random() * 10 + 5}s linear infinite;
        animation-delay: ${Math.random() * 5}s;
        pointer-events: none;
        z-index: 0;
      `;
      particlesContainer.appendChild(particle);
    }
  }
}
