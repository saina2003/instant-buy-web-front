
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface OrderData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  orderNumber: string;
  total: number;
  orderDate: string;
}

const Confirmation = () => {
  const [orderData, setOrderData] = useState<OrderData | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem('orderData');
    if (storedData) {
      setOrderData(JSON.parse(storedData));
    }
  }, []);

  if (!orderData) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Not Found</h1>
            <p className="text-gray-600 mb-8">
              We couldn't find your order information. Please try placing your order again.
            </p>
            <Link to="/checkout">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Return to Checkout
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Success Message */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
              <p className="text-xl text-gray-600">
                Thank you for your purchase. Your order has been successfully placed.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Order Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Order Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Order Number:</span>
                    <span className="font-semibold">{orderData.orderNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Order Date:</span>
                    <span className="font-semibold">
                      {new Date(orderData.orderDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total:</span>
                    <span className="font-semibold text-lg">${orderData.total}</span>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h3 className="font-semibold mb-2">Product:</h3>
                    <div className="flex items-center space-x-4">
                      <img 
                        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                        alt="TechPro Wireless"
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <p className="font-semibold">TechPro Wireless</p>
                        <p className="text-sm text-gray-600">Premium Wireless Headphones</p>
                        <p className="text-sm">Quantity: 1</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Shipping Address:</h3>
                    <div className="text-gray-600">
                      <p>{orderData.firstName} {orderData.lastName}</p>
                      <p>{orderData.address}</p>
                      <p>{orderData.city}, {orderData.state} {orderData.zipCode}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Contact Information:</h3>
                    <p className="text-gray-600">{orderData.email}</p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Shipping Details:</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Free standard shipping (5-7 business days)</li>
                      <li>• Tracking information will be sent to your email</li>
                      <li>• Signature required upon delivery</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Next Steps */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>What's Next?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl">📧</span>
                    </div>
                    <h3 className="font-semibold mb-2">Confirmation Email</h3>
                    <p className="text-sm text-gray-600">
                      You'll receive an order confirmation email within the next few minutes.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl">📦</span>
                    </div>
                    <h3 className="font-semibold mb-2">Processing</h3>
                    <p className="text-sm text-gray-600">
                      Your order will be processed and shipped within 1-2 business days.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl">🚚</span>
                    </div>
                    <h3 className="font-semibold mb-2">Tracking</h3>
                    <p className="text-sm text-gray-600">
                      You'll receive tracking information once your order ships.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support */}
            <div className="mt-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about your order, please don't hesitate to contact us.
              </p>
              <div className="space-y-4">
                <p className="text-lg font-semibold">support@techpro.com</p>
                <p className="text-gray-600">We typically respond within 24 hours</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/">
                    <Button variant="outline" size="lg">
                      Return to Homepage
                    </Button>
                  </Link>
                  <Link to="/product">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      View Product Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Confirmation;
