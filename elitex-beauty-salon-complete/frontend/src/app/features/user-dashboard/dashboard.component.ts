import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-charcoal via-misty-blue to-soft-grey p-8">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-5xl font-bold bg-gradient-to-r from-soft-gold to-champagne bg-clip-text text-transparent mb-4">
          My Dashboard
        </h1>
        <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 card-luxury">
          <p class="text-white text-lg">User appointments and profile management coming soon!</p>
        </div>
      </div>
    </div>
  `
})
export class DashboardComponent {}
