
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Suits", path: "/product" },
    { name: "Sarees", path: "/product" },
    { name: "Loungewear", path: "/product" },
    { name: "Occasionwear", path: "/product" },
    { name: "Our Story", path: "/how-to-buy" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-rose-100 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-2xl md:text-3xl font-serif font-bold text-gray-900 hover:text-rose-600 transition-colors">
            Saina Clothings
          </Link>
          
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path} 
                className={cn(
                  "text-gray-700 hover:text-rose-600 transition-colors font-medium tracking-wide relative",
                  location.pathname === item.path && "text-rose-600",
                  "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-rose-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Link 
            to="/checkout" 
            className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-rose-700 hover:to-pink-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Shop Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
