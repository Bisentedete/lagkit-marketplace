import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Search, Car, Home, Smartphone, Shirt, Watch, Gem, Gamepad2, BookOpen, Laptop, Tv, ShoppingBag } from "lucide-react";

const allCategories = [
  { name: "Property", icon: Home },
  { name: "Cars", icon: Car },
  { name: "Mobile Phones & Gadgets", icon: Smartphone },
  { name: "Laptops & Notebooks", icon: Laptop },
  { name: "TV & Home Appliances", icon: Tv },
  { name: "Women's Fashion", icon: Shirt },
  { name: "Men's Fashion", icon: Watch },
  { name: "Luxury", icon: Gem },
  { name: "Toys & Games", icon: Gamepad2 },
  { name: "Books & Magazines", icon: BookOpen },
  { name: "Collectibles", icon: ShoppingBag },
];

interface AllCategoriesPanelProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AllCategoriesPanel = ({ open, onOpenChange }: AllCategoriesPanelProps) => {
  const [search, setSearch] = useState("");

  const filtered = allCategories.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-80 sm:w-96 p-0">
        <SheetHeader className="px-6 pt-6 pb-4 border-b border-border">
          <SheetTitle className="text-lg font-bold text-foreground">All Categories</SheetTitle>
          <div className="relative mt-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search categories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
        </SheetHeader>
        <div className="flex flex-col py-2 overflow-y-auto max-h-[calc(100vh-140px)]">
          {filtered.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.name}
                className="flex items-center gap-3 px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors text-left"
                onClick={() => onOpenChange(false)}
              >
                <Icon className="h-5 w-5 text-muted-foreground" />
                {cat.name}
              </button>
            );
          })}
          {filtered.length === 0 && (
            <p className="px-6 py-4 text-sm text-muted-foreground">No categories found.</p>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AllCategoriesPanel;
