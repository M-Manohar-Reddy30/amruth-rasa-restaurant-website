import { Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const reviews = [
  {
    name: 'Rajesh Kumar',
    date: '2 weeks ago',
    rating: 5,
    text: 'Best biryani in Ballari! The family dining area is perfect for our weekend dinners. The staff is very courteous and the ambience is excellent. Highly recommended for family gatherings.',
  },
  {
    name: 'Priya Sharma',
    date: '1 month ago',
    rating: 5,
    text: "Celebrated my daughter's birthday at the party hall. Excellent service and amazing food! The decorations were beautiful and the staff went above and beyond to make our day special.",
  },
  {
    name: 'Anil Reddy',
    date: '3 weeks ago',
    rating: 5,
    text: 'The bar section has a great ambience. Premium drinks at reasonable prices. Perfect place to unwind after work. The music and lighting create a very relaxing atmosphere.',
  },
  {
    name: 'Sunita Devi',
    date: '2 months ago',
    rating: 4,
    text: 'We love coming here for family gatherings. The staff is always courteous and helpful. Food quality is consistently good. Only wish they had more vegetarian options.',
  },
  {
    name: 'Mohammed Hussain',
    date: '1 week ago',
    rating: 5,
    text: 'Outstanding experience! The mutton biryani is to die for. Clean restaurant with excellent service. Will definitely be a regular customer.',
  },
  {
    name: 'Lakshmi Narayana',
    date: '3 months ago',
    rating: 5,
    text: 'Hosted our company dinner at the party hall. Everything was perfect - from the food to the service. The team handled 50 guests effortlessly.',
  },
  {
    name: 'Kavitha R.',
    date: '2 weeks ago',
    rating: 4,
    text: 'Nice place for family lunch. Good food and nice interiors. Slightly on the expensive side but worth it for special occasions.',
  },
  {
    name: 'Venkatesh Gowda',
    date: '1 month ago',
    rating: 5,
    text: 'The Amruth Rasa Thali is a must-try! Such a variety of dishes and everything was delicious. Will bring my family next time.',
  },
];

const ReviewsPage = () => {
  return (
    <Layout>
      <section className="pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm tracking-widest uppercase">
              Testimonials
            </span>
            <h1 className="heading-lg text-foreground mt-3">
              Guest <span className="text-primary">Reviews</span>
            </h1>

            {/* Overall Rating Card */}
            <div className="card-elegant inline-flex flex-col items-center gap-4 p-8 mt-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-primary text-primary" />
                ))}
              </div>
              <div className="text-center">
                <p className="text-4xl font-serif font-semibold text-foreground">4.8</p>
                <p className="text-muted-foreground text-sm mt-1">Based on 200+ Google Reviews</p>
              </div>
              <Button className="btn-gold gap-2 mt-2" asChild>
                <a
                  href="https://www.google.com/search?q=amruth+rasa+ballari+reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                  Write a Review
                </a>
              </Button>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="card-elegant p-6 space-y-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-semibold">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                </div>

                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                  {[...Array(5 - review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-muted" />
                  ))}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ReviewsPage;
