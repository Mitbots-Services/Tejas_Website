import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../core/components/navigation.component';
import { FooterComponent } from '../../core/components/footer.component';

@Component({
    selector: 'app-blog',
    standalone: true,
    imports: [CommonModule, NavigationComponent, FooterComponent],
    template: `
        <app-navigation></app-navigation>
        <main class="pt-20 pb-10">
            <div class="max-w-7xl mx-auto px-6">
                <h1 class="text-4xl font-bold text-charcoal mb-8">Blog</h1>
                <div class="grid md:grid-cols-2 gap-8">
                    <div *ngFor="let i of [1,2,3,4]" class="bg-white rounded-lg shadow-lg p-6">
                        <h3 class="text-xl font-bold mb-2">Blog Post {{ i }}</h3>
                        <p class="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="#" class="text-soft-gold font-semibold">Read More →</a>
                    </div>
                </div>
            </div>
        </main>
        <app-footer></app-footer>
    `
})
export class BlogComponent {}
