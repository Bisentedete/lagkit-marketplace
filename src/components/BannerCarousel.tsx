import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  {
    id: 1,
    title: "Exclusive Private Sale",
    subtitle: "Up to 70% off on Premium Timepieces",
    gradient: "from-primary/90 to-primary/60",
  },
  {
    id: 2,
    title: "Consign Your Luxury Items",
    subtitle: "White-glove service for discerning sellers",
    gradient: "from-emerald-900 to-emerald-700",
  },
  {
    id: 3,
    title: "New Season Collections",
    subtitle: "Discover the latest from top maisons",
    gradient: "from-violet-900 to-purple-700",
  },
  {
    id: 4,
    title: "Verified Authenticity",
    subtitle: "Every luxury item authenticated by experts",
    gradient: "from-blue-900 to-cyan-800",
  },
];

const BannerCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % banners.length);
  }, []);

  const prev = () => {
    setCurrent((c) => (c - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="container py-8">
      <div className="relative overflow-hidden rounded-2xl border border-border">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {banners.map((banner) => (
            <div
              key={banner.id}
              className={`flex min-w-full flex-col items-center justify-center bg-gradient-to-r ${banner.gradient} px-8 py-14 text-center md:py-20`}
            >
              <h3 className="font-display text-2xl font-bold text-foreground md:text-4xl">
                {banner.title}
              </h3>
              <p className="mt-3 text-muted-foreground md:text-lg">{banner.subtitle}</p>
            </div>
          ))}
        </div>

        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-border bg-card/80 p-2 text-foreground shadow-md backdrop-blur transition hover:bg-card"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-border bg-card/80 p-2 text-foreground shadow-md backdrop-blur transition hover:bg-card"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-6 bg-primary" : "w-2 bg-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerCarousel;
