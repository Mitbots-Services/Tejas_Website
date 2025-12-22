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
                 class="nav-link">Home</a>
              <a routerLink="/services" routerLinkActive="text-[#BDCDE6] scale-110" class="nav-link">Services</a>
              <a routerLink="/gallery" routerLinkActive="text-[#BDCDE6] scale-110" class="nav-link">Gallery</a>
              <a routerLink="/about" routerLinkActive="text-[#BDCDE6] scale-110" class="nav-link">About</a>
              <a routerLink="/contact" routerLinkActive="text-[#BDCDE6] scale-110" class="nav-link">Contact</a>
            </div>

            <a routerLink="/booking" 
               class="px-8 py-3 border border-[#BDCDE6] text-[#BDCDE6] rounded-full uppercase text-[10px] tracking-[0.2em] font-bold 
                      hover:bg-[#BDCDE6] hover:text-[#2C2B30] hover:shadow-[0_0_20px_rgba(189,205,230,0.4)] transition-all duration-500">
              Book Now
            </a>
          </div>

          <button (click)="toggleMobileMenu()" class="md:hidden text-[#BDCDE6] p-2 focus:outline-none z-[60]">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path [attr.d]="isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" 
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <div *ngIf="isMobileMenuOpen" 
         class="mobile-menu-container fixed inset-0 z-[55] flex flex-col p-8 lg:hidden animate-fade-in">
      
      <nav class="flex flex-col space-y-4 mt-24 text-center">
        <a routerLink="/" (click)="toggleMobileMenu()" class="mobile-menu-link">Home</a>
        <a routerLink="/services" (click)="toggleMobileMenu()" class="mobile-menu-link">Services</a>
        <a routerLink="/gallery" (click)="toggleMobileMenu()" class="mobile-menu-link">Gallery</a>
        <a routerLink="/booking" (click)="toggleMobileMenu()" class="mobile-menu-link">Book Now</a>
        <a routerLink="/contact" (click)="toggleMobileMenu()" class="mobile-menu-link">Contact</a>
      </nav>
    </div>
  `,
  styles: [`
    .nav-link {
      position: relative;
      transition: all 0.3s;
      &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 1px;
        background: #BDCDE6;
        transition: width 0.3s;
      }
      &:hover::after { width: 100%; }
    }

    .gold-pulse {
      animation: goldShine 3s infinite ease-in-out;
    }

    @keyframes goldShine {
      0%, 100% { filter: drop-shadow(0 0 0 rgba(0,0,0,0)); }
      50% { filter: drop-shadow(0 0 15px rgba(255, 215, 0, 0.6)) brightness(1.1); }
    }

    /* FIX: Moved outside the keyframes block */
    .mobile-menu-container {
      background-color: #2C2B30 !important;
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
      height: 100vh;
      width: 100%;
    }

    .mobile-menu-link {
      color: #FAF3EE;
      font-family: 'Playfair Display', serif;
      font-size: 1.75rem;
      padding: 1.5rem 0;
      border-bottom: 1px solid rgba(189, 205, 230, 0.1);
      transition: all 0.3s;
      
      &:hover {
        color: #BDCDE6;
        letter-spacing: 2px;
      }
    }

    .animate-fade-in {
      animation: fadeIn 0.4s ease-out;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
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
    // Prevent background scrolling when menu is open
    if(this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
}