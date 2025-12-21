import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 shadow-lg">
      <div class="max-w-7xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <a routerLink="/" class="flex items-center gap-2">
            <div class="text-3xl font-elegant font-bold bg-gradient-to-r from-charcoal via-misty-blue to-charcoal bg-clip-text text-transparent">
              Tejas Beauty Salon
            </div>
          </a>

          <div class="hidden md:flex items-center gap-8">
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }"
               class="nav-link text-charcoal hover:text-misty-blue transition-colors">Home</a>
            <a routerLink="/service-categories" routerLinkActive="active"
               class="nav-link text-charcoal hover:text-misty-blue transition-colors">Services</a>
            <a routerLink="/gallery" routerLinkActive="active"
               class="nav-link text-charcoal hover:text-misty-blue transition-colors">Gallery</a>
            <a routerLink="/team" routerLinkActive="active"
               class="nav-link text-charcoal hover:text-misty-blue transition-colors">Team</a>
            <a routerLink="/blog" routerLinkActive="active"
               class="nav-link text-charcoal hover:text-misty-blue transition-colors">Blog</a>
            <a routerLink="/contact" routerLinkActive="active"
               class="nav-link text-charcoal hover:text-misty-blue transition-colors">Contact</a>

            <a routerLink="/booking"
               class="px-6 py-2 bg-gradient-to-r from-misty-blue to-soft-grey text-white rounded-full font-medium hover:shadow-lg transition-all transform hover:scale-105">
              Book Now
            </a>
          </div>

          <button (click)="toggleMobileMenu()" class="md:hidden text-charcoal focus:outline-none">
            <svg *ngIf="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg *ngIf="isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div *ngIf="isMobileMenuOpen" class="md:hidden mt-4 pb-4 space-y-3">
          <a routerLink="/" (click)="toggleMobileMenu()" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }"
             class="block py-2 text-charcoal hover:text-misty-blue transition-colors">Home</a>
          <a routerLink="/service-categories" (click)="toggleMobileMenu()" routerLinkActive="active"
             class="block py-2 text-charcoal hover:text-misty-blue transition-colors">Services</a>
          <a routerLink="/gallery" (click)="toggleMobileMenu()" routerLinkActive="active"
             class="block py-2 text-charcoal hover:text-misty-blue transition-colors">Gallery</a>
          <a routerLink="/team" (click)="toggleMobileMenu()" routerLinkActive="active"
             class="block py-2 text-charcoal hover:text-misty-blue transition-colors">Team</a>
          <a routerLink="/blog" (click)="toggleMobileMenu()" routerLinkActive="active"
             class="block py-2 text-charcoal hover:text-misty-blue transition-colors">Blog</a>
          <a routerLink="/contact" (click)="toggleMobileMenu()" routerLinkActive="active"
             class="block py-2 text-charcoal hover:text-misty-blue transition-colors">Contact</a>
          <a routerLink="/booking" (click)="toggleMobileMenu()"
             class="block py-2 px-6 bg-gradient-to-r from-misty-blue to-soft-grey text-white rounded-full font-medium text-center">Book Now</a>
        </div>
      </div>
    </nav>

    <div class="h-20"></div>
  `,
  styles: [`
    .nav-link { font-weight: 500; position: relative; }
    .nav-link.active { color: #BDCDE6; }
    .nav-link.active::after {
      content: '';
      position: absolute;
      bottom: -4px; left: 0; right: 0;
      height: 2px;
      background: linear-gradient(to right, #BDCDE6, #B2BABC);
      border-radius: 2px;
    }
  `]
})
export class NavigationComponent {
  isMobileMenuOpen = false;
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
