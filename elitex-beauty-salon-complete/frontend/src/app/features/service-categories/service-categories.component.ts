import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NavigationComponent } from '../../core/components/navigation.component';
import { FooterComponent } from '../../core/components/footer.component';

interface Service {
  name: string;
  price: string | number;
}

interface SubCategory {
  name: string;
  services: Service[];
}

interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
  subCategories: SubCategory[];
}

@Component({
  selector: 'app-service-categories',
  standalone: true,
  imports: [CommonModule, NavigationComponent, FooterComponent],
  templateUrl: './service-categories.component.html',
  styleUrls: ['./service-categories.component.scss']
})
export class ServiceCategoriesComponent implements OnInit {
  isSticky = false;
  activeCategory = 'hair';
  isProgrammaticScroll = false;

  categories: ServiceCategory[] = [
    {
      id: 'hair',
      name: 'Hair Services',
      icon: '✂️',
      subCategories: [
        {
          name: 'Hair Style',
          services: [
            { name: 'Kids Cut (below 10yrs)', price: 250 },
            { name: 'Trendy Kids Cut', price: 300 },
            { name: 'U Hair Cut Basic', price: 350 },
            { name: 'Hair Cut Basic', price: 250 },
            { name: 'Advance Layer Cut (without hairwash)', price: 800 },
            { name: 'Advance Layer Cut (with shampoo, conditioner & blow dry)', price: 1000 }
          ]
        },
        {
          name: 'Hair Treatment',
          services: [
            { name: 'Hair Spa - Small', price: 700 },
            { name: 'Hair Spa - Medium', price: 850 },
            { name: 'Hair Spa - Large', price: 1000 },
            { name: 'Frizz Control - Small', price: 800 },
            { name: 'Frizz Control - Medium', price: 1000 },
            { name: 'Frizz Control - Large', price: 1200 },
            { name: 'Purifying Treatment - Small', price: 1000 },
            { name: 'Purifying Treatment - Medium', price: 1200 },
            { name: 'Purifying Treatment - Large', price: 1800 },
            { name: 'Anti Dandruff Treatment - Small', price: 1000 },
            { name: 'Anti Dandruff Treatment - Medium', price: 1500 },
            { name: 'Anti Dandruff Treatment - Large', price: 2000 }
          ]
        },
        {
          name: 'Hair Coloring',
          services: [
            { name: 'Black Henna - Small', price: 500 },
            { name: 'Black Henna - Medium', price: 600 },
            { name: 'Black Henna - Large', price: 700 },
            { name: 'Brown Henna - Small', price: 500 },
            { name: 'Brown Henna - Medium', price: 600 },
            { name: 'Brown Henna - Large', price: 700 },
            { name: 'Henna Application (with Hair wash) - Small', price: 450 },
            { name: 'Henna Application (with Hair wash) - Medium', price: 500 },
            { name: 'Henna Application (with Hair wash) - Large', price: 550 }
          ]
        },
        {
          name: 'Root Touch Up',
          services: [
            { name: 'Ammonia Colour', price: 800 },
            { name: 'Ammonia Free', price: 900 },
            { name: 'Global - Small', price: 1200 },
            { name: 'Global - Medium', price: 1500 },
            { name: 'Global - Large', price: 1800 },
            { name: 'Colour Application', price: 500 }
          ]
        },
        {
          name: 'Fashion Streaks',
          services: [
            { name: 'Streaks (Per Streak)', price: 250 },
            { name: 'Advance Streaks (with pre lightening)', price: 350 },
            { name: 'Global Streaks', price: 400 },
            { name: 'Fashion Colour (Global)', price: 1800 }
          ]
        },
        {
          name: 'Hair Texture',
          services: [
            { name: 'Ironing', price: 800 },
            { name: 'Hair Tonges', price: 1500 },
            { name: 'Advance Blow Dry', price: 500 },
            { name: 'Straightening', price: 3999 },
            { name: 'Smoothening', price: 3499 },
            { name: 'Keratin Treatment', price: 4500 },
            { name: 'Protein Botox', price: 6000 }
          ]
        },
        {
          name: 'Hair Care Services',
          services: [
            { name: 'Shampoo', price: '250-400' },
            { name: 'Conditioner', price: 150 },
            { name: 'Premium Shampoo', price: '300-550' },
            { name: 'Premium Conditioner', price: 250 }
          ]
        },
        {
          name: 'Head Massage',
          services: [
            { name: 'Pure Coconut Nourisher', price: 500 },
            { name: 'Almond Indulgence', price: 500 },
            { name: 'Olive Bliss', price: 600 },
            { name: 'Gingelly Oil', price: 500 },
            { name: 'Aroma Oil', price: 600 }
          ]
        }
      ]
    },
    {
      id: 'facial',
      name: 'Facial & Skin Care',
      icon: '✨',
      subCategories: [
        {
          name: 'Skin Care',
          services: [
            { name: 'Cleanup Basic', price: 400 },
            { name: 'Skin Lightening Cleanup', price: 650 },
            { name: 'Mini Facial', price: 550 }
          ]
        },
        {
          name: 'Facial for Lightening',
          services: [
            { name: 'Fruit Facial', price: 600 },
            { name: 'Herbal Facial', price: 650 },
            { name: 'Wine Facial', price: 999 },
            { name: 'Skin Lightening Facial', price: 1800 },
            { name: 'Gold Facial', price: 1299 },
            { name: 'Instant Glow Facial', price: 1499 }
          ]
        },
        {
          name: 'Bridal Advanced Facial',
          services: [
            { name: 'O+3 Facial Advance', price: 2499 },
            { name: 'Hydra Facial', price: 2999 },
            { name: 'Hydra Facial with Advance Kit', price: 3999 }
          ]
        },
        {
          name: 'Facial Add-ons',
          services: [
            { name: 'Under Eye Treatment - Normal', price: 400 },
            { name: 'Under Eye Treatment - Advance', price: 500 },
            { name: 'Skin Lightening Peel of Mask', price: 400 },
            { name: 'Skin Tightening Mask', price: 500 }
          ]
        }
      ]
    },
    {
      id: 'nails',
      name: 'Nail Services',
      icon: '💅',
      subCategories: [
        {
          name: 'Manicure',
          services: [
            { name: 'Regular Manicure', price: 500 },
            { name: 'Spa Manicure', price: 800 },
            { name: 'Cut n File', price: 150 },
            { name: 'Nail Polish', price: 100 }
          ]
        },
        {
          name: 'Pedicure',
          services: [
            { name: 'Regular Pedicure', price: 700 },
            { name: 'Spa Pedicure', price: 999 },
            { name: 'Heel Peel Treatment', price: 2000 }
          ]
        },
        {
          name: 'Nail Extensions & Art',
          services: [
            { name: 'Gum Gel Extension', price: 2000 },
            { name: 'Nail Extension Refill (Gum Gel)', price: 1800 },
            { name: 'French Nail Polish', price: 1500 },
            { name: 'Gel Nail Polish Application', price: 1200 }
          ]
        },
        {
          name: 'Nail Art & Finishing',
          services: [
            { name: 'Premium Nail Art', price: 700 },
            { name: 'Cat Eye Nail Art', price: 800 },
            { name: 'Blossom Nail Art', price: 800 }
          ]
        },
        {
          name: 'Nail Removal',
          services: [
            { name: 'Nail Extension Removal', price: 700 },
            { name: 'Gel Polish Removal', price: 700 }
          ]
        },
        {
          name: 'Combo Offers',
          services: [
            { name: 'Gel Extension + Gel Polish + Nail Art', price: 2999 }
          ]
        }
      ]
    },
    {
      id: 'beauty',
      name: 'Beauty & Hair Removal',
      icon: '🌹',
      subCategories: [
        {
          name: 'Premium Waxing - Face',
          services: [
            { name: 'Upper Lip', price: 50 },
            { name: 'Chin / Forehead', price: 100 },
            { name: 'Face Sides', price: 200 },
            { name: 'Full Face', price: 400 },
            { name: 'Neck', price: 50 },
            { name: 'Jawline', price: 50 }
          ]
        },
        {
          name: 'Premium Waxing - Body',
          services: [
            { name: 'Under Arms', price: 200 },
            { name: 'Half Arms', price: 350 },
            { name: 'Full Arms', price: 450 },
            { name: 'Half Leg', price: 550 },
            { name: 'Full Leg', price: 650 },
            { name: 'Full Body', price: 2500 },
            { name: 'Abdomen', price: 1200 },
            { name: 'Lower Back/Upper Back', price: 1800 }
          ]
        },
        {
          name: 'Threading',
          services: [
            { name: 'Eyebrow', price: 50 },
            { name: 'Upper Lip', price: 20 },
            { name: 'Chin', price: 30 },
            { name: 'Forehead', price: 20 },
            { name: 'Side', price: 60 },
            { name: 'Full Face', price: 120 }
          ]
        },
        {
          name: 'Detan Treatments',
          services: [
            { name: 'Under Arms', price: 250 },
            { name: 'Lower Back/Upper Back', price: 350 },
            { name: 'Face', price: 400 },
            { name: 'Neck', price: 350 },
            { name: 'Feet', price: 200 },
            { name: 'Full Back', price: 450 },
            { name: 'Half Arms', price: 300 },
            { name: 'Half Leg', price: 450 },
            { name: 'Full Arms', price: 350 },
            { name: 'Full Body', price: 2500 }
          ]
        },
        {
          name: 'Cream Bleach',
          services: [
            { name: 'Upper Lip', price: 50 },
            { name: 'Under Arms', price: 150 },
            { name: 'Lower Back/Upper Back', price: 200 },
            { name: 'Face', price: 350 },
            { name: 'Neck', price: 300 },
            { name: 'Half Arms', price: 250 },
            { name: 'Feet', price: 150 },
            { name: 'Full Back', price: 400 },
            { name: 'Half Leg', price: 400 },
            { name: 'Full Arms', price: 300 },
            { name: 'Full Legs', price: 600 },
            { name: 'Full Body', price: 2000 }
          ]
        }
      ]
    },
    {
      id: 'bridal',
      name: 'Bridal Services',
      icon: '💎',
      subCategories: [
        {
          name: 'Bridal Makeup & Styling',
          services: [
            { name: 'Bridal Saree Drapping', price: 550 },
            { name: 'Hair Do - Regular', price: 1000 },
            { name: 'Party Makeup', price: 3500 },
            { name: 'Bridal Makeover (Starting)', price: 15000 }
          ]
        },
        {
          name: 'Bridal Package',
          services: [
            { name: 'Bridal Package - Includes: Hydra Facial, Hair Spa, Eyebrow Threading, Waxing (Full Arm, Full Leg, Underarm, Blouse Line), Spa Pedicure, Spa Manicure', price: 9999 }
          ]
        }
      ]
    },
    {
      id: 'mehandi',
      name: 'Mehandi & Henna Art',
      icon: '🎨',
      subCategories: [
        {
          name: 'Mehandi Designs',
          services: [
            { name: 'Front Mehandi', price: '500-1500' },
            { name: 'Arabic Mehandi', price: '600-1200' },
            { name: 'Bridal Mehandi', price: 2500 }
          ]
        }
      ]
    },
    {
      id: 'packages',
      name: 'Premium Packages',
      icon: '👑',
      subCategories: [
        {
          name: 'Special Packages',
          services: [
            { name: 'Transformation Package (3 Months, 3 Sessions, 100% Results Guaranteed)', price: 25000 }
          ]
        }
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const category = params['category'];
      if (category) {
        this.activeCategory = category;
        setTimeout(() => this.scrollToCategory(category), 300);
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || 0;
    this.isSticky = offset > 300;
    if (!this.isProgrammaticScroll) {
      this.updateActiveCategory();
    }
  }

  scrollToCategory(categoryId: string) {
    this.isProgrammaticScroll = true;
    const element = document.getElementById(categoryId);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      this.activeCategory = categoryId;
      setTimeout(() => {
        this.isProgrammaticScroll = false;
      }, 800);
    }
  }

  updateActiveCategory() {
    const sections = this.categories.map(cat => ({
      id: cat.id,
      element: document.getElementById(cat.id)
    }));

    for (const section of sections) {
      if (section.element) {
        const rect = section.element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 300) {
          this.activeCategory = section.id;
          break;
        }
      }
    }
  }
}
