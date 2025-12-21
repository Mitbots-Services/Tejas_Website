-- Services
INSERT INTO service (name, description, category, duration, price, featured, available, image_url) VALUES
('Women''s Haircut', 'Professional haircut with styling', 'HAIR', 60, 800.00, true, true, 'https://images.unsplash.com/photo-1560066984-138dadb4c035'),
('Bridal Makeup', 'Complete bridal makeup package', 'BRIDAL', 120, 8000.00, true, true, 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2'),
('Hair Coloring', 'Professional hair coloring and highlights', 'HAIR', 90, 2500.00, true, true, 'https://images.unsplash.com/photo-1562322140-8baeab60908b'),
('Facial Treatment', 'Premium facial with gold and diamond', 'FACIAL', 60, 3000.00, true, true, 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881'),
('Manicure & Pedicure', 'Complete nail care with art design', 'NAILS', 90, 1500.00, true, true, 'https://images.unsplash.com/photo-1604654894610-df63bc536371'),
('Waxing Services', 'Full body waxing treatments', 'WAXING', 45, 1200.00, true, true, 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937'),
('Mehandi Design', 'Traditional and modern mehandi art', 'MEHANDI', 120, 2000.00, true, true, 'https://images.unsplash.com/photo-1610735683869-2e6c582d6640'),
('Hair Spa', 'Relaxing hair spa treatment', 'HAIR', 60, 1800.00, true, true, 'https://images.unsplash.com/photo-1552183732-ee57a63cff7a'),
('Eyebrow Threading', 'Professional eyebrow threading', 'THREADING', 20, 300.00, true, true, 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2'),
('Massage Therapy', 'Relaxing body and head massage', 'MASSAGE', 90, 2500.00, true, true, 'https://images.unsplash.com/photo-1544161515-81205f8abbe4'),
('Chemical Peel', 'Advanced skin rejuvenation treatment', 'FACIAL', 60, 3500.00, false, true, 'https://images.unsplash.com/photo-1556228578-8c89e6adf883'),
('Threading Makeup', 'Complete makeup with threading', 'MAKEUP', 120, 3000.00, false, true, 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2'),
('Hair Smoothening', 'Permanent hair smoothening treatment', 'HAIR', 180, 4500.00, false, true, 'https://images.unsplash.com/photo-1562322140-8baeab60908b'),
('Keratin Treatment', 'Advanced keratin hair treatment', 'HAIR', 150, 3800.00, false, true, 'https://images.unsplash.com/photo-1552183732-ee57a63cff7a'),
('Skin Brightening', 'Brightening and whitening facial', 'FACIAL', 60, 2800.00, false, true, 'https://images.unsplash.com/photo-1556228578-8c89e6adf883'),
('Bridal Package', 'Complete bridal services package', 'BRIDAL', 480, 25000.00, true, true, 'https://images.unsplash.com/photo-1519741497674-611481863552');

-- Stylists
INSERT INTO stylist (name, specialization, experience, rating, available, image_url, bio) VALUES
('Sarah Johnson', 'Hair Styling Expert', 8, 4.8, true, 'https://images.unsplash.com/photo-1580489944761-15a19d654956', 'Expert in modern cuts and colors with 8 years experience'),
('Priya Sharma', 'Makeup Artist', 6, 4.9, true, 'https://images.unsplash.com/photo-1494790108377-be9c29b29330', 'Specialist in bridal and party makeup'),
('Anjali Patel', 'Facial Therapist', 5, 4.7, true, 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d', 'Expert in advanced facial treatments'),
('Rajini Kumari', 'Nail Artist', 7, 4.9, true, 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80', 'Creative nail art and designs specialist'),
('Meera Singh', 'Wellness Therapist', 4, 4.6, true, 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80', 'Massage and relaxation therapy expert');

-- Gallery Images
INSERT INTO gallery_image (title, description, category, image_url, featured, display_order) VALUES
('Bridal Elegance', 'Stunning bridal transformation', 'BRIDAL', 'https://images.unsplash.com/photo-1519741497674-611481863552', true, 1),
('Hair Styling', 'Beautiful modern haircut', 'HAIR', 'https://images.unsplash.com/photo-1560066984-138dadb4c035', true, 2),
('Nail Art', 'Intricate nail designs', 'NAILS', 'https://images.unsplash.com/photo-1604654894610-df63bc536371', true, 3),
('Facial Glow', 'Golden facial treatment result', 'FACIAL', 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881', true, 4),
('Makeup Artistry', 'Professional makeup application', 'MAKEUP', 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2', true, 5),
('Hair Color', 'Vibrant hair coloring', 'HAIR', 'https://images.unsplash.com/photo-1562322140-8baeab60908b', false, 6),
('Salon Interior', 'Luxury salon ambiance', 'INTERIOR', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883', false, 7),
('Massage Spa', 'Relaxation therapy space', 'WELLNESS', 'https://images.unsplash.com/photo-1544161515-81205f8abbe4', false, 8),
('Waxing Station', 'Professional waxing area', 'WAXING', 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937', false, 9),
('Mehandi Art', 'Traditional mehandi designs', 'MEHANDI', 'https://images.unsplash.com/photo-1610735683869-2e6c582d6640', false, 10),
('Hair Spa', 'Hair spa treatment setup', 'HAIR', 'https://images.unsplash.com/photo-1552183732-ee57a63cff7a', false, 11),
('Makeup Studio', 'Professional makeup studio', 'MAKEUP', 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853', false, 12);

-- Testimonials
INSERT INTO testimonial (customer_name, service_type, rating, comment, featured, verified, created_at) VALUES
('Priya Sharma', 'Bridal Makeup', 5, 'Absolutely stunning work! The makeup lasted all day and I felt like a queen.', true, true, CURRENT_TIMESTAMP),
('Anjali Singh', 'Hair Styling', 5, 'Sarah gave me the best haircut! Professional and friendly service.', true, true, CURRENT_TIMESTAMP),
('Riya Gupta', 'Facial Treatment', 5, 'The gold facial is heavenly! My skin has never looked better.', true, true, CURRENT_TIMESTAMP),
('Neha Patel', 'Nail Art', 5, 'Rajini is so creative with nail designs. Highly recommended!', true, true, CURRENT_TIMESTAMP),
('Deepa Verma', 'Massage Therapy', 5, 'Most relaxing experience ever! Perfect for stress relief.', true, true, CURRENT_TIMESTAMP),
('Meera Reddy', 'Hair Coloring', 4, 'Great hair color and professional handling. Very satisfied.', true, true, CURRENT_TIMESTAMP),
('Kavya Nair', 'Waxing', 5, 'Painless waxing experience. Staff is very caring.', false, true, CURRENT_TIMESTAMP),
('Pooja Krishnan', 'Mehandi Design', 5, 'Beautiful mehandi designs! The artistry is incredible.', false, true, CURRENT_TIMESTAMP),
('Sunita Desai', 'Hair Spa', 4, 'Wonderful hair spa treatment. My hair feels so soft.', false, true, CURRENT_TIMESTAMP),
('Divya Iyer', 'Bridal Package', 5, 'Complete bridal package was perfect. Everything was coordinated beautifully!', false, true, CURRENT_TIMESTAMP);

-- Promotions
INSERT INTO promotion (code, description, discount_type, discount_value, start_date, end_date, active, min_purchase, max_uses) VALUES
('WELCOME20', 'Welcome Offer 20% Off', 'PERCENTAGE', 20.00, CURRENT_DATE, DATEADD(DAY, 30, CURRENT_DATE), true, 1000.00, 100),
('FIRST50', 'First Appointment 50% Off', 'PERCENTAGE', 50.00, CURRENT_DATE, DATEADD(DAY, 60, CURRENT_DATE), true, 500.00, 50),
('BRIDAL5K', 'Bridal Services 5000 Off', 'FIXED', 5000.00, CURRENT_DATE, DATEADD(DAY, 90, CURRENT_DATE), true, 10000.00, 25),
('FLAT1K', 'Flat 1000 Discount', 'FIXED', 1000.00, CURRENT_DATE, DATEADD(DAY, 45, CURRENT_DATE), true, 3000.00, 200);
