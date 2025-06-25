
import { ArrowRight, Check } from 'lucide-react';

const CTA = () => {
  const benefits = [
    'No setup fees or hidden costs',
    '14-day free trial',
    'Cancel anytime',
    '24/7 customer support'
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Launch Your
          <span className="block">Dream Store?</span>
        </h2>
        
        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
          Join thousands of successful entrepreneurs who chose Shoply to build their online empire.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center justify-center sm:justify-start text-white">
              <Check className="h-5 w-5 text-green-300 mr-3 flex-shrink-0" />
              <span className="text-lg">{benefit}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-200 flex items-center group">
            Start Your Free Trial Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200">
            Schedule a Demo
          </button>
        </div>
        
        <p className="text-purple-200 text-sm mt-6">
          No credit card required • Setup in under 5 minutes
        </p>
      </div>
    </section>
  );
};

export default CTA;
