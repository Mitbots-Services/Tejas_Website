import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from '../../core/components/navigation.component';
import { FooterComponent } from '../../core/components/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, NavigationComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  
  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  onSubmit() {
    console.log('Form Submitted', this.formData);
    // Here you would typically connect to a backend service
    alert('Thank you for contacting Tejas! We have received your message and will respond shortly.');
    
    // Optional: Reset form
    this.formData = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  }

}