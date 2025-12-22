import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../core/components/navigation.component';
import { FooterComponent } from '../../core/components/footer.component';

@Component({
  selector: 'app-team', // Keeping selector same to avoid breaking router
  standalone: true,
  imports: [CommonModule, NavigationComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  
  // Section 1: Business Stats
  stats = [
    { number: '5+', label: 'Years of Excellence' },
    { number: '10k+', label: 'Happy Clients' },
    { number: '100%', label: 'Premium Products' }
  ];

  // Section 2: Core Business Pillars
  pillars = [
    {
      title: 'Uncompromised Hygiene',
      desc: 'Your safety is our priority. We adhere to clinical-grade sterilization protocols, ensuring a sanctuary that is as safe as it is luxurious.',
      icon: '🛡️'
    },
    {
      title: 'Premium Global Brands',
      desc: 'We partner exclusively with world-renowned luxury brands. From hair color to skincare, we believe your body deserves only the best ingredients.',
      icon: '✨'
    },
    {
      title: 'The Tejas Experience',
      desc: 'Beyond a service, we offer an escape. Our studio is designed to be a haven of tranquility amidst the bustle of Chennai.',
      icon: '🌿'
    }
  ];

}