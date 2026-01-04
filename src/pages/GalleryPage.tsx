import { useState } from 'react';
import { X } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import familyDiningImage from '@/assets/family-dining.jpg';
import barImage from '@/assets/bar-section.jpg';
import partyHallImage from '@/assets/party-hall.jpg';
import foodImage from '@/assets/food-spread.jpg';
import heroImage from '@/assets/hero-restaurant.jpg';

const galleryCategories = [
  { id: 'all', name: 'All' },
  { id: 'food', name: 'Food' },
  { id: 'dining', name: 'Family Dining' },
  { id: 'bar', name: 'Bar' },
  { id: 'party', name: 'Party Hall' },
];

const galleryImages = [
  { src: foodImage, alt: 'Signature Dishes', category: 'food' },
  { src: familyDiningImage, alt: 'Family Dining Area', category: 'dining' },
  { src: barImage, alt: 'Premium Bar Section', category: 'bar' },
  { src: partyHallImage, alt: 'Elegant Party Hall', category: 'party' },
  { src: heroImage, alt: 'Restaurant Ambience', category: 'dining' },
  { src: foodImage, alt: 'Traditional Thali', category: 'food' },
  { src: barImage, alt: 'Bar Counter', category: 'bar' },
  { src: partyHallImage, alt: 'Celebration Setup', category: 'party' },
  { src: familyDiningImage, alt: 'Cozy Seating', category: 'dining' },
  { src: heroImage, alt: 'Golden Hour Dining', category: 'dining' },
  { src: foodImage, alt: 'Chef Special Biryani', category: 'food' },
  { src: partyHallImage, alt: 'Event Decoration', category: 'party' },
];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <Layout>
      <section className="pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm tracking-widest uppercase">
              Gallery
            </span>
            <h1 className="heading-lg text-foreground mt-3">
              Moments at <span className="text-primary">Amruth Rasa</span>
            </h1>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="break-inside-avoid card-elegant overflow-hidden group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-foreground text-sm font-medium transition-opacity">
                      View
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[85vh] object-contain rounded-lg animate-scale-in"
          />
        </div>
      )}
    </Layout>
  );
};

export default GalleryPage;
