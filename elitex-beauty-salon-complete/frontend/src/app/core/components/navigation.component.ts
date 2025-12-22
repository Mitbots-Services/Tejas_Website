import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b border-[#BDCDE6]/10" 
         [ngClass]="isScrolled ? 'bg-[#2C2B30]/95 shadow-xl backdrop-blur-md py-2' : 'bg-[#2C2B30]/30 backdrop-blur-sm py-4'">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex items-center justify-between">
          
          <a routerLink="/" class="flex items-center gap-3 group">
            <img src="assets/images/Logo/Tejas-logo.png" alt="Tejas Logo" 
                 class="h-24 w-auto transition-transform duration-500 group-hover:scale-110 gold-pulse">
          </a>

          <div class="hidden md:flex items-center gap-8">
            <div class="flex gap-6 text-[11px] uppercase tracking-[0.2em] font-medium text-[#FAF3EE]">
              <a routerLink="/" routerLinkActive="text-[#BDCDE6] scale-110" [routerLinkActiveOptions]="{exact: true}" 
                 class="hover:text-[#BDCDE6] hover:scale-110 transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#BDCDE6] hover:after:w-full after:transition-all">Home</a>
              
              <a routerLink="/services" routerLinkActive="text-[#BDCDE6] scale-110" 
                 class="hover:text-[#BDCDE6] hover:scale-110 transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#BDCDE6] hover:after:w-full after:transition-all">Services</a>
              
              <a routerLink="/gallery" routerLinkActive="text-[#BDCDE6] scale-110" 
                 class="hover:text-[#BDCDE6] hover:scale-110 transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#BDCDE6] hover:after:w-full after:transition-all">Gallery</a>
              
              <a routerLink="/team" routerLinkActive="text-[#BDCDE6] scale-110" 
                 class="hover:text-[#BDCDE6] hover:scale-110 transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#BDCDE6] hover:after:w-full after:transition-all">Team</a>
              
              <a routerLink="/blog" routerLinkActive="text-[#BDCDE6] scale-110" 
                 class="hover:text-[#BDCDE6] hover:scale-110 transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#BDCDE6] hover:after:w-full after:transition-all">Blog</a>

              <a routerLink="/contact" routerLinkActive="text-[#BDCDE6] scale-110" 
                 class="hover:text-[#BDCDE6] hover:scale-110 transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#BDCDE6] hover:after:w-full after:transition-all">Contact</a>
            </div>

            <a routerLink="/booking" 
               class="px-8 py-3 border border-[#BDCDE6] text-[#BDCDE6] rounded-full uppercase text-[10px] tracking-[0.2em] font-bold 
                      hover:bg-[#BDCDE6] hover:text-[#2C2B30] hover:shadow-[0_0_20px_rgba(189,205,230,0.4)] transition-all duration-500">
              Book Now
            </a>
          </div>

          <button (click)="toggleMobileMenu()" class="md:hidden text-[#BDCDE6] p-2 focus:outline-none">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path *ngIf="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
              <path *ngIf="isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div *ngIf="isMobileMenuOpen" 
             class="md:hidden absolute top-full left-0 right-0 bg-[#2C2B30]/98 backdrop-blur-xl border-t border-[#B2BABC]/20 shadow-2xl transition-all duration-300">
          <div class="flex flex-col p-8 space-y-6 text-center">
            <a routerLink="/" (click)="toggleMobileMenu()" class="text-[#FAF3EE] hover:text-[#BDCDE6] uppercase tracking-[0.3em] text-xs">Home</a>
            <a routerLink="/services" (click)="toggleMobileMenu()" class="text-[#FAF3EE] hover:text-[#BDCDE6] uppercase tracking-[0.3em] text-xs">Services</a>
            <a routerLink="/gallery" (click)="toggleMobileMenu()" class="text-[#FAF3EE] hover:text-[#BDCDE6] uppercase tracking-[0.3em] text-xs">Gallery</a>
            <a routerLink="/team" (click)="toggleMobileMenu()" class="text-[#FAF3EE] hover:text-[#BDCDE6] uppercase tracking-[0.3em] text-xs">Team</a>
            <a routerLink="/blog" (click)="toggleMobileMenu()" class="text-[#FAF3EE] hover:text-[#BDCDE6] uppercase tracking-[0.3em] text-xs">Blog</a>
            <a routerLink="/contact" (click)="toggleMobileMenu()" class="text-[#FAF3EE] hover:text-[#BDCDE6] uppercase tracking-[0.3em] text-xs">Contact</a>
            <a routerLink="/booking" (click)="toggleMobileMenu()" class="inline-block mx-auto px-8 py-3 bg-[#BDCDE6] text-[#2C2B30] rounded-full uppercase text-[10px] tracking-[0.2em] font-bold">Book Now</a>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .font-girly { font-family: 'Great Vibes', cursive; }
    
    .gold-pulse {
      animation: goldShine 3s infinite ease-in-out;
    }

    @keyframes goldShine {
      0%, 100% { filter: drop-shadow(0 0 0 rgba(0,0,0,0)); }
      50% { filter: drop-shadow(0 0 15px rgba(255, 215, 0, 0.6)) brightness(1.1); }
    }
  `]
})
export class NavigationComponent {
  isMobileMenuOpen = false;
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu(): void { 
    this.isMobileMenuOpen = !this.isMobileMenuOpen; 
  }
}