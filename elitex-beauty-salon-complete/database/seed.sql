-- Seed data for EliteX Beauty Saloon

-- Users (Stylists and a customer)
-- Passwords are encrypted with BCrypt ("password")
INSERT INTO users (name, email, phone, role, password) VALUES
('Priya', 'priya.stylist@elitex.com', '9876543210', 'STYLIST', '$2a$10$e.4SLnC5T7YQKO9jJ6pA6.0G/lR4P9M.j8p1D1x3d.WkI/5uC2nVC'),
('Rahul', 'rahul.stylist@elitex.com', '9876543211', 'STYLIST', '$2a$10$e.4SLnC5T7YQKO9jJ6pA6.0G/lR4P9M.j8p1D1x3d.WkI/5uC2nVC'),
('Admin User', 'admin@elitex.com', '9876543212', 'ADMIN', '$2a$10$e.4SLnC5T7YQKO9jJ6pA6.0G/lR4P9M.j8p1D1x3d.WkI/5uC2nVC'),
('Test Customer', 'customer@test.com', '9876543213', 'CUSTOMER', '$2a$10$e.4SLnC5T7YQKO9jJ6pA6.0G/lR4P9M.j8p1D1x3d.WkI/5uC2nVC');

-- Services
INSERT INTO services (name, description, duration, price, category, image) VALUES
('Gold Facial', 'A luxurious facial treatment using 24-carat gold leaf to rejuvenate and illuminate the skin.', 60, 2500.00, 'SKIN', 'images/services/gold-facial.jpg'),
('Diamond Hair Spa', 'An indulgent hair spa treatment with diamond dust to restore shine and strength to your hair.', 90, 3500.00, 'HAIR', 'images/services/diamond-hair-spa.jpg'),
('Crystal Manicure', 'A premium manicure that uses crystal files and scrubs for perfectly polished nails.', 45, 1200.00, 'NAILS', 'images/services/crystal-manicure.jpg'),
('Bridal Makeup', 'Complete bridal makeup package for your special day.', 180, 15000.00, 'MAKEUP', 'images/services/bridal-makeup.jpg');

-- Gallery Images
INSERT INTO gallery_images (url, category, caption) VALUES
('images/gallery/salon-interior-1.jpg', 'Interior', 'Luxury Salon Ambiance'),
('images/gallery/salon-interior-2.jpg', 'Interior', 'Our comfortable styling stations'),
('images/gallery/hair-styling-1.jpg', 'Hair', 'Elegant updos'),
('images/gallery/nail-art-1.jpg', 'Nails', 'Intricate nail art'),
('images/gallery/skin-care-1.jpg', 'Skin', 'Revitalizing skin treatments'),
('images/gallery/makeup-1.jpg', 'Makeup', 'Flawless makeup application'),
('images/gallery/salon-interior-3.jpg', 'Interior', 'Relaxing pedicure stations'),
('images/gallery/hair-styling-2.jpg', 'Hair', 'Beautiful hair coloring'),
('images/gallery/nail-art-2.jpg', 'Nails', 'Glittering nail designs'),
('images/gallery/skin-care-2.jpg', 'Skin', 'Professional skin analysis'),
('images/gallery/makeup-2.jpg', 'Makeup', 'Glamorous party makeup'),
('images/gallery/salon-exterior-1.jpg', 'Exterior', 'Welcome to EliteX'),
('images/gallery/hair-styling-3.jpg', 'Hair', 'Modern haircuts'),
('images/gallery/nail-art-3.jpg', 'Nails', 'Elegant french manicure'),
('images/gallery/skin-care-3.jpg', 'Skin', 'Advanced facial therapies'),
('images/gallery/makeup-3.jpg', 'Makeup', 'Subtle and natural makeup'),
('images/gallery/salon-interior-4.jpg', 'Interior', 'Our exclusive VIP room'),
('images/gallery/hair-styling-4.jpg', 'Hair', 'Healthy hair treatments'),
('images/gallery/nail-art-4.jpg', 'Nails', 'A wide range of polish colors'),
('images/gallery/skin-care-4.jpg', 'Skin', 'Soothing and calming facials');

-- Testimonials
INSERT INTO testimonials (customer_name, content, rating, image) VALUES
('Anjali S.', 'Absolutely stunning results from the Gold Facial! My skin has never felt so radiant. The ambiance is pure luxury.', 5, 'images/testimonials/anjali.jpg'),
('Riya M.', 'The Diamond Hair Spa is a must-try. My hair feels incredibly soft and looks so glossy. Priya is a hair magician!', 5, 'images/testimonials/riya.jpg'),
('Suresh K.', 'I booked a Crystal Manicure for my wife and she loved it. The staff was very professional and the service was top-notch.', 5, 'images/testimonials/suresh.jpg'),
('Pooja G.', 'I come here regularly for my nail extensions. They have the best designs and the quality is amazing. Highly recommended!', 5, 'images/testimonials/pooja.jpg'),
('Deepak V.', 'The best salon experience in Chennai. The attention to detail and the luxurious feel are unmatched. Rahul is a skin expert.', 5, 'images/testimonials/deepak.jpg');

-- Promotions
INSERT INTO promotions (title, description, discount_percent, valid_from, valid_to, image) VALUES
('20% Diwali Special', 'Celebrate Diwali with a sparkle! Get 20% off on all services.', 20, '2025-10-15', '2025-11-15', 'images/promotions/diwali-special.jpg'),
('New Year Glow Up', 'Start the new year with a fresh look. 15% off on all hair and skin services.', 15, '2025-12-20', '2026-01-10', 'images/promotions/new-year-glow.jpg');

-- Sample Appointments
INSERT INTO appointments (user_id, service_id, stylist_id, date_time, status, deposit_paid) VALUES
(4, 1, 2, '2025-12-24 10:00:00', 'CONFIRMED', true),
(4, 3, 1, '2025-12-28 14:30:00', 'PENDING', false);

