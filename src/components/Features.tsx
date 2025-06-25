
import { ShoppingCart, BarChart3, Palette, Shield, Zap, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: 'Easy Store Setup',
      description: 'Launch your online store in minutes with our intuitive drag-and-drop builder. No technical skills required.'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Get deep insights into your sales, customers, and inventory with our comprehensive analytics dashboard.'
    },
    {
      icon: Palette,
      title: 'Beautiful Templates',
      description: 'Choose from hundreds of professionally designed templates that look great on all devices.'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Bank-level security with 99.9% uptime guarantee. Your store and data are always protected.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed with global CDN. Your customers will love the fast loading times.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Multi-currency support, international shipping, and localization for global expansion.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Succeed Online
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to help you build, manage, and grow your ecommerce business effortlessly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
