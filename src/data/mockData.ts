export interface Seller {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  reviewCount: number;
  phone: string;
  joined: string;
}

export interface Listing {
  id: number;
  title: string;
  price: number;
  location: string;
  image: string;
  timeAgo: string;
  category: string;
  seller: Seller;
  description: string;
  details: Record<string, string>;
  images: string[];
}

export const sellers: Seller[] = [
  { id: "s1", name: "Maria Santos", avatar: "https://i.pravatar.cc/100?img=1", rating: 4.8, reviewCount: 124, phone: "+63 917 123 4567", joined: "Jan 2023" },
  { id: "s2", name: "Juan Cruz", avatar: "https://i.pravatar.cc/100?img=3", rating: 4.5, reviewCount: 89, phone: "+63 918 234 5678", joined: "Mar 2023" },
  { id: "s3", name: "Ana Reyes", avatar: "https://i.pravatar.cc/100?img=5", rating: 4.9, reviewCount: 210, phone: "+63 919 345 6789", joined: "Nov 2022" },
  { id: "s4", name: "Carlo Mendoza", avatar: "https://i.pravatar.cc/100?img=8", rating: 4.3, reviewCount: 56, phone: "+63 920 456 7890", joined: "Jun 2024" },
];

export const mockListings: Listing[] = [
  {
    id: 1,
    title: "iPhone 15 Pro Max 256GB - Natural Titanium",
    price: 62000,
    location: "Makati",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
    timeAgo: "2h ago",
    category: "electronics",
    seller: sellers[0],
    description: "Brand new iPhone 15 Pro Max 256GB in Natural Titanium. Complete with box, charger, and original accessories. Factory unlocked, dual SIM. Still under Apple warranty until 2025.",
    details: { "Brand": "Apple", "Model": "iPhone 15 Pro Max", "Storage": "256GB", "Color": "Natural Titanium", "Condition": "Brand New" },
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=800&fit=crop",
    ],
  },
  {
    id: 2,
    title: "Nike Air Jordan 1 Retro High OG",
    price: 9500,
    location: "Quezon City",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    timeAgo: "5h ago",
    category: "fashion",
    seller: sellers[1],
    description: "Authentic Nike Air Jordan 1 Retro High OG. Size 10 US. Worn twice, 9.5/10 condition. Comes with original box and extra laces.",
    details: { "Brand": "Nike", "Size": "10 US", "Condition": "Like New", "Color": "Red/Black/White" },
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&h=800&fit=crop",
    ],
  },
  {
    id: 3,
    title: "MacBook Pro M3 14-inch 512GB",
    price: 95000,
    location: "Cebu",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    timeAgo: "1d ago",
    category: "electronics",
    seller: sellers[2],
    description: "MacBook Pro with M3 chip, 14-inch Liquid Retina XDR display, 8GB RAM, 512GB SSD. Space Gray. Complete with box and MagSafe charger. Battery cycle count: 15.",
    details: { "Brand": "Apple", "Model": "MacBook Pro 14\"", "Chip": "M3", "RAM": "8GB", "Storage": "512GB SSD", "Condition": "Like New" },
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&h=800&fit=crop",
    ],
  },
  {
    id: 4,
    title: "Vintage Rolex Datejust 36mm",
    price: 280000,
    location: "Manila",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=400&fit=crop",
    timeAgo: "3h ago",
    category: "collectibles",
    seller: sellers[3],
    description: "Authentic vintage Rolex Datejust 36mm. Stainless steel with jubilee bracelet. Recently serviced with authentication papers. Classic silver dial.",
    details: { "Brand": "Rolex", "Model": "Datejust", "Size": "36mm", "Material": "Stainless Steel", "Condition": "Pre-Owned" },
    images: [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&h=800&fit=crop",
    ],
  },
  {
    id: 5,
    title: "Sony PlayStation 5 with 2 Controllers",
    price: 25000,
    location: "Davao",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop",
    timeAgo: "6h ago",
    category: "electronics",
    seller: sellers[0],
    description: "PS5 Disc Edition with 2 DualSense controllers. Includes 3 games: Spider-Man 2, God of War Ragnarok, and Horizon Forbidden West. Excellent condition.",
    details: { "Brand": "Sony", "Model": "PlayStation 5 Disc", "Condition": "Used - Good", "Includes": "2 Controllers, 3 Games" },
    images: [
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&h=800&fit=crop",
    ],
  },
  {
    id: 6,
    title: "Canon EOS R6 Mark II Body Only",
    price: 115000,
    location: "Makati",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop",
    timeAgo: "12h ago",
    category: "electronics",
    seller: sellers[1],
    description: "Canon EOS R6 Mark II mirrorless camera body. Shutter count under 5000. Comes with original box, battery, charger, and strap.",
    details: { "Brand": "Canon", "Model": "EOS R6 Mark II", "Shutter Count": "< 5000", "Condition": "Excellent" },
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=800&fit=crop",
    ],
  },
  {
    id: 7,
    title: "Herman Miller Aeron Chair Size B",
    price: 45000,
    location: "Manila",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&h=400&fit=crop",
    timeAgo: "1d ago",
    category: "property",
    seller: sellers[2],
    description: "Herman Miller Aeron Remastered, Size B. Fully loaded with PostureFit SL, adjustable arms, and tilt limiter. Office use only.",
    details: { "Brand": "Herman Miller", "Model": "Aeron Remastered", "Size": "B", "Condition": "Used - Good" },
    images: [
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&h=800&fit=crop",
    ],
  },
  {
    id: 8,
    title: "Gucci Marmont Small Shoulder Bag",
    price: 78000,
    location: "Cebu",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
    timeAgo: "4h ago",
    category: "fashion",
    seller: sellers[3],
    description: "Authentic Gucci GG Marmont Small Matelassé Shoulder Bag in black leather. Comes with dust bag, authenticity card, and receipt. Minimal signs of use.",
    details: { "Brand": "Gucci", "Model": "GG Marmont Small", "Color": "Black", "Material": "Matelassé Leather", "Condition": "Like New" },
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=800&fit=crop",
    ],
  },
];

export const banners = [
  {
    id: 1,
    title: "Flash Sale Weekend",
    subtitle: "Up to 70% off on Electronics",
    gradient: "from-primary to-orange-400",
    slug: "flash-sale",
  },
  {
    id: 2,
    title: "Sell Your Pre-loved Items",
    subtitle: "List for free and reach thousands of buyers",
    gradient: "from-emerald-500 to-teal-400",
    slug: "sell-preloved",
  },
  {
    id: 3,
    title: "New Arrivals in Fashion",
    subtitle: "Discover trending styles this season",
    gradient: "from-violet-500 to-purple-400",
    slug: "new-arrivals",
  },
  {
    id: 4,
    title: "Verified Sellers Program",
    subtitle: "Shop with confidence from trusted sellers",
    gradient: "from-blue-500 to-cyan-400",
    slug: "verified-sellers",
  },
];
