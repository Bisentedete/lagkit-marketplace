import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["Luxury", "Fashion", "Electronics", "Property", "Cars", "Collectibles"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <ShoppingBag className="h-7 w-7 text-primary" />
          <span className="text-xl font-extrabold tracking-tight text-foreground">
            Lag<span className="text-primary">kit</span>
          </span>
        </Link>

        {/* Desktop categories */}
        <div className="hidden items-center gap-1 lg:flex">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/?category=${cat.toLowerCase()}`}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {cat}
            </Link>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="ghost" size="sm">
            Login
          </Button>
          <Button variant="outline" size="sm">
            Register
          </Button>
          <Button size="sm">Sell</Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 pb-4 lg:hidden">
          <div className="flex flex-col gap-1 py-3">
            {categories.map((cat) => (
              <Link
                key={cat}
                to={`/?category=${cat.toLowerCase()}`}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {cat}
              </Link>
            ))}
          </div>
          <div className="flex gap-2 pt-2 border-t border-border">
            <Button variant="ghost" size="sm" className="flex-1">Login</Button>
            <Button variant="outline" size="sm" className="flex-1">Register</Button>
            <Button size="sm" className="flex-1">Sell</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
