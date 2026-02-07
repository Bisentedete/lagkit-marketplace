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
    <section className="relative overflow-hidden bg-accent">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 hero-gradient opacity-90" />
      </div>

      <div className="container relative z-10 flex flex-col items-center py-16 text-center md:py-24 lg:py-32">
        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
          Every kind of item, for every kind of buyer
        </h1>
        <p className="mt-4 max-w-xl text-base text-primary-foreground/80 md:text-lg">
          Buy and sell anything — from fashion to cars — in your neighborhood
        </p>

        {/* Search bar */}
        <div className="mt-8 flex w-full max-w-3xl flex-col gap-2 rounded-xl bg-background p-2 shadow-lg md:flex-row md:items-center md:gap-0 md:rounded-full md:p-1.5">
          {/* Category selector */}
          <div className="relative">
            <button
              onClick={() => { setShowCatDrop(!showCatDrop); setShowLocDrop(false); }}
              className="flex w-full items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-medium text-foreground hover:bg-secondary md:w-44 md:rounded-full"
            >
              <span className="truncate">{category}</span>
              <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
            </button>
            {showCatDrop && (
              <div className="absolute left-0 top-full z-20 mt-1 w-full rounded-lg border border-border bg-background py-1 shadow-lg">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => { setCategory(c); setShowCatDrop(false); }}
                    className="block w-full px-4 py-2 text-left text-sm text-foreground hover:bg-accent"
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
              className="flex w-full items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-medium text-foreground hover:bg-secondary md:w-40 md:rounded-full"
            >
              <MapPin className="h-4 w-4 shrink-0 text-muted-foreground" />
              <span className="truncate">{location}</span>
              <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
            </button>
            {showLocDrop && (
              <div className="absolute left-0 top-full z-20 mt-1 w-full rounded-lg border border-border bg-background py-1 shadow-lg">
                {locations.map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLocation(l); setShowLocDrop(false); }}
                    className="block w-full px-4 py-2 text-left text-sm text-foreground hover:bg-accent"
                  >
                    {l}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="hidden h-6 w-px bg-border md:block" />

          {/* Search input */}
          <div className="flex flex-1 items-center gap-2 px-2">
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for anything..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none"
            />
          </div>

          <Button size="default" className="rounded-lg md:rounded-full md:px-6">
            Search
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
