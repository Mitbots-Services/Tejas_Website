import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NavigationComponent } from '../../core/components/navigation.component';
import { FooterComponent } from '../../core/components/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, NavigationComponent, FooterComponent]
})
export class HomeComponent implements OnInit {
  featuredServices = [
    { id: 'hair', name: 'Hair Services', icon: '✂️', description: 'Expert cuts, colors, and styling', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800' },
    { id: 'nails', name: 'Nail Services', icon: '💅', description: 'Manicures, pedicures, nail art', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800' },
    { id: 'facial', name: 'Facial & Skin Care', icon: '✨', description: 'Rejuvenating treatments', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800' },
    { id: 'bridal', name: 'Bridal Services', icon: '💎', description: 'Complete bridal makeovers', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800' },
    { id: 'waxing', name: 'Waxing Services', icon: '🌹', description: 'Professional waxing treatments', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800' },
    { id: 'mehandi', name: 'Mehandi Art', icon: '🎨', description: 'Traditional and modern designs', image: 'https://images.unsplash.com/photo-1610735683869-2e6c582d6640?w=800' }
  ];

  stats = [
    { icon: '👩‍🦰', value: '15K+', label: 'Happy Clients' },
    { icon: '⭐', value: '4.9/5', label: 'Average Rating' },
    { icon: '💇‍♀️', value: '20+', label: 'Expert Stylists' },
    { icon: '🏆', value: '50+', label: 'Awards Won' }
  ];

  testimonials = [
    { customerName: 'Alexandra Montgomery', rating: 5, review: 'Valentina transformed my wedding day! The bridal package was worth every penny. My hair stayed perfect for 12 hours, and I felt like a princess.', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300' },
    { customerName: 'Victoria Chen', rating: 5, review: 'The balayage Marcus created is absolutely stunning! I have received countless compliments. The color is so natural and sun-kissed.', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300' },
    { customerName: 'Sophia Martinez', rating: 5, review: 'Dr. Elena\'s gold facial gave me the most radiant glow! My skin has never looked better. The entire experience was so relaxing and luxurious.', image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300' },
    { customerName: 'Isabella Romano', rating: 5, review: 'Anastasia\'s nail art is pure artistry! The attention to detail and creativity is unmatched. My nails lasted 4 weeks without a single chip.', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300' }
  ];

  stylists = [
    { name: 'Valentina Rossi', specialization: 'Bridal & Celebrity Styling', bio: 'Award-winning master stylist with over 15 years of experience in haute couture hairstyling.', rating: 4.98, totalReviews: 328, experience: 15, image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=500' },
    { name: 'Marcus Chen', specialization: 'Hair Color & Balayage', bio: 'International hair color specialist featured in Vogue. Expert in balayage, ombré, and precision cutting.', rating: 4.96, totalReviews: 287, experience: 12, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500' },
    { name: 'Dr. Elena Martinez', specialization: 'Advanced Skincare & Facials', bio: 'Board-certified aesthetician specializing in luxury facial treatments and anti-aging therapies.', rating: 5.00, totalReviews: 523, experience: 18, image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500' }
  ];

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.setupScrollAnimations();
  }

  navigateToCategory(categoryId: string): void {
    // Now points to /services instead of deleted /service-categories
    this.router.navigate(['/services'], { queryParams: { category: categoryId } });
  }

  private setupScrollAnimations(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 100);
  }
}
