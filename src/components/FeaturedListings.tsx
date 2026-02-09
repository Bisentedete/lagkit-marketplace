import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ListingCard from "./ListingCard";
import { mockListings } from "@/data/mockData";

const FeaturedListings = () => {
  return (
    <section className="container py-10">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Fresh Listings</h2>
        <Link
          to="/listings"
          className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          View all <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {mockListings.map((listing) => (
          <ListingCard key={listing.id} {...listing} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedListings;
