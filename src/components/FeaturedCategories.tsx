import { Link } from "react-router-dom";
import catProperty from "@/assets/cat-property.jpg";
import catAutos from "@/assets/cat-autos.jpg";
import catPhones from "@/assets/cat-phones.jpg";
import catWomens from "@/assets/cat-womens.jpg";
import catMens from "@/assets/cat-mens.jpg";

const categories = [
  { name: "Property", image: catProperty, slug: "property" },
  { name: "Autos", image: catAutos, slug: "cars" },
  { name: "Mobile Phones & Gadgets", image: catPhones, slug: "electronics" },
  { name: "Women's Fashion", image: catWomens, slug: "fashion" },
  { name: "Men's Fashion", image: catMens, slug: "fashion" },
];

const FeaturedCategories = () => {
  return (
    <section className="container py-10">
      <h2 className="mb-6 text-2xl font-bold text-foreground">Browse Categories</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={`/category/${cat.slug}`}
            className="group relative overflow-hidden rounded-xl card-shadow transition-all duration-300 hover:card-shadow-hover hover:-translate-y-1"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <h3 className="text-sm font-semibold text-primary-foreground md:text-base">
                {cat.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
