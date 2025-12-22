import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
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
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('carousel') carousel!: ElementRef<HTMLDivElement>;

  // Carousel state
  currentIndex = 0;
  slideWidth = 0;
  totalSlides = 0;
  autoSlideInterval: any;
  isDragging = false;
  startX = 0;

  // Featured Signature Services
  // CRITICAL FIX: IDs now match the specific services in ServiceCategoriesComponent exactly
  featuredServices = [
    { 
      id: 'adv-layer-wash', // Matches service: 'Advance Layer Cut (Full)'
      name: 'Advance Layer Cut', 
      icon: '✂️', 
      description: 'Precision styling for the modern aesthetic.', 
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800' 
    },
    { 
      id: 'keratin', // Matches service: 'Keratin Treatment'
      name: 'Keratin Infusion', 
      icon: '💆‍♀️', 
      description: 'Restorative smoothing for intense radiance.', 
      image: 'https://images.unsplash.com/photo-1610735683869-2e6c582d6640?w=800' 
    },
    { 
      id: 'protein-botox', // Matches service: 'Protein Botox'
      name: 'Protein Botox', 
      icon: '🌿', 
      description: 'Deep structural repair for damaged strands.', 
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800' 
    },
    { 
      id: 'gold-facial', // Matches service: 'Gold Facial'
      name: '24K Gold Ritual', 
      icon: '✨', 
      description: 'The ultimate skin rejuvenation experience.', 
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800' 
    },
    { 
      id: 'hydra-facial', // Matches service: 'Hydra Facial'
      name: 'Hydra Facial', 
      icon: '💧', 
      description: 'Deep cleansing and hydration ritual.', 
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800' 
    },
    { 
      id: 'bridal-mkp', // Matches service: 'Bridal Makeover'
      name: 'Royal Makeover', 
      icon: '💎', 
      description: 'Exquisite bridal artistry for your special day.', 
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800' 
    },
    { 
      id: 'spa-mani', // Matches service: 'Spa Manicure'
      name: 'Spa Manicure', 
      icon: '💅', 
      description: 'Luxury pampering for your hands.', 
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800' 
    },
    { 
      id: 'wax-full-body', // Matches service: 'Full Body' (under Premium Waxing - Body)
      name: 'Premium Waxing', 
      icon: '🌹', 
      description: 'Smooth perfection with detan care.', 
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800' 
    },
    { 
      id: 'bridal-meh', // Matches service: 'Bridal Mehandi'
      name: 'Henna Artistry', 
      icon: '🎨', 
      description: 'Intricate traditional and modern designs.', 
      image: 'https://images.unsplash.com/photo-1610735683869-2e6c582d6640?w=800' 
    },
    { 
      id: 'transform', // Matches service: 'Transformation Package'
      name: 'Transformation Pkg', 
      icon: '👑', 
      description: '3-month premium results guaranteed.', 
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800' 
    }
  ];

  // Stats
  stats = [
    { icon: '👩‍🦰', value: '15K+', label: 'Happy Clients' },
    { icon: '⭐', value: '4.9/5', label: 'Average Rating' },
    { icon: '💇‍♀️', value: '20+', label: 'Expert Stylists' },
    { icon: '🏆', value: '50+', label: 'Awards Won' }
  ];

  // Testimonials
  testimonials = [
    { 
      customerName: 'Ananya Singh', 
      rating: 5, 
      review: 'Aarushi transformed my wedding look! The bridal package was worth every rupee. My hair and makeup stayed perfect throughout the day.', 
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300' 
    },
    { 
      customerName: 'Riya Patel', 
      rating: 5, 
      review: 'The balayage Rohan created is absolutely stunning! I have received endless compliments. The color looks so natural and vibrant.', 
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300' 
    },
    { 
      customerName: 'Priyanka Sharma', 
      rating: 5, 
      review: 'Dr. Priya\'s gold facial gave me the most radiant glow! My skin has never felt so fresh and rejuvenated.', 
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300' 
    },
    { 
      customerName: 'Shreya Kapoor', 
      rating: 5, 
      review: 'Aarushi\'s nail art is pure artistry! The attention to detail and creativity is unmatched. My nails looked perfect for weeks.', 
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300' 
    }
  ];

  // Stylists
  stylists = [
    { 
      name: 'Aarushi Mehta', 
      specialization: 'Bridal & Celebrity Styling', 
      bio: 'Award-winning master stylist with over 15 years of experience in bridal and celebrity hairstyling across India.', 
      rating: 4.98, 
      totalReviews: 328, 
      experience: 15, 
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=500' 
    },
    { 
      name: 'Rohan Kapoor', 
      specialization: 'Hair Color & Balayage', 
      bio: 'Expert in balayage, ombré, and precision cutting, serving clients in top salons in Mumbai and Delhi.', 
      rating: 4.96, 
      totalReviews: 287, 
      experience: 12, 
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500' 
    },
    { 
      name: 'Dr. Priya Sharma', 
      specialization: 'Advanced Skincare & Facials', 
      bio: 'Board-certified aesthetician specializing in luxury facials, anti-aging treatments, and skincare solutions tailored for Indian skin types.', 
      rating: 5.00, 
      totalReviews: 523, 
      experience: 18, 
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500' 
    }
  ];

  constructor(public router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.totalSlides = this.featuredServices.length;
    setTimeout(() => {
        this.updateCarouselMetrics();
        this.startAutoSlide();
        this.setupScrollAnimations();
    }, 500);
    
    window.addEventListener('resize', () => {
      this.updateCarouselMetrics();
    });
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  // Calculate slide dimensions and boundaries
  updateCarouselMetrics() {
    if (this.carousel && this.carousel.nativeElement.children.length > 0) {
        const firstItem = this.carousel.nativeElement.children[0] as HTMLElement;
        const style = getComputedStyle(this.carousel.nativeElement);
        const gap = parseInt(style.gap || '32'); 
        this.slideWidth = firstItem.offsetWidth + gap;
        this.updateSlidePosition(); 
    }
  }

  // Helper to determine how many items are currently visible
  get visibleItemsCount(): number {
    if (!this.carousel) return 1;
    const containerWidth = this.carousel.nativeElement.offsetWidth;
    const itemWidth = this.slideWidth || 300; 
    return Math.floor(containerWidth / itemWidth) || 1;
  }

  // Helper to calculate the maximum valid index
  get maxIndex(): number {
    return Math.max(0, this.totalSlides - this.visibleItemsCount);
  }

  nextSlide() {
    if (this.currentIndex < this.maxIndex) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Loop back
    }
    this.updateSlidePosition();
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.maxIndex; // Loop to end
    }
    this.updateSlidePosition();
  }

  updateSlidePosition() {
    if (this.currentIndex > this.maxIndex) {
      this.currentIndex = this.maxIndex;
    }
    const offset = this.currentIndex * this.slideWidth;
    this.carousel.nativeElement.style.transform = `translateX(-${offset}px)`;
    this.carousel.nativeElement.style.transition = 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
  }

  startAutoSlide() {
    this.stopAutoSlide();
    this.autoSlideInterval = setInterval(() => this.nextSlide(), 4000);
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  // Drag / Swipe Logic
  startDrag(event: MouseEvent | TouchEvent) {
    this.stopAutoSlide();
    this.isDragging = true;
    this.startX = this.getEventX(event);
    this.carousel.nativeElement.style.transition = 'none';
  }

  onDrag(event: MouseEvent | TouchEvent) {
    if (!this.isDragging) return;
    const x = this.getEventX(event);
    const delta = x - this.startX;
    const currentOffset = -this.currentIndex * this.slideWidth;
    this.carousel.nativeElement.style.transform = `translateX(${currentOffset + delta}px)`;
  }

  endDrag(event: MouseEvent | TouchEvent) {
    if (!this.isDragging) return;
    this.isDragging = false;
    const x = this.getEventX(event);
    const delta = x - this.startX;
    
    if (delta > 50) {
      this.prevSlide();
    } else if (delta < -50) {
      this.nextSlide();
    } else {
      this.updateSlidePosition();
    }
    this.startAutoSlide();
  }

  private getEventX(event: MouseEvent | TouchEvent): number {
    return event instanceof MouseEvent ? event.pageX : event.touches[0].pageX;
  }

  // LINK REDIRECTION
  // Navigates to /services and passes the specific serviceId to trigger hover state
  navigateToCategory(serviceId: string): void {
    this.router.navigate(['/services'], { queryParams: { serviceId: serviceId } });
  }

  private setupScrollAnimations(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
}