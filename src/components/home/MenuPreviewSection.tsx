import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import foodImage from '@/assets/food-spread.jpg';

const menuHighlights = [
  { name: 'Butter Chicken', category: 'Main Course' },
  { name: 'Hyderabadi Biryani', category: "Chef's Special" },
  { name: 'Paneer Tikka', category: 'Starters' },
  { name: 'Dal Makhani', category: 'Main Course' },
  { name: 'Garlic Naan', category: 'Breads' },
  { name: 'Gulab Jamun', category: 'Desserts' },
];

const MenuPreviewSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in-up">
            <div className="card-elegant overflow-hidden">
              <img
                src={foodImage}
                alt="Signature dishes at Amruth Rasa"
                className="w-full h-80 lg:h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary/30 rounded-xl -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fade-in-up animation-delay-200">
            <div>
              <span className="text-primary font-medium text-sm tracking-widest uppercase">
                Our Menu
              </span>
              <h2 className="heading-lg text-foreground mt-3">
                Signature <span className="text-primary">Flavors</span>
              </h2>
              <p className="text-muted-foreground mt-4">
                Discover our carefully curated menu featuring authentic Indian dishes prepared with fresh ingredients and traditional recipes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {menuHighlights.map((item) => (
                <div
                  key={item.name}
                  className="p-4 rounded-lg bg-secondary/50 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <p className="font-medium text-foreground">{item.name}</p>
                  <p className="text-xs text-primary mt-1">{item.category}</p>
                </div>
              ))}
            </div>

            <Button className="btn-gold gap-2" asChild>
              <Link to="/menu">
                View Full Menu
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuPreviewSection;
