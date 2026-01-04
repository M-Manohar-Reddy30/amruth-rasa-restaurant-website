import { MapPin, Phone, MessageCircle, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LocationSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm tracking-widest uppercase">
            Find Us
          </span>
          <h2 className="heading-lg text-foreground mt-3">
            Visit <span className="text-primary">Amruth Rasa</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="card-elegant overflow-hidden h-80 lg:h-full min-h-[320px] animate-fade-in-up">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122250.73155699887!2d76.82396795!3d15.1393932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb77fd95d4be823%3A0x6e52e07ba9c28af3!2sBallari%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Amruth Rasa Location"
            />
          </div>

          {/* Contact Info */}
          <div className="card-elegant p-8 space-y-8 animate-fade-in-up animation-delay-200">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">Address</h3>
                  <p className="text-muted-foreground mt-1">
                    5W57+RPP, Siruguppa Rd, Ashok Nagar<br />
                    Shastri Nagar, Ballari, Karnataka 583103
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">Phone</h3>
                  <a href="tel:+919019916906" className="text-muted-foreground hover:text-primary transition-colors mt-1 block">
                    +91 90199 16906
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex-1 btn-gold gap-2" asChild>
                <a
                  href="https://maps.google.com/maps?q=5W57%2BRPP+Siruguppa+Rd+Ashok+Nagar+Ballari+Karnataka+583103"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="w-5 h-5" />
                  Let's Go
                </a>
              </Button>
              
              <Button
                variant="outline"
                className="flex-1 bg-green-600 border-green-600 hover:bg-green-700 hover:border-green-700 text-primary-foreground gap-2"
                asChild
              >
                <a
                  href="https://wa.me/919019916906"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
