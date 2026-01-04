import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import familyDiningImage from '@/assets/family-dining.jpg';
import barImage from '@/assets/bar-section.jpg';
import partyHallImage from '@/assets/party-hall.jpg';

const spaces = [
  {
    title: 'Family Dining',
    icon: '🍽',
    description: 'A peaceful and welcoming space for families to enjoy authentic Indian cuisine together.',
    image: familyDiningImage,
  },
  {
    title: 'Bar Section',
    icon: '🍻',
    description: 'Premium drinks in a sophisticated ambience. Perfect for unwinding after a long day.',
    image: barImage,
  },
  {
    title: 'Party Hall',
    icon: '🎉',
    description: 'Celebrate birthdays, anniversaries, corporate events, and special occasions in style.',
    image: partyHallImage,
  },
];

const SpacesSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm tracking-widest uppercase">
            Our Spaces
          </span>
          <h2 className="heading-lg text-foreground mt-3">
            Three Experiences, <span className="text-primary">One Destination</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaces.map((space, index) => (
            <div
              key={space.title}
              className="card-elegant group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={space.image}
                  alt={space.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <span className="absolute top-4 left-4 text-3xl">{space.icon}</span>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {space.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {space.description}
                </p>
                
                <div className="flex gap-3 pt-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-green-600 hover:bg-green-700 gap-2"
                    asChild
                  >
                    <a
                      href="https://wa.me/919019916906"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground gap-2"
                    asChild
                  >
                    <a href="tel:+919019916906">
                      <Phone className="w-4 h-4" />
                      Call
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpacesSection;
