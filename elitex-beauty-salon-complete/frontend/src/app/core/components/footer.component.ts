import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="bg-[#2C2B30] text-[#FAF3EE] pt-24 pb-12 border-t border-[#B2BABC]/10 relative overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-[#BDCDE6] rounded-full blur-[150px] opacity-5 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
          
          <div class="space-y-6">
            <a routerLink="/" class="block">
              <img src="assets/images/Logo/Tejas-logo.png" alt="Tejas Logo" class="h-24 w-auto transition-transform duration-500 group-hover:scale-110 gold-pulse">
            </a>
            <p class="text-[11px] text-[#B2BABC] leading-loose uppercase tracking-widest text-justify">
              Where elegance meets excellence. Transform your beauty experience at Chennai's premier luxury salon and makeup studio.
            </p>
            
            <div class="flex gap-4 pt-4">
              <a href="https://instagram.com/ramyarajendran30" target="_blank" class="w-10 h-10 border border-[#B2BABC]/30 rounded-full flex items-center justify-center text-[#B2BABC] hover:bg-[#BDCDE6] hover:text-[#2C2B30] hover:border-[#BDCDE6] transition-all duration-300" aria-label="Instagram">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.163 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="mailto:ramyarajendran30@gmail.com" class="w-10 h-10 border border-[#B2BABC]/30 rounded-full flex items-center justify-center text-[#B2BABC] hover:bg-[#BDCDE6] hover:text-[#2C2B30] hover:border-[#BDCDE6] transition-all duration-300" aria-label="Email">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 class="text-[#BDCDE6] font-playfair text-lg mb-8 relative inline-block">
              Quick Links
              <span class="absolute -bottom-2 left-0 w-12 h-[1px] bg-[#BDCDE6]"></span>
            </h3>
            <ul class="space-y-4 text-[11px] uppercase tracking-[0.2em] text-[#B2BABC]">
              <li><a routerLink="/" class="hover:text-[#FAF3EE] hover:translate-x-2 transition-transform inline-block">Home</a></li>
              <li><a routerLink="/services" class="hover:text-[#FAF3EE] hover:translate-x-2 transition-transform inline-block">Services</a></li>
              <li><a routerLink="/gallery" class="hover:text-[#FAF3EE] hover:translate-x-2 transition-transform inline-block">Gallery</a></li>
              <li><a routerLink="/team" class="hover:text-[#FAF3EE] hover:translate-x-2 transition-transform inline-block">Our Team</a></li>
              <li><a routerLink="/blog" class="hover:text-[#FAF3EE] hover:translate-x-2 transition-transform inline-block">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 class="text-[#BDCDE6] font-playfair text-lg mb-8 relative inline-block">
              Opening Hours
              <span class="absolute -bottom-2 left-0 w-12 h-[1px] bg-[#BDCDE6]"></span>
            </h3>
            <ul class="space-y-4 text-[11px] uppercase tracking-[0.2em] text-[#B2BABC]">
              <li class="flex justify-between border-b border-[#B2BABC]/10 pb-2">
                <span>Mon - Sat</span>
                <span class="text-[#FAF3EE]">9:00 AM - 8:00 PM</span>
              </li>
              <li class="flex justify-between border-b border-[#B2BABC]/10 pb-2">
                <span>Sunday</span>
                <span class="text-[#FAF3EE]">10:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-[#BDCDE6] font-playfair text-lg mb-8 relative inline-block">
              Contact Us
              <span class="absolute -bottom-2 left-0 w-12 h-[1px] bg-[#BDCDE6]"></span>
            </h3>
            <div class="space-y-4 text-[11px] uppercase tracking-[0.15em] text-[#B2BABC]">
              <p class="flex items-start gap-3">
                <span class="text-lg">📍</span> 
                <span>
                  No.33, Sabari Nagar,<br>
                  Second Main Road,<br>
                  Mugalivakkam, Chennai-125
                </span>
              </p>
              
              <p class="flex items-start gap-3">
                <span class="text-lg">📞</span> 
                <span class="flex flex-col gap-1">
                  <a href="tel:+916380682344" class="hover:text-[#FAF3EE] transition">+91 63806 82344</a>
                  <a href="tel:+918056108975" class="hover:text-[#FAF3EE] transition">+91 80561 08975</a>
                </span>
              </p>
              <p class="flex items-start gap-3">
                <span class="text-lg">✉️</span> 
                <a href="mailto:ramyarajendran30@gmail.com" class="hover:text-[#FAF3EE] transition break-all">
                  ramyarajendran30&#64;gmail.com
                </a>
              </p>
            </div>
            
            <a routerLink="/booking" class="mt-8 block text-center py-4 border border-[#BDCDE6] text-[#BDCDE6] uppercase text-[10px] tracking-[0.3em] font-bold hover:bg-[#BDCDE6] hover:text-[#2C2B30] transition-all duration-500">
              Book Appointment
            </a>
          </div>

        </div>

        <div class="mt-20 pt-8 border-t border-[#B2BABC]/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] text-[#B2BABC]">
          <p>© 2025 Tejas Beauty Salon. All Rights Reserved.</p>
          <div class="flex gap-8 mt-4 md:mt-0">
            <a href="#" class="hover:text-[#BDCDE6]">Privacy Policy</a>
            <a href="#" class="hover:text-[#BDCDE6]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}