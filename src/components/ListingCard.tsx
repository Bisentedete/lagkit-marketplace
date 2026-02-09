import { Heart, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ListingCardProps {
  title: string;
  price: number;
  location: string;
  image: string;
  timeAgo: string;
  likes?: number;
  sellerName?: string;
  sellerAvatar?: string;
}

const ListingCard = ({ title, price, location, image, timeAgo, likes = 0, sellerName = "Seller", sellerAvatar }: ListingCardProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card card-shadow transition-all duration-300 hover:card-shadow-hover hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-foreground">₱{price.toLocaleString()}</p>
          <button
            onClick={handleLike}
            className="flex items-center gap-1 rounded-full px-1.5 py-0.5 text-xs transition hover:bg-muted"
          >
            <Heart
              className={`h-3.5 w-3.5 transition ${liked ? "fill-primary text-primary" : "text-muted-foreground"}`}
            />
            <span className="text-muted-foreground">{likeCount}</span>
          </button>
        </div>
        <h3 className="mt-0.5 text-sm text-foreground line-clamp-2">{title}</h3>
        <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="h-3 w-3 shrink-0" />
          <span>{location}</span>
          <span className="mx-0.5">·</span>
          <span>{timeAgo}</span>
        </div>
        <div className="mt-2.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Avatar className="h-5 w-5">
              <AvatarImage src={sellerAvatar} alt={sellerName} />
              <AvatarFallback className="text-[10px] bg-muted">{sellerName.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground truncate max-w-[80px]">{sellerName}</span>
          </div>
          <button className="flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[10px] font-medium text-primary-foreground transition hover:bg-primary/90">
            <MessageCircle className="h-3 w-3" />
            Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
