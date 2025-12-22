import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../core/components/navigation.component';
import { FooterComponent } from '../../core/components/footer.component';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  specialties: string[];
  bio: string;
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, NavigationComponent, FooterComponent],
  templateUrl: './team.component.html', // This looks for the file below
  styleUrls: ['./team.component.scss']    // This looks for the file below
})
export class TeamComponent {
  
  team: TeamMember[] = [
    {
      name: 'Aarushi Mehta',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&h=750&fit=crop',
      specialties: ['Bridal Styling', 'Celebrity Cuts', 'Consultation'],
      bio: 'With over 15 years in the industry, Aarushi brings a visionary approach to bridal elegance and avant-garde styling.'
    },
    {
      name: 'Rohan Kapoor',
      role: 'Master Colorist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop',
      specialties: ['Balayage', 'Color Correction', 'Blondes'],
      bio: 'Rohan is renowned for his mastery of light and shadow, creating color transformations that look effortlessly natural.'
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Head Aesthetician',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=750&fit=crop',
      specialties: ['Clinical Facials', 'Anti-Aging', 'Skin Therapy'],
      bio: 'Merging medical precision with luxury care, Dr. Priya curates skincare journeys that restore profound radiance.'
    },
    {
      name: 'Vikram Singh',
      role: 'Senior Stylist',
      image: 'https://images.unsplash.com/photo-1566492031773-4fbc7dddf5af?w=600&h=750&fit=crop',
      specialties: ['Men’s Grooming', 'Precision Fades', 'Beard Sculpting'],
      bio: 'Vikram elevates men’s grooming to an art form, focusing on sharp lines and classic, gentlemanly aesthetics.'
    },
    {
      name: 'Ananya Roy',
      role: 'Makeup Artist',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&h=750&fit=crop',
      specialties: ['Editorial Makeup', 'Bridal Glam', 'Airbrush'],
      bio: 'From runway to aisle, Ananya’s brushstrokes highlight natural beauty with a touch of modern glamour.'
    },
    {
      name: 'Sneha Patel',
      role: 'Nail Technician',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=750&fit=crop',
      specialties: ['Gel Extensions', 'Nail Art', 'Spa Care'],
      bio: 'Sneha transforms fingertips into miniature canvases, specializing in intricate art and durable, elegant extensions.'
    }
  ];

}