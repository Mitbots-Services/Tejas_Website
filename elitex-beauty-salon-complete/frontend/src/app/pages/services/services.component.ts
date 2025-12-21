import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShinyServiceCardComponent } from '../../components/shiny-service-card/shiny-service-card.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ShinyServiceCardComponent],
  template: `
    <div class="container mx-auto px-6 py-20 pt-32">
      <h1 class="text-5xl text-center font-heading mb-12">Our Services</h1>

      <!-- Filters -->
      <div class="flex justify-center space-x-4 mb-12">
        <button class="filter-btn" [class.active]="filter === 'ALL'" (click)="filter = 'ALL'">All</button>
        <button class="filter-btn" [class.active]="filter === 'HAIR'" (click)="filter = 'HAIR'">Hair</button>
        <button class="filter-btn" [class.active]="filter === 'SKIN'" (click)="filter = 'SKIN'">Skin</button>
        <button class="filter-btn" [class.active]="filter === 'NAILS'" (click)="filter = 'NAILS'">Nails</button>
        <button class="filter-btn" [class.active]="filter === 'MAKEUP'" (click)="filter = 'MAKEUP'">Makeup</button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <app-shiny-service-card
          *ngFor="let service of filteredServices"
          [name]="service.name"
          [description]="service.description"
          [price]="service.price"
          [image]="service.image">
        </app-shiny-service-card>
      </div>
    </div>
  `,
  styles: [`
    .filter-btn {
      @apply px-6 py-2 border border-primary/50 text-accent rounded-full hover:bg-primary/20 transition;
    }
    .filter-btn.active {
      @apply bg-primary text-dark;
    }
  `]
})
export class ServicesComponent {
  filter: string = 'ALL';

  services = [
    { name: 'Gold Facial', description: 'Illuminate your skin.', price: 2500, image: 'assets/images/services/gold-facial.jpg', category: 'SKIN' },
    { name: 'Diamond Hair Spa', description: 'Restore your hair\'s brilliance.', price: 3500, image: 'assets/images/services/diamond-hair-spa.jpg', category: 'HAIR' },
    { name: 'Crystal Manicure', description: 'Perfectly polished nails.', price: 1200, image: 'assets/images/services/crystal-manicure.jpg', category: 'NAILS' },
    { name: 'Bridal Makeup', description: 'Look stunning on your special day.', price: 15000, image: 'assets/images/services/bridal-makeup.jpg', category: 'MAKEUP' },
    // Add more mock services
    { name: 'Keratin Treatment', description: 'Smooth and straighten hair.', price: 6000, image: 'assets/images/services/keratin.jpg', category: 'HAIR' },
    { name: 'Acne Treatment Facial', description: 'Clear and prevent breakouts.', price: 3000, image: 'assets/images/services/acne-facial.jpg', category: 'SKIN' },
    { name: 'Gel Pedicure', description: 'Long-lasting color for your toes.', price: 1800, image: 'assets/images/services/pedicure.jpg', category: 'NAILS' },
    { name: 'Party Makeup', description: 'Get ready for any event.', price: 5000, image: 'assets/images/services/party-makeup.jpg', category: 'MAKEUP' },
  ];

  get filteredServices() {
    if (this.filter === 'ALL') {
      return this.services;
    }
    return this.services.filter(s => s.category === this.filter);
  }
}
