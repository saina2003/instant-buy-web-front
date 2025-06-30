
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ProductDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative bg-gray-50 rounded-2xl overflow-hidden">
                <img 
                  src={images[currentImage]} 
                  alt="Saina Premium Dress Collection"
                  className="w-full h-96 object-cover"
                />
              </div>
              
              <div className="flex space-x-4">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      currentImage === index ? 'border-rose-600' : 'border-gray-200'
                    }`}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Elegant Summer Dress</h1>
                <p className="text-2xl text-rose-600 font-semibold">$89</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">Product Description</h2>
                <p className="text-gray-600 leading-relaxed">
                  This elegant summer dress embodies the perfect fusion of contemporary design and 
                  timeless sophistication. Crafted from premium, breathable fabric, it features a 
                  flattering silhouette that gracefully moves with you throughout your day.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  Whether you're attending a business meeting, enjoying a casual brunch, or 
                  stepping out for an evening event, this versatile piece effortlessly adapts 
                  to any occasion. The thoughtful design details and superior craftsmanship 
                  ensure both comfort and style.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-rose-600 rounded-full mr-3"></span>
                    Premium breathable fabric blend
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-rose-600 rounded-full mr-3"></span>
                    Flattering A-line silhouette
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-rose-600 rounded-full mr-3"></span>
                    Comfortable all-day wear
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-rose-600 rounded-full mr-3"></span>
                    Versatile for multiple occasions
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-rose-600 rounded-full mr-3"></span>
                    Easy care and maintenance
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-rose-600 rounded-full mr-3"></span>
                    Available in multiple sizes
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Size & Care</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Available Sizes:</span> XS - XL
                  </div>
                  <div>
                    <span className="font-medium">Material:</span> Cotton Blend
                  </div>
                  <div>
                    <span className="font-medium">Care:</span> Machine Washable
                  </div>
                  <div>
                    <span className="font-medium">Fit:</span> True to Size
                  </div>
                  <div>
                    <span className="font-medium">Origin:</span> Ethically Made
                  </div>
                  <div>
                    <span className="font-medium">Style:</span> Contemporary
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/checkout" className="flex-1">
                  <Button size="lg" className="w-full bg-rose-600 hover:bg-rose-700">
                    Buy Now - $89
                  </Button>
                </Link>
                <Link to="/how-to-buy" className="flex-1">
                  <Button variant="outline" size="lg" className="w-full">
                    How to Buy
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;
