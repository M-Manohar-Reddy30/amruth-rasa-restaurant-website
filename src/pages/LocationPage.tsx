import { MapPin, Phone, MessageCircle, Navigation, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const LocationPage = () => {
  return (
    <Layout>
      <section className="pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm tracking-widest uppercase">
              Find Us
            </span>
            <h1 className="heading-lg text-foreground mt-3">
              Our <span className="text-primary">Location</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Map */}
            <div className="card-elegant overflow-hidden h-80 lg:h-[500px] animate-fade-in-up">
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

            {/* Contact Details */}
            <div className="space-y-6 animate-fade-in-up animation-delay-200">
              {/* Address Card */}
              <div className="card-elegant p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground">Address</h3>
                    <p className="text-muted-foreground mt-2">
                      AMRUTH RASA<br />
                      5W57+RPP, Siruguppa Rd, Ashok Nagar<br />
                      Shastri Nagar, Ballari, Karnataka 583103<br />
                      India
                    </p>
                    <p className="text-primary text-sm mt-2">
                      Near Ashok Nagar
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="card-elegant p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground">Phone</h3>
                    <a
                      href="tel:+919019916906"
                      className="text-muted-foreground hover:text-primary transition-colors mt-2 block text-lg"
                    >
                      +91 90199 16906
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="card-elegant p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-semibold text-foreground">Hours</h3>
                    <div className="mt-3 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Restaurant</span>
                        <span className="text-foreground">11:00 AM – 11:00 PM</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Bar</span>
                        <span className="text-foreground">5:00 PM – 11:30 PM</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Party Hall</span>
                        <span className="text-foreground">By Reservation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 btn-gold gap-2 py-6" asChild>
                  <a
                    href="https://maps.google.com/maps?q=5W57%2BRPP+Siruguppa+Rd+Ashok+Nagar+Ballari+Karnataka+583103"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="w-5 h-5" />
                    Let's Go
                  </a>
                </Button>
                <Button className="flex-1 bg-green-600 hover:bg-green-700 gap-2 py-6" asChild>
                  <a
                    href="https://wa.me/919019916906"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                </Button>
                <Button variant="outline" className="flex-1 btn-outline-gold gap-2 py-6" asChild>
                  <a href="tel:+919019916906">
                    <Phone className="w-5 h-5" />
                    Call
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LocationPage;
