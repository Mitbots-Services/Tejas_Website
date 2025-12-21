import { Component } from '@angular/core';
import { GlitterHeroSliderComponent } from '../../components/glitter-hero-slider/glitter-hero-slider.component';
import { ShinyServiceCardComponent } from '../../components/shiny-service-card/shiny-service-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, GlitterHeroSliderComponent, ShinyServiceCardComponent],
  template: `
    <app-glitter-hero-slider></app-glitter-hero-slider>

    <div class="container mx-auto px-6 py-20">
      <!-- Featured Services -->
      <section>
        <h2 class="text-4xl text-center font-heading mb-12">Featured Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <app-shiny-service-card 
            name="Gold Facial"
            description="Illuminate your skin with pure 24-carat gold."
            [price]="2500"
            image="assets/images/services/gold-facial.jpg">
          </app-shiny-service-card>
          <app-shiny-service-card 
            name="Diamond Hair Spa"
            description="Restore your hair's brilliance and strength."
            [price]="3500"
            image="assets/images/services/diamond-hair-spa.jpg">
          </app-shiny-service-card>
          <app-shiny-service-card 
            name="Crystal Manicure"
            description="Perfectly polished nails with a crystal finish."
            [price]="1200"
            image="assets/images/services/crystal-manicure.jpg">
          </app-shiny-service-card>
        </div>
      </section>

      <!-- Testimonials -->
      <section class="mt-20">
        <h2 class="text-4xl text-center font-heading mb-12">What Our Clients Say</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div class="bg-dark/50 p-8 rounded-lg border border-primary/20">
            <p class="font-quote text-2xl text-secondary">"An absolutely divine experience. Pure luxury!"</p>
            <p class="mt-4 font-bold text-primary">- Anjali S.</p>
          </div>
          <div class="bg-dark/50 p-8 rounded-lg border border-primary/20">
            <p class="font-quote text-2xl text-secondary">"My hair has never felt better. A must-try!"</p>
            <p class="mt-4 font-bold text-primary">- Riya M.</p>
          </div>
          <div class="bg-dark/50 p-8 rounded-lg border border-primary/20">
            <p class="font-quote text-2xl text-secondary">"The attention to detail is simply unmatched."</p>
            <p class="mt-4 font-bold text-primary">- Suresh K.</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="mt-20 text-center">
        <h2 class="text-4xl font-heading">Ready to be Pampered?</h2>
        <p class="text-accent/80 mt-4 max-w-2xl mx-auto">Book your appointment today and step into a world of luxury, relaxation, and transformation. Your journey to radiance begins here.</p>
        <button class="mt-8 px-10 py-4 bg-primary text-dark font-bold text-lg rounded-full hover:bg-opacity-80 transition duration-300 sparkle-button">
          Book Your Escape
        </button>
      </section>
    </div>
  `,
  styles: [`
    .sparkle-button:hover {
      box-shadow: 0 0 25px 5px rgba(212,175,55,0.4);
    }
  `]
})
export class HomeComponent { }
