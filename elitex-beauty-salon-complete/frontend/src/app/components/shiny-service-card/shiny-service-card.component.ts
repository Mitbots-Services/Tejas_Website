import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shiny-service-card',
  standalone: true,
  template: `
    <div class="relative group bg-dark border border-primary/50 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-dark to-transparent z-10"></div>
      <img [src]="image" alt="Service Image" class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500">
      <div class="absolute bottom-0 left-0 p-6 z-20">
        <h3 class="text-2xl font-heading text-primary">{{ name }}</h3>
        <p class="text-accent/80 mt-2">{{ description }}</p>
        <p class="text-primary font-bold mt-4">₹{{ price }}</p>
      </div>
      <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-sparkle to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
    </div>
  `,
  styles: [`
    @keyframes shimmer {
      0% { transform: translateX(-100%) translateY(-100%) rotate(30deg); }
      100% { transform: translateX(100%) translateY(100%) rotate(30deg); }
    }
    .animate-shimmer {
      animation: shimmer 2s infinite;
    }
  `]
})
export class ShinyServiceCardComponent {
  @Input() name: string = "Service Name";
  @Input() description: string = "Service Description";
  @Input() price: number = 0;
  @Input() image: string = "";
}
