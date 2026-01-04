import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Phone, MessageCircle, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

interface MenuItem {
  name: string;
  description?: string;
  price?: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    title: 'Starters',
    items: [
      { name: 'Paneer Tikka', description: 'Marinated cottage cheese grilled in tandoor', price: '₹280' },
      { name: 'Chicken 65', description: 'Spicy deep-fried chicken with curry leaves', price: '₹320' },
      { name: 'Gobi Manchurian', description: 'Crispy cauliflower in Indo-Chinese sauce', price: '₹240' },
      { name: 'Mutton Seekh Kebab', description: 'Minced mutton skewers from the grill', price: '₹380' },
      { name: 'Fish Fry', description: 'Local river fish with traditional spices', price: '₹340' },
      { name: 'Veg Spring Rolls', description: 'Crispy rolls with vegetable filling', price: '₹180' },
    ],
  },
  {
    title: 'Main Course',
    items: [
      { name: 'Butter Chicken', description: 'Tender chicken in creamy tomato gravy', price: '₹380' },
      { name: 'Mutton Rogan Josh', description: 'Slow-cooked mutton in Kashmiri spices', price: '₹440' },
      { name: 'Paneer Butter Masala', description: 'Cottage cheese in rich tomato cream', price: '₹320' },
      { name: 'Dal Makhani', description: 'Black lentils simmered overnight', price: '₹240' },
      { name: 'Kadai Chicken', description: 'Chicken with bell peppers and spices', price: '₹360' },
      { name: 'Palak Paneer', description: 'Cottage cheese in spinach gravy', price: '₹280' },
    ],
  },
  {
    title: 'Breads & Rice',
    items: [
      { name: 'Garlic Naan', description: 'Leavened bread with garlic butter', price: '₹70' },
      { name: 'Butter Roti', description: 'Whole wheat bread with butter', price: '₹40' },
      { name: 'Hyderabadi Biryani', description: 'Fragrant rice with meat and spices', price: '₹380' },
      { name: 'Veg Pulao', description: 'Aromatic rice with vegetables', price: '₹220' },
      { name: 'Jeera Rice', description: 'Cumin-flavored basmati rice', price: '₹160' },
      { name: 'Laccha Paratha', description: 'Layered flaky bread', price: '₹60' },
    ],
  },
  {
    title: 'Drinks',
    items: [
      { name: 'Fresh Lime Soda', description: 'Sweet or salted', price: '₹80' },
      { name: 'Mango Lassi', description: 'Thick yogurt drink with mango', price: '₹120' },
      { name: 'Masala Chai', description: 'Spiced Indian tea', price: '₹40' },
      { name: 'Cold Coffee', description: 'Blended with ice cream', price: '₹140' },
      { name: 'Kokum Sharbat', description: 'Refreshing kokum cooler', price: '₹80' },
      { name: 'Jaljeera', description: 'Tangy cumin drink', price: '₹60' },
    ],
  },
  {
    title: "Chef's Specials",
    items: [
      { name: 'Amruth Rasa Thali', description: 'Complete meal with 12 items', price: '₹550' },
      { name: 'Ballari Special Biryani', description: 'Our signature recipe with secret spices', price: '₹420' },
      { name: 'Tandoori Platter', description: 'Assorted kebabs and tikkas', price: '₹680' },
      { name: 'North Karnataka Fish Curry', description: 'Local delicacy with coconut base', price: '₹360' },
      { name: 'Grand Family Feast', description: 'Serves 4-6 people, assorted dishes', price: '₹2200' },
    ],
  },
];

const MenuBook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = menuData.length + 2; // Cover + categories + Thank You
  const containerRef = useRef<HTMLDivElement>(null);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleTouchStart = useRef<number>(0);
  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = handleTouchStart.current - touchEnd;
    if (diff > 50) nextPage();
    if (diff < -50) prevPage();
  };

  return (
    <div className="relative max-w-4xl mx-auto perspective-[2000px]">
      {/* Book Container */}
      <div
        ref={containerRef}
        className="relative bg-gradient-to-br from-amber-900/20 to-stone-900/40 rounded-lg shadow-2xl overflow-hidden"
        style={{ minHeight: '600px' }}
        onTouchStart={(e) => (handleTouchStart.current = e.touches[0].clientX)}
        onTouchEnd={handleTouchEnd}
      >
        {/* Book Spine Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-amber-800/30 to-transparent z-10" />
        
        {/* Pages */}
        <div className="relative min-h-[600px] p-6 md:p-10">
          {/* Cover Page */}
          {currentPage === 0 && (
            <div className="flex flex-col items-center justify-center min-h-[500px] text-center space-y-6 animate-fade-in">
              <div className="w-24 h-1 bg-primary rounded-full" />
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-primary">
                Amruth Rasa
              </h1>
              <p className="text-lg text-foreground/80 font-serif italic">
                Family Dining • Bar • Party Hall
              </p>
              <div className="w-24 h-1 bg-primary rounded-full" />
              <p className="text-muted-foreground mt-8">Swipe or click to explore our menu</p>
            </div>
          )}

          {/* Menu Categories */}
          {currentPage > 0 && currentPage < totalPages - 1 && (
            <div className="animate-fade-in">
              <div className="text-center mb-8">
                <span className="text-primary text-sm tracking-widest uppercase">
                  {menuData[currentPage - 1]?.title || ''}
                </span>
                <div className="w-16 h-0.5 bg-primary mx-auto mt-2" />
              </div>

              <div className="grid gap-4 md:gap-6">
                {menuData[currentPage - 1]?.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-start gap-4 pb-3 border-b border-border/30 last:border-0"
                  >
                    <div className="flex-1">
                      <h3 className="font-serif text-lg font-medium text-foreground">
                        {item.name}
                      </h3>
                      {item.description && (
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                      )}
                    </div>
                    {item.price && (
                      <span className="text-primary font-semibold whitespace-nowrap">
                        {item.price}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Thank You Page */}
          {currentPage === totalPages - 1 && (
            <div className="flex flex-col items-center justify-center min-h-[500px] text-center space-y-8 animate-fade-in">
              <div className="w-24 h-1 bg-primary rounded-full" />
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
                Thank You
              </h2>
              <p className="text-muted-foreground max-w-md">
                We hope you enjoy your dining experience at Amruth Rasa. For reservations and enquiries:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-600 hover:bg-green-700 gap-2" asChild>
                  <a
                    href="https://wa.me/919019916906"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                </Button>
                <Button variant="outline" className="btn-outline-gold gap-2" asChild>
                  <a href="tel:+919019916906">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </Button>
              </div>
              <div className="w-24 h-1 bg-primary rounded-full" />
            </div>
          )}
        </div>

        {/* Page Number */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-muted-foreground text-sm">
          {currentPage + 1} / {totalPages}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={prevPage}
          disabled={currentPage === 0}
          className="border-primary/50 text-primary disabled:opacity-30"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <Button variant="outline" className="btn-outline-gold gap-2" asChild>
          <a href="#" onClick={(e) => e.preventDefault()}>
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className="border-primary/50 text-primary disabled:opacity-30"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

const MenuPage = () => {
  return (
    <Layout>
      <section className="pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm tracking-widest uppercase">
              Explore
            </span>
            <h1 className="heading-lg text-foreground mt-3">
              Our <span className="text-primary">Menu</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Flip through our digital menu book to discover authentic flavors
            </p>
          </div>

          <MenuBook />
        </div>
      </section>
    </Layout>
  );
};

export default MenuPage;
