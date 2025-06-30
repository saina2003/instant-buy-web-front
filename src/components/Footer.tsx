
import { Mail, ShoppingCart, CreditCard } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold">Saina Clothings</h3>
            <p className="text-gray-300 leading-relaxed">
              Celebrating the artistry of traditional craftsmanship through contemporary designs. 
              Each piece tells a story of heritage, elegance, and timeless beauty.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">Connect with us</p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-rose-600 rounded-full"></div>
                <div className="w-8 h-8 bg-rose-600 rounded-full"></div>
                <div className="w-8 h-8 bg-rose-600 rounded-full"></div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Collections</h4>
            <div className="space-y-3">
              <a href="/product" className="block text-gray-300 hover:text-white transition-colors">Everyday Wear</a>
              <a href="/product" className="block text-gray-300 hover:text-white transition-colors">Luxurious Sarees</a>
              <a href="/product" className="block text-gray-300 hover:text-white transition-colors">Festive Edit</a>
              <a href="/product" className="block text-gray-300 hover:text-white transition-colors">Occasionwear</a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Customer Care</h4>
            <div className="space-y-3">
              <a href="/how-to-buy" className="block text-gray-300 hover:text-white transition-colors">Size Guide</a>
              <a href="/how-to-buy" className="block text-gray-300 hover:text-white transition-colors">Care Instructions</a>
              <a href="/how-to-buy" className="block text-gray-300 hover:text-white transition-colors">Shipping Policy</a>
              <a href="/how-to-buy" className="block text-gray-300 hover:text-white transition-colors">Returns & Exchange</a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contact & Store</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-1 text-rose-400" />
                <div>
                  <p className="text-gray-300">support@sainaclothings.com</p>
                  <p className="text-sm text-gray-400">We respond within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <ShoppingCart className="w-5 h-5 mt-1 text-rose-400" />
                <div>
                  <p className="text-gray-300">Free shipping above ₹2,000</p>
                  <p className="text-sm text-gray-400">Express delivery available</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CreditCard className="w-5 h-5 mt-1 text-rose-400" />
                <div>
                  <p className="text-gray-300">Secure payments</p>
                  <p className="text-sm text-gray-400">Multiple payment options</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              &copy; 2024 Saina Clothings. Crafted with love for the modern woman.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/how-to-buy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/how-to-buy" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="/how-to-buy" className="text-gray-400 hover:text-white transition-colors">About Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
