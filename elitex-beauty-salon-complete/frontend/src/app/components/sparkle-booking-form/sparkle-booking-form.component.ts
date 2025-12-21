import { Component } from '@angular/core';

@Component({
  selector: 'app-sparkle-booking-form',
  standalone: true,
  template: `
    <form class="space-y-6">
      <div>
        <label for="service" class="block text-sm font-medium text-primary">Service</label>
        <select id="service" name="service" class="shimmer-input mt-1 block w-full">
          <option>Gold Facial</option>
          <option>Diamond Hair Spa</option>
          <option>Crystal Manicure</option>
        </select>
      </div>
      <div>
        <label for="stylist" class="block text-sm font-medium text-primary">Stylist</label>
        <select id="stylist" name="stylist" class="shimmer-input mt-1 block w-full">
          <option>Priya</option>
          <option>Rahul</option>
        </select>
      </div>
      <div>
        <label for="date" class="block text-sm font-medium text-primary">Date</label>
        <input type="date" id="date" name="date" class="shimmer-input mt-1 block w-full">
      </div>
      <div>
        <label for="time" class="block text-sm font-medium text-primary">Time</label>
        <input type="time" id="time" name="time" class="shimmer-input mt-1 block w-full">
      </div>
      <button type="submit" class="w-full px-8 py-3 bg-primary text-dark font-bold rounded-full hover:bg-opacity-80 transition duration-300 sparkle-button">
        Book Appointment
      </button>
    </form>
  `,
  styles: [`
    .shimmer-input {
      background: #2A2A2A;
      border: 1px solid #D4AF37;
      border-radius: 8px;
      padding: 10px;
      color: #F5F5F0;
      position: relative;
      overflow: hidden;
    }
    .shimmer-input:focus {
      outline: none;
      box-shadow: 0 0 10px 2px rgba(212,175,55,0.4);
    }
    .sparkle-button:hover {
      box-shadow: 0 0 15px 5px rgba(212,175,55,0.4);
    }
  `]
})
export class SparkleBookingFormComponent { }
