import { Phone, MessageCircle, Users, Calendar, Wine, UtensilsCrossed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import partyHallImage from '@/assets/party-hall.jpg';

const eventTypes = [
  {
    icon: Calendar,
    title: 'Birthday Parties',
    description: 'Make your special day unforgettable with our premium setup and service.',
  },
  {
    icon: Users,
    title: 'Corporate Events',
    description: 'Professional setting for meetings, dinners, and team celebrations.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Family Celebrations',
    description: 'Anniversaries, engagements, and family reunions in elegant style.',
  },
];

const packages = [
  {
    title: 'Family Event',
    description: 'Vegetarian menu with soft beverages',
    features: ['Capacity: Up to 100 guests', 'Basic decorations included', 'AC hall with premium seating'],
  },
  {
    title: 'Premium Event',
    description: 'Non-veg menu with full bar service',
    features: ['Capacity: Up to 100 guests', 'Enhanced decorations', 'DJ & sound system available'],
  },
];

const PartyHallPage = () => {
  return (
    <Layout>
      <section className="pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="relative rounded-2xl overflow-hidden mb-16">
            <img
              src={partyHallImage}
              alt="Amruth Rasa Party Hall"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <span className="text-primary font-medium text-sm tracking-widest uppercase">
                Celebrate With Us
              </span>
              <h1 className="heading-lg text-foreground mt-2">
                Party <span className="text-primary">Hall</span>
              </h1>
              <p className="text-muted-foreground mt-2 max-w-xl">
                Host your special events in our elegant party hall with world-class amenities
              </p>
            </div>
          </div>

          {/* Event Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {eventTypes.map((event, index) => (
              <div
                key={index}
                className="card-elegant p-6 text-center space-y-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <event.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-sm">{event.description}</p>
              </div>
            ))}
          </div>

          {/* Packages */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="heading-md text-foreground">
                Event <span className="text-primary">Packages</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className="card-elegant p-8 space-y-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-foreground">
                      {pkg.title}
                    </h3>
                    <p className="text-primary text-sm mt-1">{pkg.description}</p>
                  </div>

                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-muted-foreground text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3 pt-4">
                    <Button className="flex-1 bg-green-600 hover:bg-green-700 gap-2" asChild>
                      <a
                        href="https://wa.me/919019916906?text=Hello%2C%20I%20am%20interested%20in%20booking%20the%20party%20hall"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 btn-outline-gold gap-2"
                      asChild
                    >
                      <a href="tel:+919019916906">
                        <Phone className="w-4 h-4" />
                        Call
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bar Option */}
          <div className="card-elegant p-8 max-w-2xl mx-auto text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Wine className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Bar Service Available
            </h3>
            <p className="text-muted-foreground text-sm">
              Add our premium bar service to your event with a curated selection of drinks.
              Subject to applicable regulations and licensing.
            </p>
            <p className="text-primary font-medium">Contact us for customized packages</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PartyHallPage;
