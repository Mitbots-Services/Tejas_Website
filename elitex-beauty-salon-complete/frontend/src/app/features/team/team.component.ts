import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../core/components/navigation.component';
import { FooterComponent } from '../../core/components/footer.component';

@Component({
    selector: 'app-team',
    standalone: true,
    imports: [CommonModule, NavigationComponent, FooterComponent],
    template: `
        <app-navigation></app-navigation>
        <main class="pt-20 pb-10">
            <div class="max-w-7xl mx-auto px-6">
                <h1 class="text-4xl font-bold text-charcoal mb-8">Our Team</h1>
                <div class="grid md:grid-cols-3 gap-8">
                    <div *ngFor="let i of [1,2,3,4,5]" class="text-center">
                        <div class="bg-gray-300 h-64 rounded-lg mb-4"></div>
                        <h3 class="text-xl font-bold">Stylist {{ i }}</h3>
                        <p class="text-gray-600">Specialist</p>
                    </div>
                </div>
            </div>
        </main>
        <app-footer></app-footer>
    `
})
export class TeamComponent {}
