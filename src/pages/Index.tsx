
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  const heroSlides = [
    {
      image: "/lovable-uploads/7b1c026d-4bef-4d92-9d1b-4433e23f9337.png",
      title: "Everyday Elegance",
      subtitle: "Exquisite hand-embroidered pieces for the modern woman",
      cta: "Explore Collection"
    },
    {
      image: "/lovable-uploads/75f1f789-0f95-411f-a79c-197a40e0f4ac.png",
      title: "Tyohaar Collection",
      subtitle: "Celebrate traditions with our luxurious festive edit",
      cta: "Shop Festivewear"
    },
    {
      image: "/lovable-uploads/fc06d8bc-5250-4e10-bca3-49d966893ce7.png",
      title: "Artisanal Heritage",
      subtitle: "Timeless craftsmanship meets contemporary design",
      cta: "Discover Stories"
    }
  ];

  const collections = [
    {
      title: "Everyday Wear",
      description: "Effortless elegance for daily sophistication",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/product"
    },
    {
      title: "Luxurious Sarees",
      description: "Heritage weaves with contemporary flair",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/product"
    },
    {
      title: "Festive Edit",
      description: "Celebrate in style with our curated pieces",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/product"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50/30 to-white">
      <Header />
      
      {/* Hero Carousel Section */}
      <section className="pt-20">
        <Carousel className="w-full">
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[70vh] md:h-[80vh] bg-gradient-to-r from-rose-50/50 to-pink-50/30">
                  <div className="container mx-auto px-4 h-full flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                      <div className="space-y-8 text-center lg:text-left">
                        <div className="space-y-6">
                          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-gray-900 leading-tight">
                            {slide.title}
                          </h1>
                          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                            {slide.subtitle}
                          </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                          <Link to="/product">
                            <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 text-lg font-medium tracking-wide">
                              {slide.cta}
                            </Button>
                          </Link>
                        </div>
                      </div>
                      
                      <div className="relative order-first lg:order-last">
                        <div className="relative bg-white rounded-3xl shadow-2xl p-4 transform hover:scale-105 transition-all duration-500">
                          <img 
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-96 md:h-[500px] object-cover rounded-2xl"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-white/90 hover:bg-white border-none shadow-lg" />
          <CarouselNext className="right-4 bg-white/90 hover:bg-white border-none shadow-lg" />
        </Carousel>
      </section>

      {/* Collections Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Our Collections</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our curated selection of handcrafted pieces, each telling a story of artisanal excellence and timeless beauty.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <div key={index} className="group cursor-pointer">
                <Link to={collection.link}>
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                    <img 
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h3 className="text-2xl font-serif mb-2">{collection.title}</h3>
                      <p className="text-rose-100 mb-4">{collection.description}</p>
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 transition-colors">
                        Explore
                      </Button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage & Craftsmanship Section */}
      <section className="py-20 bg-gradient-to-b from-rose-50/30 to-pink-50/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                  Artisanal Heritage Meets Modern Elegance
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Each piece in our collection is a testament to centuries-old craftsmanship traditions. 
                  From hand-woven Chanderi to intricate Zardozi work, we preserve the artistry of skilled 
                  artisans while creating contemporary silhouettes for the modern woman.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our commitment to sustainable fashion and ethical practices ensures that every purchase 
                  supports traditional craftspeople and their communities.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/how-to-buy">
                  <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4">
                    Our Story
                  </Button>
                </Link>
                <Link to="/product">
                  <Button variant="outline" size="lg" className="border-rose-600 text-rose-600 hover:bg-rose-50 px-8 py-4">
                    View Craftsmanship
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:rotate-1 transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Artisanal Craftsmanship"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Cherished by Women Everywhere</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-rose-50/50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 text-lg">
                  ★★★★★
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "The intricate handwork and quality of fabric is exceptional. Each piece feels like wearing art. 
                Saina Clothings has become my go-to for all special occasions."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-rose-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-gray-900">Priya Sharma</p>
                  <p className="text-sm text-gray-600">Fashion Enthusiast</p>
                </div>
              </div>
            </div>
            
            <div className="bg-rose-50/50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 text-lg">
                  ★★★★★
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "Perfect blend of traditional craftsmanship and contemporary design. The fit is impeccable 
                and the attention to detail is remarkable."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-rose-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-gray-900">Ananya Gupta</p>
                  <p className="text-sm text-gray-600">Interior Designer</p>
                </div>
              </div>
            </div>
            
            <div className="bg-rose-50/50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 text-lg">
                  ★★★★★
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "Sustainable luxury at its finest. Love how each purchase supports traditional artisans. 
                The quality and craftsmanship are unmatched."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-rose-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-gray-900">Kavya Mehta</p>
                  <p className="text-sm text-gray-600">Sustainable Fashion Advocate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Experience Timeless Elegance</h2>
          <p className="text-xl mb-8 text-rose-100 max-w-2xl mx-auto leading-relaxed">
            Join our community of discerning women who appreciate the finest in handcrafted fashion. 
            Discover pieces that celebrate your unique style and heritage.
          </p>
          <Link to="/checkout">
            <Button size="lg" className="bg-white text-rose-600 hover:bg-rose-50 px-8 py-4 text-lg font-semibold">
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
