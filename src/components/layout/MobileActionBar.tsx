import { Phone, MessageCircle, MapPin } from 'lucide-react';

const MobileActionBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="glass-dark border-t border-border/50">
        <div className="grid grid-cols-3 gap-1 p-2">
          <a
            href="tel:+919019916906"
            className="flex flex-col items-center gap-1 py-3 px-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
          >
            <Phone className="w-5 h-5 text-primary" />
            <span className="text-xs font-medium text-foreground">Call</span>
          </a>
          <a
            href="https://wa.me/919019916906?text=Hello%20Amruth%20Rasa%2C%20I%20would%20like%20to%20make%20a%20booking"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 py-3 px-2 rounded-lg bg-green-600/20 hover:bg-green-600/30 transition-colors"
          >
            <MessageCircle className="w-5 h-5 text-green-500" />
            <span className="text-xs font-medium text-foreground">WhatsApp</span>
          </a>
          <a
            href="https://maps.google.com/maps?q=5W57%2BRPP+Siruguppa+Rd+Ashok+Nagar+Ballari+Karnataka+583103"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 py-3 px-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
          >
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-xs font-medium text-foreground">Directions</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileActionBar;
