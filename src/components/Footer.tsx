
import { Mail, ShoppingCart, CreditCard } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TechPro</h3>
            <p className="text-gray-300 mb-4">
              Premium wireless headphones designed for professionals who demand the best in audio quality and comfort.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/product" className="block text-gray-300 hover:text-white transition-colors">Product Details</a>
              <a href="/how-to-buy" className="block text-gray-300 hover:text-white transition-colors">How to Buy</a>
              <a href="/checkout" className="block text-gray-300 hover:text-white transition-colors">Checkout</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-gray-300">support@techpro.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShoppingCart className="w-4 h-4" />
                <span className="text-gray-300">Free shipping worldwide</span>
              </div>
              <div className="flex items-center space-x-2">
                <CreditCard className="w-4 h-4" />
                <span className="text-gray-300">Secure payments</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 TechPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
