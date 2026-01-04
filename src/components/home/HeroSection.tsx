import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-restaurant.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Amruth Rasa Restaurant Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-4">
            <span className="text-primary text-sm font-medium">Premium Dining Experience</span>
          </div>
          
          <h1 className="heading-xl text-foreground">
            <span className="text-primary">Amruth Rasa</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 font-serif">
            Family Dining • Bar • Party Hall
          </p>
          
          <p className="text-muted-foreground max-w-xl mx-auto">
            Experience exquisite flavors in the heart of Ballari, Karnataka
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button
              size="lg"
              className="btn-gold gap-2 text-base"
              asChild
            >
              <a
                href="https://wa.me/919019916906?text=Hello%20Amruth%20Rasa%2C%20I%20would%20like%20to%20make%20a%20reservation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Booking
              </a>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="btn-outline-gold gap-2 text-base"
              asChild
            >
              <a href="tel:+919019916906">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="btn-outline-gold gap-2 text-base"
              asChild
            >
              <a
                href="https://maps.google.com/maps?q=5W57%2BRPP+Siruguppa+Rd+Ashok+Nagar+Ballari+Karnataka+583103"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float hidden md:block">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
