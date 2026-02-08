import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import AuthModal from "@/components/AuthModal";
import AllCategoriesPanel from "@/components/AllCategoriesPanel";

type AuthMode = "login" | "register";

const navItems = [
  { label: "Fashion", children: ["Women's Fashion", "Men's Fashion"] },
  { label: "Electronics", children: ["Mobile Phones & Gadgets", "Laptops & Notebooks", "TV & Home Appliances"] },
  { label: "Collectibles", children: ["Toys & Games", "Books & Magazines"] },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode>("login");
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const openAuth = (mode: AuthMode) => {
    setAuthMode(mode);
    setAuthOpen(true);
    setMobileOpen(false);
  };

  const switchAuthMode = () => setAuthMode((m) => (m === "login" ? "register" : "login"));

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary text-primary-foreground font-extrabold text-lg">
              L
            </div>
            <span className="text-xl font-extrabold tracking-tight text-foreground">
              Lag<span className="text-primary">kit</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </button>
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-0 top-full pt-1 transition-all duration-150 z-50">
                  <div className="min-w-[200px] rounded-xl border border-border bg-card p-1 shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child}
                        to={`/?category=${encodeURIComponent(child.toLowerCase())}`}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {child}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={() => setCategoriesOpen(true)}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              All Categories
            </button>
          </div>

          <div className="hidden items-center gap-2 lg:flex shrink-0">
            <Button variant="ghost" size="sm" onClick={() => openAuth("register")} className="text-muted-foreground hover:text-foreground">
              Register
            </Button>
            <Button variant="ghost" size="sm" onClick={() => openAuth("login")} className="text-muted-foreground hover:text-foreground">
              Login
            </Button>
            <Button size="sm" className="font-semibold">Sell</Button>
          </div>

          <button className="lg:hidden p-2 text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-border bg-card px-4 pb-4 lg:hidden">
            <div className="flex flex-col gap-1 py-3">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    {item.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="ml-4 flex flex-col gap-1">
                      {item.children.map((child) => (
                        <Link key={child} to={`/?category=${encodeURIComponent(child.toLowerCase())}`}
                          className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                          onClick={() => setMobileOpen(false)}>
                          {child}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button onClick={() => { setCategoriesOpen(true); setMobileOpen(false); }}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground text-left">
                All Categories
              </button>
            </div>
            <div className="flex gap-2 pt-2 border-t border-border">
              <Button variant="ghost" size="sm" className="flex-1" onClick={() => openAuth("register")}>Register</Button>
              <Button variant="ghost" size="sm" className="flex-1" onClick={() => openAuth("login")}>Login</Button>
              <Button size="sm" className="flex-1">Sell</Button>
            </div>
          </div>
        )}
      </nav>
      <AuthModal open={authOpen} onOpenChange={setAuthOpen} mode={authMode} onSwitchMode={switchAuthMode} />
      <AllCategoriesPanel open={categoriesOpen} onOpenChange={setCategoriesOpen} />
    </>
  );
};

export default Navbar;
