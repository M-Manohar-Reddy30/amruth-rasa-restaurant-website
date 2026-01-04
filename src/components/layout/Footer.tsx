import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 pb-24 md:pb-8">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-semibold text-primary">Amruth Rasa</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium dining experience in the heart of Ballari. Family dining, exclusive bar, and elegant party hall.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/menu" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Our Menu
              </Link>
              <Link to="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Gallery
              </Link>
              <Link to="/party-hall" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Party Hall
              </Link>
              <Link to="/reviews" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Reviews
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-foreground">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+919019916906" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                +91 90199 16906
              </a>
              <a href="mailto:info@amruthrasa.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                info@amruthrasa.com
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>Siruguppa Rd, Ashok Nagar,<br />Ballari, Karnataka 583103</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-foreground">Opening Hours</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <Clock className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <p className="text-foreground font-medium">Restaurant</p>
                  <p className="text-muted-foreground">11:00 AM – 11:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Clock className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <p className="text-foreground font-medium">Bar</p>
                  <p className="text-muted-foreground">5:00 PM – 11:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Amruth Rasa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
