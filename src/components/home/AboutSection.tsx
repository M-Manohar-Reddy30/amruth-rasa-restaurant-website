const AboutSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up">
          <span className="text-primary font-medium text-sm tracking-widest uppercase">
            Welcome
          </span>
          
          <h2 className="heading-lg text-foreground">
            A Taste of <span className="text-primary">Tradition</span>
          </h2>
          
          <p className="text-muted-foreground text-lg leading-relaxed">
            At Amruth Rasa, we blend authentic Indian flavors with modern elegance. 
            Whether it's a family gathering, a quiet drink at our bar, or a grand celebration 
            in our party hall — every moment here is crafted to perfection.
          </p>
          
          <div className="flex items-center justify-center gap-8 pt-4">
            <div className="text-center">
              <p className="text-3xl font-serif font-semibold text-primary">15+</p>
              <p className="text-sm text-muted-foreground">Years of Excellence</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-3xl font-serif font-semibold text-primary">50+</p>
              <p className="text-sm text-muted-foreground">Signature Dishes</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-3xl font-serif font-semibold text-primary">10K+</p>
              <p className="text-sm text-muted-foreground">Happy Guests</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
