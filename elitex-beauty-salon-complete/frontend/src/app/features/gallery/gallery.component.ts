import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../core/components/navigation.component';
import { FooterComponent } from '../../core/components/footer.component';

@Component({
    selector: 'app-gallery',
    standalone: true,
    imports: [CommonModule, NavigationComponent, FooterComponent],
    template: `
        <app-navigation></app-navigation>
        <main class="pt-20 pb-10">
            <div class="max-w-7xl mx-auto px-6">
                <h1 class="text-4xl font-bold text-charcoal mb-8">Gallery</h1>
                <div class="grid md:grid-cols-3 gap-6">
                    <div *ngFor="let i of [1,2,3,4,5,6]" class="bg-gray-300 h-64 rounded-lg"></div>
                </div>
            </div>
        </main>
        <app-footer></app-footer>
    `
})
export class GalleryComponent {}
