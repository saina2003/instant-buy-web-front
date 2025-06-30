
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CreditCard, ShoppingCart, Mail } from "lucide-react";

const HowToBuy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">How to Buy</h1>
              <p className="text-xl text-gray-600">
                Follow these simple steps to get your TechPro Wireless headphones
              </p>
            </div>

            {/* Purchase Steps */}
            <div className="space-y-8 mb-16">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Choose Your Product</h3>
                  <p className="text-gray-600">
                    Browse our product details page to learn more about the TechPro Wireless features and specifications.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Click "Buy Now"</h3>
                  <p className="text-gray-600">
                    When you're ready to purchase, click the "Buy Now" button to proceed to our secure checkout page.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Fill Your Information</h3>
                  <p className="text-gray-600">
                    Provide your contact information and shipping address in our simple checkout form.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Make Payment</h3>
                  <p className="text-gray-600">
                    Complete your purchase using our secure payment system with multiple payment options.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Receive Confirmation</h3>
                  <p className="text-gray-600">
                    You'll receive an order confirmation email with tracking information once your order is processed.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Payment Methods</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <CreditCard className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold">Credit & Debit Cards</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    We accept all major credit and debit cards including Visa, Mastercard, and American Express.
                  </p>
                  <div className="flex space-x-2">
                    <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                      VISA
                    </div>
                    <div className="w-12 h-8 bg-red-600 rounded flex items-center justify-center text-white text-xs font-bold">
                      MC
                    </div>
                    <div className="w-12 h-8 bg-green-600 rounded flex items-center justify-center text-white text-xs font-bold">
                      AMEX
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <ShoppingCart className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold">PayPal</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Use your PayPal account for quick and secure checkout with buyer protection.
                  </p>
                  <div className="w-16 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">
                    PayPal
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Information */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Shipping Information</h2>
              <div className="bg-blue-50 p-8 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Delivery Options</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Standard Shipping (5-7 days)</span>
                        <span className="font-semibold">Free</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Express Shipping (2-3 days)</span>
                        <span className="font-semibold">$15</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Next Day Delivery</span>
                        <span className="font-semibold">$25</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Coverage Areas</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Worldwide shipping available</li>
                      <li>• Free shipping on all orders</li>
                      <li>• Tracking provided for all shipments</li>
                      <li>• Signature required for delivery</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Information */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Need Help?</h2>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
                <p className="text-gray-600 mb-6">
                  Our friendly customer support team is here to help you with any questions about your purchase.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold">Email: support@techpro.com</p>
                  <p className="text-gray-600">Response time: Within 24 hours</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/checkout">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg">
                  Start Your Purchase
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HowToBuy;
