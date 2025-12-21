import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header class="fixed top-0 left-0 w-full z-50 bg-dark/80 backdrop-blur-sm">
      <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
        <a routerLink="/" class="text-3xl font-heading text-primary">EliteX</a>
        <div class="hidden md:flex items-center space-x-8">
          <a routerLink="/services" class="text-accent hover:text-primary transition">Services</a>
          <a routerLink="/gallery" class="text-accent hover:text-primary transition">Gallery</a>
          <a routerLink="/team" class="text-accent hover:text-primary transition">Team</a>
          <a routerLink="/contact" class="text-accent hover:text-primary transition">Contact</a>
        </div>
        <a routerLink="/booking" class="hidden md:inline-block px-6 py-2 border border-primary text-primary rounded-full hover:bg-primary hover:text-dark transition">Book Now</a>
        <button class="md:hidden text-primary text-2xl">
          &#9776;
        </button>
      </nav>
    </header>
  `
})
export class HeaderComponent {}
