
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const FinpayPricing = () => {
  const stats = [
    { number: '24%', label: 'Financial business' },
    { number: '180K', label: 'Financial revenue' },
    { number: '10+', label: 'Months of runway' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            We've helped
            <br />
            <span className="text-teal-600">innovative companies</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We build for a data-rich world with hundreds of millions more people doing more every month than.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          <div className="bg-gray-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Plus</h3>
            <div className="text-4xl font-bold text-gray-900 mb-6">£2.99<span className="text-lg text-gray-600">/month</span></div>
            <button className="w-full bg-white text-gray-900 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center group">
              Get started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl p-8 text-white relative overflow-hidden"
          >
            <h3 className="text-2xl font-bold mb-6">Premium</h3>
            <div className="text-4xl font-bold mb-6">£6.99<span className="text-lg text-teal-100">/month</span></div>
            <button className="w-full bg-white text-teal-600 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center group">
              Get started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinpayPricing;
