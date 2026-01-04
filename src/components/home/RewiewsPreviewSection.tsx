import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const reviews = [
  {
    name: 'Rajesh Kumar',
    rating: 5,
    text: 'Best biryani in Ballari! The family dining area is perfect for our weekend dinners.',
  },
  {
    name: 'Priya Sharma',
    rating: 5,
    text: 'Celebrated my daughter\'s birthday at the party hall. Excellent service and amazing food!',
  },
  {
    name: 'Anil Reddy',
    rating: 5,
    text: 'The bar section has a great ambience. Premium drinks at reasonable prices.',
  },
  {
    name: 'Sunita Devi',
    rating: 4,
    text: 'We love coming here for family gatherings. The staff is always courteous and helpful.',
  },
];

const ReviewsPreviewSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="heading-lg text-foreground mt-3">
            What Our <span className="text-primary">Guests Say</span>
          </h2>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-foreground font-semibold text-lg">4.8</span>
            <span className="text-muted-foreground text-sm">on Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="card-elegant p-6 space-y-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                "{review.text}"
              </p>
              <p className="font-medium text-foreground text-sm">— {review.name}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button className="btn-gold gap-2" asChild>
            <Link to="/reviews">
              View All Reviews
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsPreviewSection;
