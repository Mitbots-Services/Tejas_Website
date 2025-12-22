import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../core/components/navigation.component';
import { FooterComponent } from '../../core/components/footer.component';

interface GalleryItem {
  url: string;
  category: string;
  title: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, NavigationComponent, FooterComponent],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  
  categories = ['All', 'Hair', 'Bridal', 'Ambiance', 'Nails'];
  activeFilter = 'All';

  // Curated High-Quality Images from Unsplash
  allImages: GalleryItem[] = [
    // Hair
    { 
      category: 'Hair', 
      title: 'Precision Balayage', 
      url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      category: 'Hair', 
      title: 'Silk Press & Cut', 
      url: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      category: 'Hair', 
      title: 'Avant-Garde Styling', 
      url: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80' 
    },

    // Bridal
    { 
      category: 'Bridal', 
      title: 'Royal Indian Bride', 
      url: 'https://images.unsplash.com/photo-1583949392237-77292215443e?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      category: 'Bridal', 
      title: 'Modern Elegance', 
      url: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      category: 'Bridal', 
      title: 'Traditional Henna', 
      url: 'https://images.unsplash.com/photo-1610173824032-47e06a382c28?auto=format&fit=crop&w=800&q=80' 
    },

    // Ambiance (Interior)
    { 
      category: 'Ambiance', 
      title: 'The Lounge', 
      url: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      category: 'Ambiance', 
      title: 'Treatment Suite', 
      url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80' 
    },

    // Nails
    { 
      category: 'Nails', 
      title: 'Gel Artistry', 
      url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      category: 'Nails', 
      title: 'Luxury Pedicure', 
      url: 'https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&w=800&q=80' 
    }
  ];

  get filteredImages() {
    if (this.activeFilter === 'All') {
      return this.allImages;
    }
    return this.allImages.filter(img => img.category === this.activeFilter);
  }

  setFilter(category: string) {
    this.activeFilter = category;
  }
}