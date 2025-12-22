import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header class="fixed top-0 left-0 w-full z-50 bg-charcoal/80 backdrop-blur-sm shadow-lg">
      <nav class="container mx-auto px-6 py-4 flex justify-between items-center">

        <!-- Logo -->
        <a routerLink="/" class="flex items-center">
          <img src="assets/images/Logo/1000125004.png" alt="EliteX Logo" class="h-12 w-auto">
        </a>

        <!-- Menu Links -->
        <div class="hidden md:flex items-center space-x-8 text-lg font-cursive">
          <a routerLink="/services" 
             class="bg-clip-text text-transparent bg-gradient-to-r from-soft-grey to-charcoal 
                    hover:bg-gradient-to-r hover:from-misty-blue hover:via-soft-grey hover:to-porcelain
                    transition-all duration-500">
            Services
          </a>
          <a routerLink="/gallery" 
             class="bg-clip-text text-transparent bg-gradient-to-r from-soft-grey to-charcoal 
                    hover:bg-gradient-to-r hover:from-misty-blue hover:via-soft-grey hover:to-porcelain
                    transition-all duration-500">
            Gallery
          </a>
          <a routerLink="/team" 
             class="bg-clip-text text-transparent bg-gradient-to-r from-soft-grey to-charcoal 
                    hover:bg-gradient-to-r hover:from-misty-blue hover:via-soft-grey hover:to-porcelain
                    transition-all duration-500">
            Team
          </a>
          <a routerLink="/contact" 
             class="bg-clip-text text-transparent bg-gradient-to-r from-soft-grey to-charcoal 
                    hover:bg-gradient-to-r hover:from-misty-blue hover:via-soft-grey hover:to-porcelain
                    transition-all duration-500">
            Contact
          </a>
        </div>

        <!-- Book Now Button -->
        <a routerLink="/booking" 
           class="hidden md:inline-block px-6 py-2 border border-misty-blue text-misty-blue
                  rounded-full font-cursive hover:bg-gradient-to-r hover:from-misty-blue hover:via-soft-grey hover:to-porcelain
                  hover:text-charcoal transition-all duration-500">
          Book Now
        </a>

        <!-- Hamburger Menu for Mobile -->
        <button class="md:hidden text-2xl text-soft-grey hover:text-misty-blue transition duration-300">
          &#9776;
        </button>

      </nav>
    </header>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
    .font-cursive {
      font-family: 'Pacifico', cursive;
    }
  `]
})
export class HeaderComponent {}
