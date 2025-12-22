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

  // Carousel State
  currentIndex = 0;
  slideWidth = 0;
  totalSlides = 0;
  autoSlideInterval: any;
  isDragging = false;
  startX = 0;

  // 1. SIGNATURE SERVICES (10 Items with Generated Images)
  featuredServices = [
    { 
      id: 'adv-layer-wash',
      name: 'Advance Layer Cut', 
      icon: 'assets/icons/scissors.png',
      description: 'Precision styling for modern aesthetics.', 
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800'
    },
    { 
      id: 'keratin',
      name: 'Keratin Infusion', 
      icon: 'assets/icons/hair-straightener.png',
      description: 'Restorative smoothing for radiance.', 
      image: 'https://images.unsplash.com/photo-1610735683869-2e6c582d6640?w=800'
    },
    { 
      id: 'protein-botox',
      name: 'Protein Botox', 
      icon: 'assets/icons/treatment.png',
      description: 'Deep structural repair for damage.', 
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800'
    },
    { 
      id: 'gold-facial',
      name: '24K Gold Ritual', 
      icon: 'assets/icons/mask.png',
      description: 'The ultimate skin rejuvenation.', 
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800'
    },
    { 
      id: 'hydra-facial',
      name: 'Hydra Facial', 
      icon: 'assets/icons/facial.png',
      description: 'Deep cleansing and hydration.', 
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800'
    },
    { 
      id: 'bridal-mkp',
      name: 'Royal Makeover', 
      icon: 'assets/icons/makeup-brush.png',
      description: 'Exquisite bridal artistry.', 
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800'
    },
    { 
      id: 'spa-mani',
      name: 'Spa Manicure', 
      icon: 'assets/icons/nail-polish.png',
      description: 'Luxury pampering for hands.', 
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800'
    },
    { 
      id: 'wax-full-body',
      name: 'Premium Waxing', 
      icon: 'assets/icons/flower.png',
      description: 'Smooth perfection with detan.', 
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800'
    },
    { 
      id: 'bridal-meh',
      name: 'Henna Artistry', 
      icon: 'assets/icons/art.png',
      description: 'Intricate traditional designs.', 
      image: 'https://images.unsplash.com/photo-1610735683869-2e6c582d6640?w=800'
    },
    { 
      id: 'transform',
      name: 'Transformation Pkg', 
      icon: 'assets/icons/crown.png',
      description: '3-month premium results.', 
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800'
    }
  ];

  // 2. OUR EXPERTISE (Categories)
  serviceCategories = [
    {
      id: 'hair',
      title: 'Hair Artistry',
      subtitle: 'Cuts • Color',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800'
    },
    {
      id: 'skin',
      title: 'Clinical Aesthetics',
      subtitle: 'Facials • Peels',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800'
    },
    {
      id: 'bridal',
      title: 'The Bridal Suite',
      subtitle: 'Makeup • Styling',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800'
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

  // --- NAVIGATION ---
  navigateToCategory(serviceId: string): void {
    this.router.navigate(['/services'], { queryParams: { serviceId: serviceId } });
  }

  navigateTo(category: string): void {
    this.router.navigate(['/services'], { queryParams: { category: category } });
  }

  // --- CAROUSEL LOGIC ---
  updateCarouselMetrics() {
    if (this.carousel && this.carousel.nativeElement.children.length > 0) {
        const firstItem = this.carousel.nativeElement.children[0] as HTMLElement;
        const gap = 32; // Tailwind gap-8
        this.slideWidth = firstItem.offsetWidth + gap;
        this.updateSlidePosition(); 
    }
  }

  get visibleItemsCount(): number {
    if (!this.carousel) return 1;
    const containerWidth = this.carousel.nativeElement.offsetWidth;
    const itemWidth = this.slideWidth || 300; 
    return Math.floor(containerWidth / itemWidth) || 1;
  }

  get maxIndex(): number {
    return Math.max(0, this.totalSlides - this.visibleItemsCount);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex < this.maxIndex) ? this.currentIndex + 1 : 0;
    this.updateSlidePosition();
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.maxIndex;
    this.updateSlidePosition();
  }

  updateSlidePosition() {
    if (this.currentIndex > this.maxIndex) this.currentIndex = this.maxIndex;
    const offset = this.currentIndex * this.slideWidth;
    this.carousel.nativeElement.style.transform = `translateX(-${offset}px)`;
  }

  startAutoSlide() {
    this.stopAutoSlide();
    this.autoSlideInterval = setInterval(() => this.nextSlide(), 3500);
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) clearInterval(this.autoSlideInterval);
  }

  // Drag logic
  startDrag(event: MouseEvent | TouchEvent) {
    this.stopAutoSlide();
    this.isDragging = true;
    this.startX = event instanceof MouseEvent ? event.pageX : event.touches[0].pageX;
    this.carousel.nativeElement.style.transition = 'none';
  }

  onDrag(event: MouseEvent | TouchEvent) {
    if (!this.isDragging) return;
    const x = event instanceof MouseEvent ? event.pageX : event.touches[0].pageX;
    const delta = x - this.startX;
    const currentOffset = -this.currentIndex * this.slideWidth;
    this.carousel.nativeElement.style.transform = `translateX(${currentOffset + delta}px)`;
  }

  endDrag(event: MouseEvent | TouchEvent) {
    if (!this.isDragging) return;
    this.isDragging = false;
    const x = event instanceof MouseEvent ? event.pageX : event.changedTouches[0].pageX;
    const delta = x - this.startX;
    this.carousel.nativeElement.style.transition = 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)';
    
    if (delta > 50) this.prevSlide();
    else if (delta < -50) this.nextSlide();
    else this.updateSlidePosition();
    
    this.startAutoSlide();
  }

  // Animation Observer
  private setupScrollAnimations(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  }
}