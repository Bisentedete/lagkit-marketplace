import { useParams, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ListingCard from "@/components/ListingCard";
import { mockListings } from "@/data/mockData";

const categoryMeta: Record<string, { title: string; description: string }> = {
  fashion: { title: "Fashion", description: "Discover the latest in Women's and Men's fashion" },
  electronics: { title: "Electronics", description: "Phones, laptops, gadgets and more" },
  collectibles: { title: "Collectibles", description: "Rare finds, toys, books and magazines" },
  property: { title: "Property", description: "Homes, condos and real estate listings" },
  cars: { title: "Autos", description: "Cars, motorcycles and vehicles" },
};

const CategoryPage = () => {
  const { slug } = useParams();
  const meta = categoryMeta[slug || ""] || { title: slug || "Category", description: "Browse listings" };
  const listings = slug ? mockListings.filter((l) => l.category === slug) : mockListings;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="bg-gradient-to-r from-primary/10 to-accent py-12">
          <div className="container">
            <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4">
              <ChevronLeft className="h-4 w-4" /> Back to Home
            </Link>
            <h1 className="text-3xl font-extrabold text-foreground">{meta.title}</h1>
            <p className="mt-1 text-muted-foreground">{meta.description}</p>
          </div>
        </div>
        <div className="container py-8">
          {listings.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {listings.map((l) => (
                <ListingCard key={l.id} {...l} />
              ))}
            </div>
          ) : (
            <p className="py-12 text-center text-muted-foreground">No listings found in this category yet.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
