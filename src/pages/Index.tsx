import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import SpacesSection from '@/components/home/SpacesSection';
import MenuPreviewSection from '@/components/home/MenuPreviewSection';
import GalleryPreviewSection from '@/components/home/GalleryPreviewSection';
import ReviewsPreviewSection from "@/components/home/ReviewsPreviewSection";
import LocationSection from '@/components/home/LocationSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <SpacesSection />
      <MenuPreviewSection />
      <GalleryPreviewSection />
      <ReviewsPreviewSection />
      <LocationSection />
    </Layout>
  );
};

export default Index;
