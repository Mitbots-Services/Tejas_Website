import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="app-container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .app-container {
      position: relative;
      min-height: 100vh;
    }
  `]
})
export class AppComponent implements OnInit {
  // Inject services needed for scrolling and navigation
  private router = inject(Router);
  private viewportScroller = inject(ViewportScroller);

  constructor() {
    // 1. Force the browser to stop remembering scroll positions (Fixes Back button/Refresh)
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }

  ngOnInit(): void {
    this.initParticles();
    this.handleScrollToTop();
  }

  private handleScrollToTop(): void {
    // 2. Listen for every navigation end (clicking links or back/forward)
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Force scroll to (0,0)
      window.scrollTo(0, 0);
      this.viewportScroller.scrollToPosition([0, 0]);
    });

    // 3. Force scroll to top on a hard Refresh (F5)
    window.addEventListener('load', () => {
      window.scrollTo(0, 0);
    });
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