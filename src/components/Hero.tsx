
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-6">
              ✨ Now available for everyone
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Build Your Dream
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Ecommerce Store
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            The most powerful and intuitive ecommerce platform. Launch your online store in minutes, 
            not months. No coding required.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-200 flex items-center group">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="flex items-center text-gray-700 hover:text-purple-600 px-6 py-4 rounded-lg text-lg font-medium transition-colors group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md mr-3 group-hover:shadow-lg transition-shadow">
                <Play className="h-5 w-5 text-purple-600 ml-1" />
              </div>
              Watch Demo
            </button>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-1 shadow-2xl">
              <div className="bg-white rounded-xl p-8">
                <div className="bg-gray-100 rounded-lg h-64 md:h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">S</span>
                    </div>
                    <p className="text-gray-500 text-lg">Beautiful Dashboard Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
