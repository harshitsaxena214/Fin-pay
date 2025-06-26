
import { ArrowRight, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

const FinpayHero = () => {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                Get paid early
                <br />
                <span className="text-teal-600">save automatically</span>
                <br />
                all your pay.
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-600 mt-6 max-w-lg"
              >
                Up to two-day early access with wages backing, 
                powerful budgeting, and built-in investment tools.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <button className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-all duration-200 flex items-center group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center space-x-8 pt-8"
            >
              <div className="text-gray-400 text-sm font-medium">Trusted by</div>
              <div className="flex items-center space-x-6">
                <span className="font-semibold text-gray-600">Klarna.</span>
                <span className="font-semibold text-gray-600">coinbase</span>
                <span className="font-semibold text-gray-600">instacart</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl p-8 shadow-2xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-white rounded-2xl p-6 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Save Account</span>
                  <CreditCard className="h-6 w-6 text-teal-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">$1,676,580</div>
                <div className="bg-gray-900 text-white rounded-xl p-4 relative overflow-hidden">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-xs text-gray-400">****</div>
                      <div className="text-lg font-semibold">2574 **** ****</div>
                    </div>
                    <div className="text-white font-bold text-xl">VISA</div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Credit limit</span>
                    <span>$25,000</span>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full -mr-16 -mt-16"></div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Apple Store</span>
                    <span className="font-semibold">-$127</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Rent Advice</span>
                    <span className="font-semibold">-$250</span>
                  </div>
                </div>
                <div className="bg-gray-900 text-white rounded-lg py-3 text-center font-semibold">
                  Add money
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinpayHero;
