
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ProductDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    "/lovable-uploads/7b1c026d-4bef-4d92-9d1b-4433e23f9337.png",
    "/lovable-uploads/fc06d8bc-5250-4e10-bca3-49d966893ce7.png",
    "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ];

  const sizes = ["XS", "S", "M", "L", "XL"];
  const [selectedSize, setSelectedSize] = useState("M");

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50/30 to-white">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Image Gallery */}
            <div className="space-y-6">
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src={images[currentImage]} 
                  alt="Ethereal Flamingo Embroidered Organza Suit"
                  className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="flex space-x-4">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-24 h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      currentImage === index 
                        ? 'border-rose-600 shadow-lg scale-105' 
                        : 'border-rose-200 hover:border-rose-400'
                    }`}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-sm text-rose-600 font-medium tracking-wide uppercase">
                  Everyday Elegance Collection
                </div>
                <h1 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                  Ethereal Flamingo Embroidered Organza Suit
                </h1>
                <div className="flex items-center space-x-4">
                  <p className="text-3xl text-rose-600 font-semibold">₹12,500</p>
                  <p className="text-xl text-gray-500 line-through">₹15,000</p>
                  <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-medium">
                    17% OFF
                  </span>
                </div>
              </div>

              {/* Size Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Select Size</h3>
                <div className="flex space-x-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-lg border-2 transition-all duration-300 font-medium ${
                        selectedSize === size
                          ? 'border-rose-600 bg-rose-600 text-white shadow-lg'
                          : 'border-rose-200 text-gray-700 hover:border-rose-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-serif text-gray-900">Craftsmanship Details</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  An exquisite embodiment of ethereal beauty, this organza suit features delicate flamingo 
                  motifs rendered in silk thread embroidery. The translucent fabric creates a dreamy silhouette, 
                  while the intricate handwork showcases the artisan's mastery of traditional techniques.
                </p>
                
                <p className="text-gray-600 leading-relaxed text-lg">
                  Perfect for intimate gatherings or sophisticated brunches, this piece transitions effortlessly 
                  from day to evening wear, making it an essential addition to your curated wardrobe.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 p-6 bg-rose-50/50 rounded-2xl">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900">Fabric & Care</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><span className="font-medium">Fabric:</span> Pure Organza</p>
                    <p><span className="font-medium">Embroidery:</span> Hand-embroidered Silk Thread</p>
                    <p><span className="font-medium">Care:</span> Dry Clean Only</p>
                    <p><span className="font-medium">Origin:</span> Handcrafted in India</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900">Artisan Details</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><span className="font-medium">Technique:</span> Traditional Embroidery</p>
                    <p><span className="font-medium">Work Type:</span> Hand-embellished</p>
                    <p><span className="font-medium">Time:</span> 120+ Hours of Craftsmanship</p>
                    <p><span className="font-medium">Artisan:</span> Master Craftspeople</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-rose-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="text-gray-600">Delicate flamingo motifs in vibrant silk thread embroidery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-rose-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="text-gray-600">Ethereal organza fabric with flowing silhouette</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-rose-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="text-gray-600">Versatile styling for multiple occasions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-rose-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="text-gray-600">Sustainable fashion supporting traditional artisans</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-rose-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="text-gray-600">Contemporary fit with traditional craftsmanship</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link to="/checkout" className="flex-1">
                  <Button size="lg" className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Add to Cart - ₹12,500
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-rose-600 text-rose-600 hover:bg-rose-50 px-8">
                  Add to Wishlist
                </Button>
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
