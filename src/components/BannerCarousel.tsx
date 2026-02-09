import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  {
    id: 1,
    title: "Flash Sale Weekend",
    subtitle: "Up to 70% off on Electronics",
    gradient: "from-primary to-orange-400",
  },
  {
    id: 2,
    title: "Sell Your Pre-loved Items",
    subtitle: "List for free and reach thousands of buyers",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    id: 3,
    title: "New Arrivals in Fashion",
    subtitle: "Discover trending styles this season",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    id: 4,
    title: "Verified Sellers Program",
    subtitle: "Shop with confidence from trusted sellers",
    gradient: "from-blue-500 to-cyan-400",
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
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {banners.map((banner) => (
            <div
              key={banner.id}
              className={`flex min-w-full flex-col items-center justify-center bg-gradient-to-r ${banner.gradient} px-8 py-12 text-center md:py-16`}
            >
              <h3 className="text-2xl font-bold text-primary-foreground md:text-3xl">
                {banner.title}
              </h3>
              <p className="mt-2 text-primary-foreground/80">{banner.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground shadow-md backdrop-blur transition hover:bg-background"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground shadow-md backdrop-blur transition hover:bg-background"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-6 bg-primary-foreground" : "w-2 bg-primary-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerCarousel;
