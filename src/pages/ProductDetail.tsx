import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Star, MessageCircle, Phone, ChevronLeft, Heart, Share2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ListingCard from "@/components/ListingCard";
import { mockListings } from "@/data/mockData";

const ProductDetail = () => {
  const { id } = useParams();
  const listing = mockListings.find((l) => l.id === Number(id));
  const [selectedImg, setSelectedImg] = useState(0);
  const [offer, setOffer] = useState("");
  const [liked, setLiked] = useState(false);

  if (!listing) {
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <Navbar />
        <main className="flex-1 container py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground">Product not found</h1>
          <Link to="/" className="mt-4 inline-block text-primary hover:underline">Back to Home</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const similar = mockListings.filter((l) => l.category === listing.category && l.id !== listing.id).slice(0, 4);
  const seller = listing.seller;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="container py-4">
          <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ChevronLeft className="h-4 w-4" /> Back to listings
          </Link>
        </div>

        <div className="container pb-12">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left: Images */}
            <div className="lg:col-span-2 space-y-4">
              <div className="relative overflow-hidden rounded-xl border border-border bg-card">
                <img
                  src={listing.images[selectedImg]}
                  alt={listing.title}
                  className="w-full aspect-[4/3] object-cover"
                />
                <button
                  onClick={() => setLiked(!liked)}
                  className="absolute right-3 top-3 rounded-full bg-background/80 p-2 backdrop-blur transition hover:bg-background"
                >
                  <Heart className={`h-5 w-5 ${liked ? "fill-primary text-primary" : "text-muted-foreground"}`} />
                </button>
                <button className="absolute right-14 top-3 rounded-full bg-background/80 p-2 backdrop-blur transition hover:bg-background">
                  <Share2 className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>
              {listing.images.length > 1 && (
                <div className="flex gap-2">
                  {listing.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImg(i)}
                      className={`h-20 w-20 overflow-hidden rounded-lg border-2 transition ${i === selectedImg ? "border-primary" : "border-border"}`}
                    >
                      <img src={img} alt="" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Details */}
              <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                <h2 className="text-lg font-bold text-foreground">Item Details</h2>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(listing.details).map(([key, val]) => (
                    <div key={key} className="flex flex-col">
                      <span className="text-xs text-muted-foreground">{key}</span>
                      <span className="text-sm font-medium text-foreground">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="rounded-xl border border-border bg-card p-6 space-y-3">
                <h2 className="text-lg font-bold text-foreground">Description</h2>
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{listing.description}</p>
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="space-y-4">
              {/* Price & Title */}
              <div className="rounded-xl border border-border bg-card p-6 space-y-3">
                <p className="text-3xl font-extrabold text-primary">₱{listing.price.toLocaleString()}</p>
                <h1 className="text-xl font-bold text-foreground">{listing.title}</h1>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{listing.location}</span>
                  <span>·</span>
                  <span>{listing.timeAgo}</span>
                </div>
              </div>

              {/* Seller */}
              <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <img src={seller.avatar} alt={seller.name} className="h-12 w-12 rounded-full object-cover border-2 border-primary/20" />
                  <div>
                    <h3 className="font-bold text-foreground">{seller.name}</h3>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                      <span className="font-medium text-foreground">{seller.rating}</span>
                      <span className="text-muted-foreground">({seller.reviewCount} reviews)</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Shield className="h-3.5 w-3.5" /> Member since {seller.joined}
                </p>
                <div className="space-y-2">
                  <Button className="w-full gap-2">
                    <MessageCircle className="h-4 w-4" /> Chat with Seller
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <Phone className="h-4 w-4" /> {seller.phone}
                  </Button>
                </div>
              </div>

              {/* Make Offer */}
              <div className="rounded-xl border border-border bg-card p-6 space-y-3">
                <h3 className="font-bold text-foreground">Make an Offer</h3>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground font-medium">₱</span>
                    <Input
                      type="number"
                      placeholder="Enter your offer"
                      value={offer}
                      onChange={(e) => setOffer(e.target.value)}
                      className="pl-7"
                    />
                  </div>
                  <Button>Send</Button>
                </div>
              </div>

              {/* Ad Banner */}
              <div className="rounded-xl overflow-hidden">
                <div className="bg-gradient-to-br from-primary/10 to-accent p-6 text-center space-y-2">
                  <p className="text-sm font-bold text-foreground">✨ Sell your items today</p>
                  <p className="text-xs text-muted-foreground">Reach thousands of buyers on Lagkit</p>
                  <Button size="sm" variant="outline" className="mt-2">Start Selling</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You may also like */}
        {similar.length > 0 && (
          <section className="container pb-12">
            <h2 className="mb-6 text-2xl font-bold text-foreground">You May Also Like</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {similar.map((l) => (
                <ListingCard key={l.id} {...l} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
