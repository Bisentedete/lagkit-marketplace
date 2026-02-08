import ListingCard from "./ListingCard";

const mockListings = [
  { id: 1, title: "iPhone 15 Pro Max 256GB - Natural Titanium", price: 62000, location: "Makati", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop", timeAgo: "2h ago", likes: 24, sellerName: "TechDeals PH", sellerAvatar: "https://i.pravatar.cc/40?img=1" },
  { id: 2, title: "Nike Air Jordan 1 Retro High OG", price: 9500, location: "Quezon City", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop", timeAgo: "5h ago", likes: 18, sellerName: "SneakerHub", sellerAvatar: "https://i.pravatar.cc/40?img=2" },
  { id: 3, title: "MacBook Pro M3 14-inch 512GB", price: 95000, location: "Cebu", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop", timeAgo: "1d ago", likes: 42, sellerName: "Apple Corner", sellerAvatar: "https://i.pravatar.cc/40?img=3" },
  { id: 4, title: "Vintage Rolex Datejust 36mm", price: 280000, location: "Manila", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=400&fit=crop", timeAgo: "3h ago", likes: 56, sellerName: "LuxWatch MNL", sellerAvatar: "https://i.pravatar.cc/40?img=4" },
  { id: 5, title: "Sony PlayStation 5 with 2 Controllers", price: 25000, location: "Davao", image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop", timeAgo: "6h ago", likes: 31, sellerName: "GameZone", sellerAvatar: "https://i.pravatar.cc/40?img=5" },
  { id: 6, title: "Canon EOS R6 Mark II Body Only", price: 115000, location: "Makati", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop", timeAgo: "12h ago", likes: 13, sellerName: "CamShop", sellerAvatar: "https://i.pravatar.cc/40?img=6" },
  { id: 7, title: "Herman Miller Aeron Chair Size B", price: 45000, location: "Manila", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&h=400&fit=crop", timeAgo: "1d ago", likes: 8, sellerName: "OfficeKing", sellerAvatar: "https://i.pravatar.cc/40?img=7" },
  { id: 8, title: "Gucci Marmont Small Shoulder Bag", price: 78000, location: "Cebu", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop", timeAgo: "4h ago", likes: 37, sellerName: "BagLover", sellerAvatar: "https://i.pravatar.cc/40?img=8" },
];

const FeaturedListings = () => {
  return (
    <section className="container py-10">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-display text-2xl font-bold text-foreground">Fresh Listings</h2>
        <button className="text-sm font-medium text-primary hover:underline">View all</button>
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
