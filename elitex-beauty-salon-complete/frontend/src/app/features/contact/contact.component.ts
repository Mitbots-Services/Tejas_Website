import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from '../../core/components/navigation.component';
import { FooterComponent } from '../../core/components/footer.component';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, FormsModule, NavigationComponent, FooterComponent],
    template: `
        <app-navigation></app-navigation>
        <main class="pt-20 pb-10">
            <div class="max-w-4xl mx-auto px-6">
                <h1 class="text-4xl font-bold text-charcoal mb-8">Contact Us</h1>
                <div class="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 class="text-xl font-bold mb-4">Get in Touch</h3>
                        <p class="mb-2"><strong>Phone:</strong> +91 98765 43210</p>
                        <p class="mb-2"><strong>Email:</strong> info&#64;elitex.com</p>

                        <p class="mb-2"><strong>Address:</strong> Chennai, India</p>
                    </div>
                    <div>
                        <form>
                            <input type="text" placeholder="Your Name" class="w-full px-4 py-2 border rounded mb-4">
                            <input type="email" placeholder="Your Email" class="w-full px-4 py-2 border rounded mb-4">
                            <textarea placeholder="Your Message" rows="4" class="w-full px-4 py-2 border rounded mb-4"></textarea>
                            <button type="submit" class="px-6 py-2 bg-soft-gold text-charcoal font-bold rounded">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
        <app-footer></app-footer>
    `
})
export class ContactComponent {}
