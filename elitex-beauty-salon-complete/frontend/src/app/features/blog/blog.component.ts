import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../core/components/navigation.component';
import { FooterComponent } from '../../core/components/footer.component';

interface BlogPost {
  title: string;
  summary: string;
  image: string;
  link: string;
  category: string;
  date: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, NavigationComponent, FooterComponent],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  
  categories = ['All', 'Hair', 'Skin', 'Trends', 'Wellness'];
  activeFilter = 'All';

  allBlogs: BlogPost[] = [
    {
      title: 'Top 5 Bridal Hair Trends in 2025',
      summary: 'Discover the latest bridal hairstyles making waves this year, from intricate braids to sleek, modern updos.',
      image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800',
      link: 'https://www.brides.com/story/bridal-hair-trends',
      category: 'Hair',
      date: 'Oct 12, 2024'
    },
    {
      title: 'Keratin Treatments: The Complete Guide',
      summary: 'Everything you need to know about keratin: benefits, aftercare, and maintaining that glass-hair look.',
      image: 'https://images.unsplash.com/photo-1610735683869-2e6c582d6640?w=800',
      link: 'https://www.harpersbazaar.com/beauty/hair/advice/a30276/keratin-hair-treatment/',
      category: 'Hair',
      date: 'Nov 05, 2024'
    },
    {
      title: 'Skincare Secrets for Glowing Indian Skin',
      summary: 'Daily routines and specialized treatments tailored specifically for Indian skin tones to achieve radiance.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
      link: 'https://www.vogue.in/beauty/content/skincare-routine-indian-skin-types',
      category: 'Skin',
      date: 'Sep 28, 2024'
    },
    {
      title: 'Balayage vs Ombre: Which is Right for You?',
      summary: 'Understand the nuanced differences between these coloring techniques to find the perfect match for your style.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
      link: 'https://www.allure.com/story/balayage-vs-ombre',
      category: 'Trends',
      date: 'Dec 01, 2024'
    },
    {
      title: 'Luxury Spa Treatments You Must Try',
      summary: 'Explore luxurious spa experiences that rejuvenate both body and mind—true investments in yourself.',
      image: 'https://images.unsplash.com/photo-1610651013842-11d0b7c1e57b?w=800',
      link: 'https://www.forbes.com/sites/forbes-personal-shopper/2023/03/23/best-luxury-spa-treatments/',
      category: 'Wellness',
      date: 'Aug 15, 2024'
    },
    {
      title: 'Monsoon Hair Care Essentials',
      summary: 'Protect your locks during the humid season with these professional tips from our top stylists.',
      image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800',
      link: 'https://www.beautyheaven.com.au/hair/hair-care-tips-for-monsoon',
      category: 'Hair',
      date: 'Jul 20, 2024'
    }
  ];

  get filteredBlogs() {
    if (this.activeFilter === 'All') return this.allBlogs;
    return this.allBlogs.filter(blog => blog.category === this.activeFilter);
  }

  setFilter(cat: string) {
    this.activeFilter = cat;
  }
}