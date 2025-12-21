import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="luxury-footer">
      <div class="footer-content">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="brand-logo">Tejas Beauty Salon</div>
            <div class="brand-subtitle">&amp; Makeup Studio</div>
            <p class="brand-tagline">
              Where elegance meets excellence. Transform your beauty experience at
              Chennai's premier luxury salon and makeup studio.
            </p>

            <div class="social-icons">
              <a href="https://facebook.com" target="_blank" class="social-icon" aria-label="Facebook">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a href="https://instagram.com/ramyarajendran30" target="_blank" class="social-icon" aria-label="Instagram">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 110 2.88 1.44 1.44 0 010-2.88z"/>
                </svg>
              </a>
            </div>
          </div>

          <div class="footer-nav">
            <h3 class="footer-heading">Quick Links</h3>
            <ul class="footer-links">
              <li><a routerLink="/">Home</a></li>
              <li><a routerLink="/service-categories">Services</a></li>
              <li><a routerLink="/gallery">Gallery</a></li>
              <li><a routerLink="/team">Our Team</a></li>
              <li><a routerLink="/blog">Blog</a></li>
              <li><a routerLink="/contact">Contact Us</a></li>
            </ul>
          </div>

          <div class="footer-contact">
            <h3 class="footer-heading">Get In Touch</h3>
            <ul class="contact-list">
              <li class="contact-item">
                <span class="contact-icon">📍</span>
                <span>No.33, Sabari Nagar,<br />Mugalivakkam, Chennai - 125</span>
              </li>

              <li class="contact-item">
                <span class="contact-icon">📞</span>
                <div>
                  <a href="tel:6380682344">6380682344</a><br />
                  <a href="tel:8056108975">8056108975</a>
                </div>
              </li>

              <li class="contact-item">
                <span class="contact-icon">✉️</span>
                <a href="mailto:ramyarajendran30&#64;gmail.com">ramyarajendran30&#64;gmail.com</a>
              </li>
            </ul>
          </div>

          <div class="footer-hours">
            <h3 class="footer-heading">Opening Hours</h3>
            <ul class="hours-list">
              <li class="hours-item">
                <span class="day">Mon - Sat</span>
                <span class="time">9AM - 8PM</span>
              </li>
              <li class="hours-item">
                <span class="day">Sunday</span>
                <span class="time">10AM - 6PM</span>
              </li>
            </ul>
            <button routerLink="/booking" class="book-btn-footer">Book Appointment</button>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© {{ currentYear }} Tejas Beauty Salon &amp; Makeup Studio. All Rights Reserved.</p>
      </div>
    </footer>
  `,
  styles: [`
    .luxury-footer {
      background: linear-gradient(135deg, #2C2B30 0%, #1a1918 100%);
      color: rgba(255, 255, 255, 0.9);
      position: relative;
      overflow: hidden;
    }

    .footer-content {
      max-width: 1400px;
      margin: 0 auto;
      padding: 60px 40px 30px;
      position: relative;
      z-index: 1;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1.5fr 1.5fr;
      gap: 50px;
    }

    @media (max-width: 1024px) {
      .footer-grid { grid-template-columns: repeat(2, 1fr); gap: 40px; }
    }

    @media (max-width: 640px) {
      .footer-grid { grid-template-columns: 1fr; gap: 35px; }
      .footer-content { padding: 50px 20px 25px; }
    }

    .brand-logo {
      font-size: 32px;
      font-weight: 700;
      background: linear-gradient(135deg, #BDCDE6, #FAF3EE);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 8px;
      font-family: 'Georgia', serif;
    }

    .brand-subtitle {
      font-size: 16px;
      font-style: italic;
      color: rgba(255, 255, 255, 0.85);
      margin-bottom: 16px;
      font-weight: 300;
    }

    .brand-tagline {
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.7;
      margin-bottom: 25px;
      font-size: 14px;
    }

    /* Social Icons */
    .social-icons {
      display: flex;
      gap: 12px;
      margin-top: 15px;
    }

    .social-icon {
      width: 28px;
      height: 28px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      color: rgba(255, 255, 255, 0.8);
      transition: transform 0.3s, color 0.3s;
    }

    .social-icon svg {
      width: 100%;
      height: 100%;
    }

    .social-icon:hover {
      transform: scale(1.2);
      color: #BDCDE6;
    }

    .footer-heading {
      font-size: 15px;
      font-weight: 600;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      margin-bottom: 20px;
      color: #BDCDE6;
    }

    .footer-links, .contact-list, .hours-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-links li { margin-bottom: 10px; }

    .footer-links a {
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      font-size: 14px;
      transition: all 0.3s ease;
      display: inline-block;
    }

    .footer-links a:hover { color: #BDCDE6; transform: translateX(5px); }

    .contact-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      margin-bottom: 18px;
      font-size: 14px;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.7);
    }

    .hours-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      font-size: 14px;
      padding-bottom: 12px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .hours-item:last-child { border-bottom: none; }
    .time { color: #BDCDE6; font-weight: 600; }

    .book-btn-footer {
      width: 100%;
      padding: 12px 24px;
      background: linear-gradient(135deg, #BDCDE6, #B2BABC);
      color: #2C2B30;
      border: none;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .book-btn-footer:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(189, 205, 230, 0.4);
    }

    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding: 20px 40px;
      text-align: center;
    }

    .footer-bottom p {
      margin: 0;
      font-size: 13px;
      letter-spacing: 0.5px;
      color: rgba(255, 255, 255, 0.5);
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
