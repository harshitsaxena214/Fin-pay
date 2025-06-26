
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const FinpayCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-muted to-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to level up your
            <br />
            <span className="text-teal-600">payment process?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            From small accounts to unlimited seats and accounts that scale 
            with your business as you grow on-demand
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-all duration-200 flex items-center group">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="text-muted-foreground hover:text-foreground px-8 py-4 rounded-lg text-lg font-medium transition-colors">
              Learn more →
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="space-y-2">
            <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <ArrowRight className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-foreground">Open your account</h3>
            <p className="text-muted-foreground text-sm">
              Register with easy account steps and 
              start your own business right to all
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4 border border-border">
              <div className="w-6 h-6 bg-foreground rounded-full"></div>
            </div>
            <h3 className="font-semibold text-foreground">Transfer your money</h3>
            <p className="text-muted-foreground text-sm">
              Send money just with the application 
              through bank account and online activity
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4 border border-border">
              <div className="w-6 h-6 bg-teal-400 rounded-full"></div>
            </div>
            <h3 className="font-semibold text-foreground">Watch your balance grow</h3>
            <p className="text-muted-foreground text-sm">
              Get instantly your expense balance track 
              your spending with the account overview
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinpayCTA;
