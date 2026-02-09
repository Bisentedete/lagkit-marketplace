import { Heart, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Seller } from "@/data/mockData";

interface ListingCardProps {
  id: number;
  title: string;
  price: number;
  location: string;
  image: string;
  timeAgo: string;
  seller: Seller;
}

const ListingCard = ({ id, title, price, location, image, timeAgo, seller }: ListingCardProps) => {
  const [liked, setLiked] = useState(false);

  return (
    <Link to={`/product/${id}`} className="group overflow-hidden rounded-xl border border-border bg-card card-shadow transition-all duration-300 hover:card-shadow-hover hover:-translate-y-1 block">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <button
          onClick={(e) => { e.preventDefault(); setLiked(!liked); }}
          className="absolute right-2 top-2 rounded-full bg-background/80 p-1.5 backdrop-blur transition hover:bg-background"
        >
          <Heart
            className={`h-4 w-4 transition ${liked ? "fill-primary text-primary" : "text-muted-foreground"}`}
          />
        </button>
      </div>
      <div className="p-3">
        <p className="text-lg font-bold text-foreground">₱{price.toLocaleString()}</p>
        <h3 className="mt-0.5 text-sm text-foreground line-clamp-2">{title}</h3>
        <div className="mt-2 flex items-center gap-2">
          <img src={seller.avatar} alt={seller.name} className="h-5 w-5 rounded-full object-cover" />
          <span className="text-xs text-muted-foreground truncate">{seller.name}</span>
        </div>
        <div className="mt-1.5 flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {location}
          </span>
          <span>{timeAgo}</span>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
