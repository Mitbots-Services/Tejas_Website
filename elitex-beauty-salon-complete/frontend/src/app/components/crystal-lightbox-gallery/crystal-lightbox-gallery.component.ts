import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crystal-lightbox-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div *ngFor="let image of images" class="relative group overflow-hidden rounded-lg cursor-pointer" (click)="openLightbox(image)">
        <img [src]="image.url" [alt]="image.caption" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
        <div class="absolute inset-0 bg-dark opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        <p class="absolute bottom-2 left-2 text-white text-sm font-bold z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{{ image.caption }}</p>
      </div>
    </div>

    <div *ngIf="selectedImage" class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center" (click)="closeLightbox()">
      <div class="relative max-w-4xl max-h-4xl bg-dark p-4 rounded-lg shadow-2xl shadow-primary/20" style="backdrop-filter: blur(10px); background-color: rgba(26, 26, 26, 0.8);">
        <img [src]="selectedImage.url" [alt]="selectedImage.caption" class="max-w-full max-h-full object-contain">
        <p class="text-center text-accent mt-4">{{ selectedImage.caption }}</p>
        <button class="absolute top-4 right-4 text-white text-2xl">&times;</button>
      </div>
    </div>
  `
})
export class CrystalLightboxGalleryComponent {
  @Input() images: { url: string, caption: string }[] = [];

  selectedImage: { url: string, caption: string } | null = null;

  openLightbox(image: { url: string, caption: string }) {
    this.selectedImage = image;
  }

  closeLightbox() {
    this.selectedImage = null;
  }
}
