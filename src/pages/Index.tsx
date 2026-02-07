import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BannerCarousel from "@/components/BannerCarousel";
import FeaturedCategories from "@/components/FeaturedCategories";
import FeaturedListings from "@/components/FeaturedListings";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <BannerCarousel />
        <FeaturedCategories />
        <FeaturedListings />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
