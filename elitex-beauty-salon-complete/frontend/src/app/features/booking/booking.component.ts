import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavigationComponent } from '../../core/components/navigation.component';
import { FooterComponent } from '../../core/components/footer.component';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule, NavigationComponent, FooterComponent],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  
  bookingData = {
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  };

  // Simplified list for dropdown (you can expand this based on your full service list)
  servicesList = [
    'Bridal Makeover', 'Hair Spa', 'Keratin Treatment', 'Creative Hair Cut', 
    'Global Hair Color', 'Hydra Facial', 'Pedicure & Manicure', 
    'Botox Treatment', 'Party Makeup', 'Waxing Package', 'Other'
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Auto-fill service from URL if clicked from Services page
    this.route.queryParams.subscribe(params => {
      if (params['service']) {
        this.bookingData.service = params['service'];
      }
    });
  }

  getFormattedMessage(): string {
    return `Hello Tejas Salon,%0a%0aI would like to request an appointment.%0a%0aName: ${this.bookingData.name}%0aPhone: ${this.bookingData.phone}%0aService: ${this.bookingData.service}%0aPreferred Date: ${this.bookingData.date}%0aPreferred Time: ${this.bookingData.time}%0aNotes: ${this.bookingData.notes}`;
  }

  sendViaWhatsApp() {
    if (!this.validateForm()) return;
    
    const phoneNumber = '916380682344'; // Salon WhatsApp Number
    const message = this.getFormattedMessage();
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(url, '_blank');
  }

  sendViaEmail() {
    if (!this.validateForm()) return;

    const email = 'ramyarajendran30@gmail.com';
    const subject = `Appointment Request - ${this.bookingData.name}`;
    const body = this.getFormattedMessage(); // Note: mailto body encoding is slightly different but %0a usually works
    
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  validateForm(): boolean {
    if (!this.bookingData.name || !this.bookingData.phone || !this.bookingData.service) {
      alert('Please fill in your Name, Phone, and Service to proceed.');
      return false;
    }
    return true;
  }
}