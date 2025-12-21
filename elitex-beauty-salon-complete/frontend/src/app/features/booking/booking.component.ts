import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentService } from '../../core/services/appointment.service';
import { NavigationComponent } from '../../core/components/navigation.component';
import { FooterComponent } from '../../core/components/footer.component';
import { BookingRequest } from '../../core/models/models';


@Component({
    selector: 'app-booking',
    standalone: true,
    imports: [CommonModule, FormsModule, NavigationComponent, FooterComponent],
    template: `
        <app-navigation></app-navigation>
        <main class="pt-20 pb-10 max-w-4xl mx-auto px-6">
            <div *ngIf="!bookingSuccess" class="bg-white rounded-lg shadow-lg p-8">
                <h1 class="text-4xl font-bold text-charcoal mb-8">Book Your Appointment</h1>


                <form (ngSubmit)="submitBooking()">
                    <div class="grid md:grid-cols-2 gap-6">
                        <!-- Service Name -->
                        <div class="md:col-span-2">
                            <label class="block text-charcoal font-semibold mb-2">Service Name</label>
                            <input [(ngModel)]="bookingData.serviceName" name="serviceName" type="text"
                                   class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-soft-gold"
                                   placeholder="e.g., Bridal Makeup, Hair Coloring" required>
                        </div>


                        <!-- Date -->
                        <div>
                            <label class="block text-charcoal font-semibold mb-2">Appointment Date</label>
                            <input [(ngModel)]="bookingData.appointmentDate" name="appointmentDate" type="date"
                                   class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-soft-gold"
                                   required>
                        </div>


                        <!-- Appointment Time -->
                        <div>
                            <label class="block text-charcoal font-semibold mb-2">Appointment Time</label>
                            <input [(ngModel)]="bookingData.appointmentTime" name="appointmentTime" type="text"
                                   class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-soft-gold"
                                   placeholder="e.g., 10:30 AM" required>
                        </div>


                        <!-- Customer Name -->
                        <div>
                            <label class="block text-charcoal font-semibold mb-2">Your Name</label>
                            <input [(ngModel)]="bookingData.customerName" name="customerName" type="text"
                                   class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-soft-gold"
                                   required>
                        </div>


                        <!-- Customer Email -->
                        <div>
                            <label class="block text-charcoal font-semibold mb-2">Email</label>
                            <input [(ngModel)]="bookingData.customerEmail" name="customerEmail" type="email"
                                   class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-soft-gold"
                                   required>
                        </div>


                        <!-- Customer Phone -->
                        <div>
                            <label class="block text-charcoal font-semibold mb-2">Phone Number</label>
                            <input [(ngModel)]="bookingData.customerPhone" name="customerPhone" type="tel"
                                   class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-soft-gold"
                                   required>
                        </div>


                        <!-- Notes -->
                        <div class="md:col-span-2">
                            <label class="block text-charcoal font-semibold mb-2">Additional Notes</label>
                            <textarea [(ngModel)]="bookingData.notes" name="notes"
                                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-soft-gold"
                                      rows="4" placeholder="Any special requests?"></textarea>
                        </div>
                    </div>


                    <!-- Error Message -->
                    <div *ngIf="bookingError" class="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
                        {{ bookingError }}
                    </div>


                    <!-- Submit Button -->
                    <div class="mt-8 flex gap-4">
                        <button type="submit" [disabled]="isSubmitting"
                                class="flex-1 px-6 py-3 bg-soft-gold text-charcoal font-bold rounded-lg hover:shadow-lg disabled:opacity-50">
                            {{ isSubmitting ? 'Processing...' : 'Confirm Booking' }}
                        </button>
                    </div>
                </form>
            </div>


            <!-- Success Message -->
            <div *ngIf="bookingSuccess" class="bg-green-100 text-green-700 p-8 rounded-lg text-center">
                <h2 class="text-3xl font-bold mb-4">Booking Confirmed!</h2>
                <p class="mb-4">Your appointment has been successfully booked.</p>
                <button (click)="goHome()" class="px-6 py-2 bg-charcoal text-white rounded-lg">
                    Return to Home
                </button>
            </div>
        </main>
        <app-footer></app-footer>
    `
})
export class BookingComponent implements OnInit {
    bookingData: BookingRequest = {
        serviceName: '',
        appointmentDate: '',
        appointmentTime: '',
        notes: '',
        customerName: '',
        customerEmail: '',
        customerPhone: '',
    };


    isSubmitting = false;
    bookingSuccess = false;
    bookingError = '';


    constructor(
        private appointmentService: AppointmentService,
        private router: Router
    ) {}


    ngOnInit(): void {}


    submitBooking() {
        if (!this.validateForm()) {
            this.bookingError = 'Please fill all required fields';
            return;
        }


        this.isSubmitting = true;
        this.bookingError = '';


        this.appointmentService.bookAppointment(this.bookingData).subscribe({
            next: () => {
                this.bookingSuccess = true;
                this.isSubmitting = false;
            },
            error: (error) => {
                this.bookingError = error.error?.message || 'Booking failed. Please try again.';
                this.isSubmitting = false;
            }
        });
    }


    validateForm(): boolean {
        return !!(
            this.bookingData.serviceName &&
            this.bookingData.appointmentDate &&
            this.bookingData.appointmentTime &&
            this.bookingData.customerName &&
            this.bookingData.customerEmail &&
            this.bookingData.customerPhone
        );
    }


    goHome(): void {
        this.router.navigate(['/']);
    }
}