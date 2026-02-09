import { useParams, Link } from "react-router-dom";
import { ChevronLeft, Sparkles, Tag, ShieldCheck, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ListingCard from "@/components/ListingCard";
import { mockListings } from "@/data/mockData";

const promoData: Record<string, { title: string; subtitle: string; icon: React.ElementType; gradient: string }> = {
  "flash-sale": { title: "Flash Sale Weekend", subtitle: "Up to 70% off on select electronics. Grab these deals before they're gone!", icon: Tag, gradient: "from-primary to-orange-400" },
  "sell-preloved": { title: "Sell Your Pre-loved Items", subtitle: "List for free and reach thousands of buyers in your area. Start decluttering today!", icon: Sparkles, gradient: "from-emerald-500 to-teal-400" },
  "new-arrivals": { title: "New Arrivals in Fashion", subtitle: "Discover the trending styles and must-have pieces this season.", icon: TrendingUp, gradient: "from-violet-500 to-purple-400" },
  "verified-sellers": { title: "Verified Sellers Program", subtitle: "Shop with confidence from our community of trusted, verified sellers.", icon: ShieldCheck, gradient: "from-blue-500 to-cyan-400" },
};

const PromoPage = () => {
  const { slug } = useParams();
  const promo = promoData[slug || ""] || { title: "Promotion", subtitle: "Check out featured listings", icon: Sparkles, gradient: "from-primary to-accent" };
  const Icon = promo.icon;
  // Show random subset of listings
  const featured = mockListings.slice(0, 6);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className={`bg-gradient-to-r ${promo.gradient} py-16`}>
          <div className="container text-center">
            <Icon className="mx-auto h-12 w-12 text-primary-foreground mb-4" />
            <h1 className="text-3xl font-extrabold text-primary-foreground md:text-4xl">{promo.title}</h1>
            <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">{promo.subtitle}</p>
          </div>
        </div>
        <div className="container py-8">
          <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
            <ChevronLeft className="h-4 w-4" /> Back to Home
          </Link>
          <h2 className="text-2xl font-bold text-foreground mb-6">Featured Listings</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {featured.map((l) => (
              <ListingCard key={l.id} {...l} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PromoPage;
