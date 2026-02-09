import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-secondary">
    <div className="container py-10">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-primary" />
            <span className="text-lg font-extrabold text-foreground">
              Lag<span className="text-primary">kit</span>
            </span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">
            The marketplace for everything. Buy and sell with confidence.
          </p>
        </div>
        {[
          { title: "Marketplace", links: ["Luxury", "Fashion", "Electronics", "Property", "Cars"] },
          { title: "Company", links: ["About Us", "Careers", "Press", "Blog"] },
          { title: "Support", links: ["Help Center", "Safety", "Terms", "Privacy"] },
        ].map((section) => (
          <div key={section.title}>
            <h4 className="text-sm font-semibold text-foreground">{section.title}</h4>
            <ul className="mt-3 space-y-2">
              {section.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © 2026 Lagkit. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
