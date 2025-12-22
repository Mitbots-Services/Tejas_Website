import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationComponent } from '../../core/components/navigation.component';
import { FooterComponent } from '../../core/components/footer.component';

// Updated Interface to include Image
interface Service {
  id: string;
  name: string;
  price: string | number;
  time: string;
  description: string;
  image: string; // Added for the Editorial Design
}

interface SubCategory {
  name: string;
  services: Service[];
}

interface ServiceCategory {
  id: string;
  name: string;
  icon: string; // This acts as the Sidebar Icon
  isOpen?: boolean;
  subCategories: SubCategory[];
}

@Component({
  selector: 'app-service-categories',
  standalone: true,
  imports: [CommonModule, NavigationComponent, FooterComponent],
  templateUrl: './service-categories.component.html',
  styleUrls: ['./service-categories.component.scss']
})
export class ServiceCategoriesComponent implements OnInit, AfterViewInit {
  activeCategory: string | null = 'hair';
  activeSubCategory: string | null = null;
  highlightedServiceId: string | null = null;

  // Full Data with Images Added
  categories: ServiceCategory[] = [
    {
      id: 'hair',
      name: 'Hair Services',
      icon: '✂️',
      isOpen: true,
      subCategories: [
        {
          name: 'Hair Style',
          services: [
            { id: 'kids-cut', name: 'Kids Cut (below 10yrs)', price: 250, time: '30 mins', description: 'Gentle styling specifically for children.', image: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=600' },
            { id: 'trendy-kids', name: 'Trendy Kids Cut', price: 300, time: '40 mins', description: 'Modern and stylish cuts for kids.', image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600' },
            { id: 'u-cut', name: 'U Hair Cut Basic', price: 350, time: '30 mins', description: 'Classic U-shape trim for maintaining length.', image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600' },
            { id: 'basic-cut', name: 'Hair Cut Basic', price: 250, time: '30 mins', description: 'Straight trim to remove split ends.', image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600' },
            { id: 'adv-layer-dry', name: 'Advance Layer Cut (Dry)', price: 800, time: '45 mins', description: 'Texturizing layers for volume (dry cut).', image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600' },
            { id: 'adv-layer-wash', name: 'Advance Layer Cut (Full)', price: 1000, time: '60 mins', description: 'Complete layer service with premium wash and styling.', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600' }
          ]
        },
        {
          name: 'Hair Treatment',
          services: [
            { id: 'spa-s', name: 'Hair Spa - Small', price: 700, time: '45 mins', description: 'Nourishing spa for short hair.', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600' },
            { id: 'spa-m', name: 'Hair Spa - Medium', price: 850, time: '60 mins', description: 'Deep conditioning for shoulder length.', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600' },
            { id: 'spa-l', name: 'Hair Spa - Large', price: 1000, time: '75 mins', description: 'Intensive therapy for long hair.', image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600' },
            { id: 'frizz-s', name: 'Frizz Control - Small', price: 800, time: '45 mins', description: 'Tames flyaways for short hair.', image: 'https://images.unsplash.com/photo-1620331317312-74b88bf40907?w=600' },
            { id: 'frizz-m', name: 'Frizz Control - Medium', price: 1000, time: '60 mins', description: 'Smoothing for medium hair.', image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600' },
            { id: 'frizz-l', name: 'Frizz Control - Large', price: 1200, time: '75 mins', description: 'Complete frizz management for long hair.', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600' },
            { id: 'purify-s', name: 'Purifying Treatment - Small', price: 1000, time: '45 mins', description: 'Scalp detox for short hair.', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600' },
            { id: 'purify-m', name: 'Purifying Treatment - Medium', price: 1200, time: '60 mins', description: 'Deep cleanse for medium hair.', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600' },
            { id: 'purify-l', name: 'Purifying Treatment - Large', price: 1800, time: '75 mins', description: 'Intensive scalp ritual for long hair.', image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600' },
            { id: 'dandruff-s', name: 'Anti Dandruff Treatment - Small', price: 1000, time: '45 mins', description: 'Flake control for short hair.', image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=600' },
            { id: 'dandruff-m', name: 'Anti Dandruff Treatment - Medium', price: 1500, time: '60 mins', description: 'Targeted dandruff therapy.', image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600' },
            { id: 'dandruff-l', name: 'Anti Dandruff Treatment - Large', price: 2000, time: '75 mins', description: 'Complete scalp renewal.', image: 'https://images.unsplash.com/photo-1605497788044-5a90406430b5?w=600' }
          ]
        },
        {
          name: 'Hair Coloring',
          services: [
            { id: 'black-henna-s', name: 'Black Henna - Small', price: 500, time: '45 mins', description: 'Natural black herbal dye.', image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600' },
            { id: 'black-henna-m', name: 'Black Henna - Medium', price: 600, time: '60 mins', description: 'Herbal black coverage.', image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600' },
            { id: 'black-henna-l', name: 'Black Henna - Large', price: 700, time: '75 mins', description: 'Full coverage natural black.', image: 'https://images.unsplash.com/photo-1620331317312-74b88bf40907?w=600' },
            { id: 'brown-henna-s', name: 'Brown Henna - Small', price: 500, time: '45 mins', description: 'Natural brown herbal tint.', image: 'https://images.unsplash.com/photo-1605497788044-5a90406430b5?w=600' },
            { id: 'brown-henna-m', name: 'Brown Henna - Medium', price: 600, time: '60 mins', description: 'Rich brown herbal color.', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600' },
            { id: 'brown-henna-l', name: 'Brown Henna - Large', price: 700, time: '75 mins', description: 'Full length brown coverage.', image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600' },
            { id: 'henna-wash-s', name: 'Henna App (w/ Wash) - Small', price: 450, time: '60 mins', description: 'Application & wash service.', image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600' },
            { id: 'henna-wash-m', name: 'Henna App (w/ Wash) - Medium', price: 500, time: '75 mins', description: 'Medium length application.', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600' },
            { id: 'henna-wash-l', name: 'Henna App (w/ Wash) - Large', price: 550, time: '90 mins', description: 'Long hair application.', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600' }
          ]
        },
        {
          name: 'Root Touch Up',
          services: [
            { id: 'ammonia-root', name: 'Ammonia Colour', price: 800, time: '45 mins', description: 'Root coverage with standard color.', image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600' },
            { id: 'ammonia-free-root', name: 'Ammonia Free', price: 900, time: '45 mins', description: 'Gentle ammonia-free root touchup.', image: 'https://images.unsplash.com/photo-1596472230001-c30932822839?w=600' },
            { id: 'global-s', name: 'Global - Small', price: 1200, time: '60 mins', description: 'Full head color short hair.', image: 'https://images.unsplash.com/photo-1620331317312-74b88bf40907?w=600' },
            { id: 'global-m', name: 'Global - Medium', price: 1500, time: '90 mins', description: 'Full head color medium hair.', image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600' },
            { id: 'global-l', name: 'Global - Large', price: 1800, time: '120 mins', description: 'Full head color long hair.', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600' },
            { id: 'col-app', name: 'Colour Application', price: 500, time: '30 mins', description: 'Professional application of your own color.', image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600' }
          ]
        },
        {
          name: 'Fashion Streaks',
          services: [
            { id: 'streak-per', name: 'Streaks (Per Streak)', price: 250, time: '30 mins', description: 'Single foil highlight.', image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600' },
            { id: 'streak-adv', name: 'Advance Streaks (pre-light)', price: 350, time: '45 mins', description: 'High lift streak with bleach.', image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600' },
            { id: 'streak-glob', name: 'Global Streaks', price: 400, time: '60 mins', description: 'Scattered highlights.', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600' },
            { id: 'fashion-glob', name: 'Fashion Colour (Global)', price: 1800, time: '3 hours', description: 'Vibrant full head fashion color.', image: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=600' }
          ]
        },
        {
          name: 'Hair Texture',
          services: [
            { id: 'ironing', name: 'Ironing', price: 800, time: '30 mins', description: 'Bone straight heat styling.', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600' },
            { id: 'tonges', name: 'Hair Tonges', price: 1500, time: '45 mins', description: 'Curls and waves styling.', image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=600' },
            { id: 'blowdry', name: 'Advance Blow Dry', price: 500, time: '30 mins', description: 'Volume bouncy blow dry.', image: 'https://images.unsplash.com/photo-1620331317312-74b88bf40907?w=600' },
            { id: 'straight', name: 'Straightening', price: 3999, time: '3-4 hours', description: 'Permanent hair straightening.', image: 'https://images.unsplash.com/photo-1596472230001-c30932822839?w=600' },
            { id: 'smooth', name: 'Smoothening', price: 3499, time: '3-4 hours', description: 'Frizz-free smoothing treatment.', image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600' },
            { id: 'keratin', name: 'Keratin Treatment', price: 4500, time: '3 hours', description: 'Protein infusion for shiny, manageable hair.', image: 'https://images.unsplash.com/photo-1610735683869-2e6c582d6640?w=600' },
            { id: 'protein-botox', name: 'Protein Botox', price: 6000, time: '3 hours', description: 'Deep repair anti-aging treatment.', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600' }
          ]
        },
        {
          name: 'Hair Care Services',
          services: [
            { id: 'shampoo', name: 'Shampoo', price: '250-400', time: '15 mins', description: 'Basic cleansing wash.', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600' },
            { id: 'cond', name: 'Conditioner', price: 150, time: '10 mins', description: 'Post-wash moisture.', image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=600' },
            { id: 'prem-shampoo', name: 'Premium Shampoo', price: '300-550', time: '15 mins', description: 'Luxury brand wash.', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600' },
            { id: 'prem-cond', name: 'Premium Conditioner', price: 250, time: '10 mins', description: 'Deep conditioning finish.', image: 'https://images.unsplash.com/photo-1605497788044-5a90406430b5?w=600' }
          ]
        },
        {
          name: 'Head Massage',
          services: [
            { id: 'coco-oil', name: 'Pure Coconut Nourisher', price: 500, time: '30 mins', description: 'Relaxing coconut oil massage.', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600' },
            { id: 'almond-oil', name: 'Almond Indulgence', price: 500, time: '30 mins', description: 'Vitamin-rich almond massage.', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600' },
            { id: 'olive-oil', name: 'Olive Bliss', price: 600, time: '30 mins', description: 'Deep conditioning olive oil.', image: 'https://images.unsplash.com/photo-1620331317312-74b88bf40907?w=600' },
            { id: 'gingelly', name: 'Gingelly Oil', price: 500, time: '30 mins', description: 'Traditional cooling massage.', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600' },
            { id: 'aroma', name: 'Aroma Oil', price: 600, time: '30 mins', description: 'Therapeutic essential oils.', image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600' }
          ]
        }
      ]
    },
    {
      id: 'facial',
      name: 'Facial & Skin Care',
      icon: '✨',
      isOpen: false,
      subCategories: [
        {
          name: 'Skin Care',
          services: [
            { id: 'cleanup', name: 'Cleanup Basic', price: 400, time: '30 mins', description: 'Pore cleansing and toning.', image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600' },
            { id: 'light-cleanup', name: 'Skin Lightening Cleanup', price: 650, time: '30 mins', description: 'Brightening cleanup.', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600' },
            { id: 'mini-facial', name: 'Mini Facial', price: 550, time: '30 mins', description: 'Quick refresh facial.', image: 'https://images.unsplash.com/photo-1596472230001-c30932822839?w=600' }
          ]
        },
        {
          name: 'Facial for Lightening',
          services: [
            { id: 'fruit', name: 'Fruit Facial', price: 600, time: '45 mins', description: 'Natural fruit extract glow.', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600' },
            { id: 'herbal', name: 'Herbal Facial', price: 650, time: '45 mins', description: 'Organic herbal treatment.', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600' },
            { id: 'wine', name: 'Wine Facial', price: 999, time: '60 mins', description: 'Anti-oxidant rich facial.', image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600' },
            { id: 'light-facial', name: 'Skin Lightening Facial', price: 1800, time: '60 mins', description: 'Intensive de-pigmentation.', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600' },
            { id: 'gold-facial', name: 'Gold Facial', price: 1299, time: '60 mins', description: 'Radiance boosting gold dust treatment.', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600' },
            { id: 'inst-glow', name: 'Instant Glow Facial', price: 1499, time: '60 mins', description: 'Party ready instant glow.', image: 'https://images.unsplash.com/photo-1596472230001-c30932822839?w=600' }
          ]
        },
        {
          name: 'Bridal Advanced Facial',
          services: [
            { id: 'o3', name: 'O+3 Facial Advance', price: 2499, time: '75 mins', description: 'High-performance whitening and brightening.', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600' },
            { id: 'hydra-basic', name: 'Hydra Facial', price: 2999, time: '75 mins', description: 'Deep suction cleansing and hydration.', image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600' },
            { id: 'hydra-facial', name: 'Hydra Facial (Adv Kit)', price: 3999, time: '90 mins', description: 'Ultimate hydra facial with premium serums.', image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600' }
          ]
        },
        {
          name: 'Facial Add-ons',
          services: [
            { id: 'eye-norm', name: 'Under Eye (Normal)', price: 400, time: '20 mins', description: 'Basic dark circle care.', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600' },
            { id: 'eye-adv', name: 'Under Eye (Advance)', price: 500, time: '20 mins', description: 'Intensive eye rejuvenation.', image: 'https://images.unsplash.com/photo-1596472230001-c30932822839?w=600' },
            { id: 'peel', name: 'Skin Lightening Peel', price: 400, time: '20 mins', description: 'Brightening rubber mask.', image: 'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?w=600' },
            { id: 'tight', name: 'Skin Tightening Mask', price: 500, time: '20 mins', description: 'Firming anti-age mask.', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600' }
          ]
        }
      ]
    },
    {
      id: 'nails',
      name: 'Nail Services',
      icon: '💅',
      isOpen: false,
      subCategories: [
        {
          name: 'Manicure',
          services: [
            { id: 'mani-reg', name: 'Regular Manicure', price: 500, time: '45 mins', description: 'Basic hand grooming.', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600' },
            { id: 'spa-mani', name: 'Spa Manicure', price: 800, time: '60 mins', description: 'Luxury hand spa & scrub.', image: 'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?w=600' },
            { id: 'cut-file', name: 'Cut n File', price: 150, time: '15 mins', description: 'Nail shaping only.', image: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=600' },
            { id: 'polish', name: 'Nail Polish', price: 100, time: '15 mins', description: 'Color application.', image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600' }
          ]
        },
        {
          name: 'Pedicure',
          services: [
            { id: 'pedi-reg', name: 'Regular Pedicure', price: 700, time: '45 mins', description: 'Basic foot care.', image: 'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?w=600' },
            { id: 'pedi-spa', name: 'Spa Pedicure', price: 999, time: '60 mins', description: 'Luxury foot spa & massage.', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600' },
            { id: 'heel', name: 'Heel Peel Treatment', price: 2000, time: '60 mins', description: 'Callus removal treatment.', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600' }
          ]
        },
        {
          name: 'Nail Extensions & Art',
          services: [
            { id: 'gum-gel', name: 'Gum Gel Extension', price: 2000, time: '120 mins', description: 'Durable gel extensions.', image: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=600' },
            { id: 'refill', name: 'Extension Refill', price: 1800, time: '90 mins', description: 'Extension maintenance.', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600' },
            { id: 'french', name: 'French Nail Polish', price: 1500, time: '45 mins', description: 'Classic white tip style.', image: 'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?w=600' },
            { id: 'gel-app', name: 'Gel Nail Polish App', price: 1200, time: '45 mins', description: 'Long lasting UV gel color.', image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600' }
          ]
        },
        {
          name: 'Nail Art & Finishing',
          services: [
            { id: 'art-prem', name: 'Premium Nail Art', price: 700, time: '30 mins', description: 'Custom artistic designs.', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600' },
            { id: 'cat-eye', name: 'Cat Eye Nail Art', price: 800, time: '30 mins', description: 'Magnetic cat eye effect.', image: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=600' },
            { id: 'blossom', name: 'Blossom Nail Art', price: 800, time: '30 mins', description: 'Blooming gel artistic designs.', image: 'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?w=600' }
          ]
        },
        {
          name: 'Nail Removal',
          services: [
            { id: 'rem-ext', name: 'Nail Extension Removal', price: 700, time: '30 mins', description: 'Safe removal of extensions.', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600' },
            { id: 'rem-gel', name: 'Gel Polish Removal', price: 700, time: '20 mins', description: 'Gentle soak off.', image: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=600' }
          ]
        },
        {
          name: 'Combo Offers',
          services: [
            { id: 'combo-nail', name: 'Gel Ext + Polish + Art', price: 2999, time: '2.5 hours', description: 'Complete nail makeover.', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600' }
          ]
        }
      ]
    },
    {
      id: 'beauty',
      name: 'Beauty & Hair Removal',
      icon: '🌹',
      isOpen: false,
      subCategories: [
        {
          name: 'Premium Waxing - Face',
          services: [
            { id: 'wax-lip', name: 'Upper Lip', price: 50, time: '10 mins', description: 'Gentle lip wax.', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600' },
            { id: 'wax-chin', name: 'Chin / Forehead', price: 100, time: '10 mins', description: 'Targeted facial wax.', image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600' },
            { id: 'wax-side', name: 'Face Sides', price: 200, time: '15 mins', description: 'Sideburn removal.', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600' },
            { id: 'wax-face', name: 'Full Face', price: 400, time: '30 mins', description: 'Complete facial waxing.', image: 'https://images.unsplash.com/photo-1596472230001-c30932822839?w=600' },
            { id: 'wax-neck', name: 'Neck', price: 50, time: '10 mins', description: 'Clean neckline.', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600' },
            { id: 'wax-jaw', name: 'Jawline', price: 50, time: '10 mins', description: 'Jaw definition.', image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600' }
          ]
        },
        {
          name: 'Premium Waxing - Body',
          services: [
            { id: 'wax-ua', name: 'Under Arms', price: 200, time: '15 mins', description: 'Smooth underarms.', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600' },
            { id: 'wax-harm', name: 'Half Arms', price: 350, time: '20 mins', description: 'Elbow down wax.', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600' },
            { id: 'wax-farm', name: 'Full Arms', price: 450, time: '30 mins', description: 'Complete arm wax.', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600' },
            { id: 'wax-hleg', name: 'Half Leg', price: 550, time: '20 mins', description: 'Knee down wax.', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600' },
            { id: 'wax-fleg', name: 'Full Leg', price: 650, time: '40 mins', description: 'Complete leg wax.', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600' },
            { id: 'wax-full-body', name: 'Full Body', price: 2500, time: '90 mins', description: 'Head to toe premium wax.', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600' },
            { id: 'wax-abd', name: 'Abdomen', price: 1200, time: '20 mins', description: 'Stomach area wax.', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600' },
            { id: 'wax-back', name: 'Lower/Upper Back', price: 1800, time: '30 mins', description: 'Back smooth wax.', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600' }
          ]
        },
        {
          name: 'Threading',
          services: [
            { id: 'th-eye', name: 'Eyebrow', price: 50, time: '10 mins', description: 'Precision shaping.', image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600' },
            { id: 'th-lip', name: 'Upper Lip', price: 20, time: '5 mins', description: 'Quick removal.', image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600' },
            { id: 'th-chin', name: 'Chin', price: 30, time: '5 mins', description: 'Chin hair removal.', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600' },
            { id: 'th-fore', name: 'Forehead', price: 20, time: '5 mins', description: 'Forehead cleaning.', image: 'https://images.unsplash.com/photo-1596472230001-c30932822839?w=600' },
            { id: 'th-side', name: 'Side', price: 60, time: '10 mins', description: 'Sideburn threading.', image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600' },
            { id: 'th-face', name: 'Full Face', price: 120, time: '30 mins', description: 'Complete facial threading.', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600' }
          ]
        },
        {
          name: 'Detan Treatments',
          services: [
            { id: 'dt-ua', name: 'Under Arms', price: 250, time: '20 mins', description: 'Brightening dark underarms.', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600' },
            { id: 'dt-back', name: 'Lower/Upper Back', price: 350, time: '25 mins', description: 'Back detan.', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600' },
            { id: 'dt-face', name: 'Face', price: 400, time: '20 mins', description: 'Facial detan.', image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600' },
            { id: 'dt-neck', name: 'Neck', price: 350, time: '20 mins', description: 'Neck brightening.', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600' },
            { id: 'dt-feet', name: 'Feet', price: 200, time: '20 mins', description: 'Foot tan removal.', image: 'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?w=600' },
            { id: 'dt-fback', name: 'Full Back', price: 450, time: '30 mins', description: 'Complete back detan.', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600' },
            { id: 'dt-harm', name: 'Half Arms', price: 300, time: '20 mins', description: 'Arm detan.', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600' },
            { id: 'dt-hleg', name: 'Half Leg', price: 450, time: '25 mins', description: 'Leg detan.', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600' },
            { id: 'dt-farm', name: 'Full Arms', price: 350, time: '30 mins', description: 'Full arm detan.', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600' },
            { id: 'dt-full', name: 'Full Body', price: 2500, time: '60 mins', description: 'Complete body detan.', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600' }
          ]
        },
        {
          name: 'Cream Bleach',
          services: [
            { id: 'bl-lip', name: 'Upper Lip', price: 50, time: '10 mins', description: 'Lip bleach.', image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600' },
            { id: 'bl-ua', name: 'Under Arms', price: 150, time: '15 mins', description: 'UA bleach.', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600' },
            { id: 'bl-back', name: 'Lower/Upper Back', price: 200, time: '20 mins', description: 'Back bleach.', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600' },
            { id: 'bl-face', name: 'Face', price: 350, time: '20 mins', description: 'Facial bleach.', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600' },
            { id: 'bl-neck', name: 'Neck', price: 300, time: '20 mins', description: 'Neck bleach.', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600' },
            { id: 'bl-harm', name: 'Half Arms', price: 250, time: '20 mins', description: 'Arm bleach.', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600' },
            { id: 'bl-feet', name: 'Feet', price: 150, time: '20 mins', description: 'Foot bleach.', image: 'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?w=600' },
            { id: 'bl-fback', name: 'Full Back', price: 400, time: '30 mins', description: 'Full back bleach.', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600' },
            { id: 'bl-hleg', name: 'Half Leg', price: 400, time: '25 mins', description: 'Leg bleach.', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600' },
            { id: 'bl-farm', name: 'Full Arms', price: 300, time: '30 mins', description: 'Full arm bleach.', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600' },
            { id: 'bl-fleg', name: 'Full Legs', price: 600, time: '40 mins', description: 'Full leg bleach.', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600' },
            { id: 'bl-full', name: 'Full Body', price: 2000, time: '60 mins', description: 'Full body bleach.', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600' }
          ]
        }
      ]
    },
    {
      id: 'bridal',
      name: 'Bridal Services',
      icon: '💎',
      isOpen: false,
      subCategories: [
        {
          name: 'Bridal Makeup & Styling',
          services: [
            { id: 'saree', name: 'Bridal Saree Drapping', price: 550, time: '20 mins', description: 'Professional draping.', image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=600' },
            { id: 'hair-do', name: 'Hair Do - Regular', price: 1000, time: '45 mins', description: 'Event hair styling.', image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600' },
            { id: 'party-mkp', name: 'Party Makeup', price: 3500, time: '60 mins', description: 'Glamorous guest makeup.', image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600' },
            { id: 'bridal-mkp', name: 'Bridal Makeover (Starting)', price: 15000, time: '3 hours', description: 'Complete bridal look creation.', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600' }
          ]
        },
        {
          name: 'Bridal Package',
          services: [
            { id: 'bridal-pkg', name: 'Bridal Package', price: 9999, time: '5 hours', description: 'Includes: Hydra Facial, Hair Spa, Eyebrow Threading, Waxing (Full Arm, Full Leg, Underarm, Blouse Line), Spa Pedicure, Spa Manicure.', image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=600' }
          ]
        }
      ]
    },
    {
      id: 'mehandi',
      name: 'Mehandi & Henna',
      icon: '🎨',
      isOpen: false,
      subCategories: [
        {
          name: 'Designs',
          services: [
            { id: 'meh-front', name: 'Front Mehandi', price: '500-1500', time: '45 mins', description: 'Palm designs.', image: 'https://images.unsplash.com/photo-1610735683869-2e6c582d6640?w=600' },
            { id: 'meh-arabic', name: 'Arabic Mehandi', price: '600-1200', time: '45 mins', description: 'Modern arabic style.', image: 'https://images.unsplash.com/photo-1550614000-4b9519e023d3?w=600' },
            { id: 'bridal-meh', name: 'Bridal Mehandi', price: 2500, time: '3 hours', description: 'Full hands and feet detailed art.', image: 'https://images.unsplash.com/photo-1598048148972-7a70c8672533?w=600' }
          ]
        }
      ]
    },
    {
      id: 'packages',
      name: 'Premium Packages',
      icon: '👑',
      isOpen: false,
      subCategories: [
        {
          name: 'Special Packages',
          services: [
            { id: 'transform', name: 'Transformation Package', price: 25000, time: '3 Months', description: '3 Month journey, 3 major sessions, 100% Guaranteed Results.', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600' }
          ]
        }
      ]
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const serviceId = params['serviceId'];
      const categoryId = params['category'];

      if (serviceId) {
        this.highlightedServiceId = serviceId;
        this.expandCategoryForService(serviceId);
      } else if (categoryId) {
        this.toggleCategory(categoryId, true);
      }
    });
  }

  ngAfterViewInit(): void {
    if (this.highlightedServiceId) {
      setTimeout(() => {
        const element = document.getElementById(this.highlightedServiceId!);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 500);
    }
  }

  toggleCategory(categoryId: string, forceOpen: boolean = false) {
    this.categories = this.categories.map(cat => {
      if (cat.id === categoryId) {
        return { ...cat, isOpen: forceOpen ? true : !cat.isOpen };
      }
      return cat;
    });
    this.activeCategory = categoryId;
    this.activeSubCategory = null; 
  }

  selectSubCategory(subCatName: string) {
    this.activeSubCategory = subCatName;
    if (window.innerWidth < 1024) {
      document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  expandCategoryForService(serviceId: string) {
    for (const cat of this.categories) {
      for (const sub of cat.subCategories) {
        if (sub.services.find(s => s.id === serviceId)) {
          cat.isOpen = true;
          this.activeCategory = cat.id;
          this.activeSubCategory = sub.name; 
          return;
        }
      }
    }
  }

  bookService(serviceName: string) {
    this.router.navigate(['/booking'], { queryParams: { service: serviceName } });
  }

  getDisplayCategories() {
    if (this.activeCategory) {
      const cat = this.categories.find(c => c.id === this.activeCategory);
      if (!cat) return this.categories;

      if (this.activeSubCategory) {
        const filteredSub = cat.subCategories.filter(s => s.name === this.activeSubCategory);
        return [{ ...cat, subCategories: filteredSub }];
      }
      return [cat];
    }
    return this.categories; 
  }
}