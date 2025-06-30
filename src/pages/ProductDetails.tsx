
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ProductDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
                  alt="TechPro Wireless Headphones"
                  className="w-full h-96 object-cover"
                />
              </div>
              
              <div className="flex space-x-4">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      currentImage === index ? 'border-blue-600' : 'border-gray-200'
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
                <h1 className="text-4xl font-bold text-gray-900 mb-2">TechPro Wireless</h1>
                <p className="text-2xl text-blue-600 font-semibold">$299</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">Product Description</h2>
                <p className="text-gray-600 leading-relaxed">
                  The TechPro Wireless headphones represent the pinnacle of audio engineering, 
                  combining premium materials with cutting-edge technology. Featuring custom-tuned 
                  40mm drivers, advanced noise cancellation, and a lightweight yet durable construction, 
                  these headphones deliver an unparalleled listening experience.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  Whether you're a music producer, content creator, or simply someone who appreciates 
                  exceptional audio quality, the TechPro Wireless headphones will exceed your expectations. 
                  The memory foam ear cushions and adjustable headband ensure comfort during extended 
                  listening sessions.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Professional-grade 40mm audio drivers
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Active noise cancellation technology
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    30-hour battery life with quick charge
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Bluetooth 5.2 with multipoint connectivity
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Premium memory foam padding
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Foldable design with carrying case
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Specifications</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Driver Size:</span> 40mm
                  </div>
                  <div>
                    <span className="font-medium">Frequency Response:</span> 20Hz-40kHz
                  </div>
                  <div>
                    <span className="font-medium">Impedance:</span> 32 Ohms
                  </div>
                  <div>
                    <span className="font-medium">Weight:</span> 280g
                  </div>
                  <div>
                    <span className="font-medium">Connectivity:</span> Bluetooth 5.2
                  </div>
                  <div>
                    <span className="font-medium">Battery:</span> 30 hours
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/checkout" className="flex-1">
                  <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                    Buy Now - $299
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
