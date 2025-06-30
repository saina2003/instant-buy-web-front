
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            TechPro
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={cn(
                "text-gray-600 hover:text-gray-900 transition-colors",
                location.pathname === "/" && "text-gray-900 font-medium"
              )}
            >
              Home
            </Link>
            <Link 
              to="/product" 
              className={cn(
                "text-gray-600 hover:text-gray-900 transition-colors",
                location.pathname === "/product" && "text-gray-900 font-medium"
              )}
            >
              Product
            </Link>
            <Link 
              to="/how-to-buy" 
              className={cn(
                "text-gray-600 hover:text-gray-900 transition-colors",
                location.pathname === "/how-to-buy" && "text-gray-900 font-medium"
              )}
            >
              How to Buy
            </Link>
          </div>

          <Link 
            to="/checkout" 
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Buy Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
