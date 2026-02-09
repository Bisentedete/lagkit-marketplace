import { Link } from "react-router-dom";
import { ChevronLeft, SlidersHorizontal } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ListingCard from "@/components/ListingCard";
import { mockListings } from "@/data/mockData";

const ViewAllListings = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="border-b border-border bg-card">
          <div className="container py-8">
            <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4">
              <ChevronLeft className="h-4 w-4" /> Back to Home
            </Link>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-extrabold text-foreground">All Listings</h1>
                <p className="mt-1 text-muted-foreground">{mockListings.length} items available</p>
              </div>
              <button className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors">
                <SlidersHorizontal className="h-4 w-4" /> Filters
              </button>
            </div>
          </div>
        </div>
        <div className="container py-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {mockListings.map((l) => (
              <ListingCard key={l.id} {...l} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ViewAllListings;
