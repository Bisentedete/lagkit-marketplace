import { useState } from "react";
import { Search, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const categories = ["All Categories", "Luxury", "Fashion", "Electronics", "Property", "Cars", "Collectibles"];
const locations = ["All Locations", "Manila", "Cebu", "Davao", "Quezon City", "Makati"];

const HeroSection = () => {
  const [category, setCategory] = useState("All Categories");
  const [location, setLocation] = useState("All Locations");
  const [search, setSearch] = useState("");
  const [showCatDrop, setShowCatDrop] = useState(false);
  const [showLocDrop, setShowLocDrop] = useState(false);

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 flex flex-col items-start py-20 md:py-28 lg:py-36">
        <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
          The Premier Marketplace
        </span>
        <h1 className="max-w-2xl font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
          Curated Luxury,{" "}
          <span className="text-primary">Exceptional</span> Finds
        </h1>
        <p className="mt-4 max-w-lg text-base text-muted-foreground md:text-lg">
          Discover and trade premium goods — from haute couture to supercars — in an exclusive community
        </p>

        {/* Search bar */}
        <div className="mt-10 flex w-full max-w-3xl flex-col gap-2 rounded-2xl border border-border bg-card/80 p-2 backdrop-blur-xl md:flex-row md:items-center md:gap-0 md:rounded-full md:p-1.5">
          {/* Category selector */}
          <div className="relative">
            <button
              onClick={() => { setShowCatDrop(!showCatDrop); setShowLocDrop(false); }}
              className="flex w-full items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-medium text-foreground hover:bg-secondary md:w-44 md:rounded-full"
            >
              <span className="truncate">{category}</span>
              <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
            </button>
            {showCatDrop && (
              <div className="absolute left-0 top-full z-20 mt-1 w-full rounded-xl border border-border bg-card py-1 shadow-lg">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => { setCategory(c); setShowCatDrop(false); }}
                    className="block w-full px-4 py-2 text-left text-sm text-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    {c}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="hidden h-6 w-px bg-border md:block" />

          {/* Location selector */}
          <div className="relative">
            <button
              onClick={() => { setShowLocDrop(!showLocDrop); setShowCatDrop(false); }}
              className="flex w-full items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-medium text-foreground hover:bg-secondary md:w-40 md:rounded-full"
            >
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              <span className="truncate">{location}</span>
              <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
            </button>
            {showLocDrop && (
              <div className="absolute left-0 top-full z-20 mt-1 w-full rounded-xl border border-border bg-card py-1 shadow-lg">
                {locations.map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLocation(l); setShowLocDrop(false); }}
                    className="block w-full px-4 py-2 text-left text-sm text-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    {l}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="hidden h-6 w-px bg-border md:block" />

          {/* Search input */}
          <div className="flex flex-1 items-center gap-2 px-3">
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search luxury items..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none"
            />
          </div>

          <Button size="default" className="rounded-xl md:rounded-full md:px-6 font-semibold">
            Search
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
