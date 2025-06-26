
import { Send, Shield, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

const FinpayFeatures = () => {
  const features = [
    {
      icon: Send,
      title: 'Free transfers',
      description: 'Make it to your account within the amount levels and instant transfers without the receiving payments.'
    },
    {
      icon: CreditCard,
      title: 'Multiple account',
      description: 'Keep all receipts organized and split multi-person and friends, travel between the exchanges.'
    },
    {
      icon: Shield,
      title: 'Unmatched security',
      description: 'We use bank-level security and encryption to keep your financial data safe and secure with the highest level.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Experience that grows
            <br />
            <span className="text-teal-600">with your scale.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Designed to build rapport to better help workflows for 
            your business with all the open recent build from 
            the ground up.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="text-center group"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-50 transition-colors"
              >
                <feature.icon className="h-8 w-8 text-gray-600 group-hover:text-teal-600 transition-colors" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FinpayFeatures;
