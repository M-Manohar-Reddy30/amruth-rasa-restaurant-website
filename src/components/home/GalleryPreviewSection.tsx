import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import familyDiningImage from '@/assets/family-dining.jpg';
import barImage from '@/assets/bar-section.jpg';
import partyHallImage from '@/assets/party-hall.jpg';
import foodImage from '@/assets/food-spread.jpg';
import heroImage from '@/assets/hero-restaurant.jpg';

const galleryImages = [
  { src: heroImage, alt: 'Restaurant Interior' },
  { src: familyDiningImage, alt: 'Family Dining Area' },
  { src: barImage, alt: 'Bar Section' },
  { src: partyHallImage, alt: 'Party Hall' },
  { src: foodImage, alt: 'Signature Dishes' },
  { src: heroImage, alt: 'Elegant Ambience' },
];

const GalleryPreviewSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm tracking-widest uppercase">
            Gallery
          </span>
          <h2 className="heading-lg text-foreground mt-3">
            Glimpse of <span className="text-primary">Elegance</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="card-elegant overflow-hidden group animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button className="btn-gold gap-2" asChild>
            <Link to="/gallery">
              View Full Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreviewSection;
