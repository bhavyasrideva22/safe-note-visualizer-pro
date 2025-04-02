
import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import SafeCalculator from "../components/calculator/SafeCalculator";
import { CalendarArrowUp, ArrowDown, FileText, MessageSquare, IndianRupee, Share2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-white py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Y Combinator SAFE Note Calculator
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-100">
                  Calculate the impact of SAFE notes on your startup's cap table, valuation, and equity dilution with our powerful and easy-to-use calculator.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="#calculator" 
                    className="cta-button flex items-center"
                  >
                    <CalendarArrowUp className="mr-2 h-5 w-5" />
                    Start Calculating
                  </a>
                  <a 
                    href="#about" 
                    className="bg-white/10 text-white hover:bg-white/20 px-4 py-2 rounded-md font-medium transition-colors duration-300 flex items-center"
                  >
                    <ArrowDown className="mr-2 h-5 w-5" />
                    Learn More
                  </a>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="ml-auto text-sm">SAFE Note Calculator</div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/10 p-3 rounded">
                      <div className="flex justify-between">
                        <span>Investment:</span>
                        <span><IndianRupee className="inline h-3 w-3" /> 50,00,000</span>
                      </div>
                    </div>
                    <div className="bg-white/10 p-3 rounded">
                      <div className="flex justify-between">
                        <span>Valuation Cap:</span>
                        <span><IndianRupee className="inline h-3 w-3" /> 4,00,00,000</span>
                      </div>
                    </div>
                    <div className="bg-white/10 p-3 rounded">
                      <div className="flex justify-between">
                        <span>Discount:</span>
                        <span>20%</span>
                      </div>
                    </div>
                    <div className="h-1 bg-white/20 rounded"></div>
                    <div className="bg-accent/20 p-3 rounded">
                      <div className="flex justify-between font-medium">
                        <span>Ownership:</span>
                        <span>11.24%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 px-4 bg-cream">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Why Use Our SAFE Note Calculator?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Make informed decisions about your startup funding with accurate calculations and visual insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="calculator-card text-center p-8">
                <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                  <IndianRupee className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Accurate Valuation
                </h3>
                <p className="text-gray-600">
                  Get precise calculations for your SAFE note conversion, ownership dilution, and effective valuation.
                </p>
              </div>
              
              <div className="calculator-card text-center p-8">
                <div className="bg-secondary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                  <FileText className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Professional Reports
                </h3>
                <p className="text-gray-600">
                  Download beautiful PDF reports or email the results directly to your team or investors.
                </p>
              </div>
              
              <div className="calculator-card text-center p-8">
                <div className="bg-accent/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                  <Share2 className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Visual Insights
                </h3>
                <p className="text-gray-600">
                  Understand your cap table through interactive charts that visualize ownership and valuation.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Calculator Section */}
        <section id="calculator" className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                SAFE Note Calculator
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Input your SAFE note terms below to calculate the impact on your startup's equity and valuation.
              </p>
            </div>
            
            <SafeCalculator />
          </div>
        </section>
        
        {/* About SAFE Notes Section */}
        <section id="about" className="py-16 px-4 bg-cream">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Understanding SAFE Notes
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Learn about Y Combinator's Simple Agreement for Future Equity and how it affects your startup.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="calculator-card">
                  <h3 className="text-2xl font-semibold text-primary mb-6">
                    What is a SAFE Note?
                  </h3>
                  
                  <div className="space-y-4 text-gray-700">
                    <p>
                      A Simple Agreement for Future Equity (SAFE) is a financing instrument primarily used by angel investors and early-stage investors making investments in startups. Originally created by Y Combinator in 2013, SAFE notes have become a standard funding mechanism in the Indian startup ecosystem.
                    </p>
                    
                    <p>
                      Unlike convertible notes, SAFE notes are not debt instruments—they're investment contracts that give investors the right to obtain equity in a future priced round. This provides flexibility for both founders and investors in the early stages of a company.
                    </p>
                    
                    <h4 className="text-xl font-semibold text-primary mt-6 mb-3">
                      Key Components of SAFE Notes
                    </h4>
                    
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <span className="font-medium">Valuation Cap:</span> Sets the maximum company valuation at which the SAFE will convert to equity, protecting investors from excessive dilution.
                      </li>
                      <li>
                        <span className="font-medium">Discount Rate:</span> Provides the investor with a reduction on the price per share in the subsequent financing round, typically ranging from 10-30%.
                      </li>
                      <li>
                        <span className="font-medium">Pro-Rata Rights:</span> Gives investors the option to participate in future rounds to maintain their ownership percentage.
                      </li>
                      <li>
                        <span className="font-medium">MFN (Most Favored Nation):</span> Ensures investors receive terms at least as favorable as future investors prior to the equity round.
                      </li>
                    </ul>
                    
                    <h4 className="text-xl font-semibold text-primary mt-6 mb-3">
                      Benefits for Indian Startups
                    </h4>
                    
                    <p>
                      For Indian startups, SAFE notes offer several advantages:
                    </p>
                    
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Simplifies early-stage fundraising with fewer negotiations and legal costs</li>
                      <li>Defers valuation discussions until the company has more operating history</li>
                      <li>No interest accrual or maturity dates, unlike convertible debt</li>
                      <li>Provides flexibility during bridge rounds between major funding events</li>
                      <li>Aligns with the fast-paced nature of the Indian startup ecosystem</li>
                    </ul>
                    
                    <p>
                      As the Indian startup ecosystem continues to mature, understanding the implications of SAFE notes on your cap table becomes increasingly important. Our calculator helps founders and investors analyze these impacts with precision.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="calculator-card mb-8">
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    When to Use SAFE Notes
                  </h3>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                        <CalendarArrowUp className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium block text-primary">Pre-seed & Seed Rounds</span>
                        <span className="text-sm text-gray-600">For very early-stage companies without enough history for proper valuation.</span>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-secondary/10 p-2 rounded-full mr-3 mt-1">
                        <MessageSquare className="h-4 w-4 text-secondary" />
                      </div>
                      <div>
                        <span className="font-medium block text-primary">Bridge Financing</span>
                        <span className="text-sm text-gray-600">When seeking capital between major funding rounds or before a significant milestone.</span>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-accent/10 p-2 rounded-full mr-3 mt-1">
                        <FileText className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <span className="font-medium block text-primary">Quick Capital Needs</span>
                        <span className="text-sm text-gray-600">When the startup needs to close financing quickly with minimal negotiation.</span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="calculator-card">
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Have Questions?
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    Our team of financial experts can help you understand the implications of SAFE notes for your specific situation.
                  </p>
                  
                  <a 
                    href="#faq" 
                    className="primary-button w-full block text-center"
                  >
                    View FAQ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section id="faq" className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get answers to common questions about SAFE notes and their implications for Indian startups.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="calculator-card">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  What is the difference between a SAFE note and convertible debt?
                </h3>
                <p className="text-gray-700">
                  While both are instruments for early-stage funding, SAFE notes are not debt instruments and don't have interest rates or maturity dates. Convertible notes are debt that converts to equity, while SAFEs are investment contracts that give rights to future equity without being debt.
                </p>
              </div>
              
              <div className="calculator-card">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  How does the valuation cap protect investors?
                </h3>
                <p className="text-gray-700">
                  A valuation cap sets the maximum valuation at which the SAFE investment will convert to equity, regardless of the actual valuation in the subsequent round. This protects early investors from excessive dilution if the company's valuation increases significantly before the next round.
                </p>
              </div>
              
              <div className="calculator-card">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Do SAFE notes have a maturity date?
                </h3>
                <p className="text-gray-700">
                  No, SAFE notes don't have maturity dates. They remain outstanding until a triggering event occurs, such as an equity financing round, acquisition, or IPO. This makes them more flexible than convertible notes, which typically have a maturity date.
                </p>
              </div>
              
              <div className="calculator-card">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  How are SAFE notes treated from a tax and accounting perspective in India?
                </h3>
                <p className="text-gray-700">
                  In India, SAFE notes are typically not considered debt and don't accrue interest, so they don't appear as liabilities on the balance sheet. They're usually classified as an "other equity instrument" until conversion. However, it's important to consult with a tax professional for specific guidance as regulations may vary.
                </p>
              </div>
              
              <div className="calculator-card">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  What happens to a SAFE if the company is acquired before the next equity round?
                </h3>
                <p className="text-gray-700">
                  If a company is acquired before the SAFE converts, investors typically have the option to receive their investment back or convert to equity at the cap valuation prior to the acquisition. The specific terms would be outlined in the SAFE agreement.
                </p>
              </div>
              
              <div className="calculator-card">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Can a startup issue multiple SAFE notes with different terms?
                </h3>
                <p className="text-gray-700">
                  Yes, a startup can issue multiple SAFE notes with different valuation caps, discount rates, or other terms. However, this can complicate the cap table and future funding rounds. Our calculator can help analyze the impact of multiple SAFE notes with different terms.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-4 bg-primary text-white">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-bold mb-6">
              Start Calculating Your SAFE Note Implications Today
            </h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Make informed decisions about your startup's funding and equity structure with our comprehensive SAFE Note Calculator.
            </p>
            <a 
              href="#calculator" 
              className="cta-button inline-block"
            >
              Try the Calculator Now
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
