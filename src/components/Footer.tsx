
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Product: ['Features', 'Pricing', 'Templates', 'Apps & Integrations'],
    Company: ['About Us', 'Careers', 'Press', 'Partners'],
    Resources: ['Blog', 'Help Center', 'Community', 'API Documentation'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR']
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-muted/30 text-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
                Finpay
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              The most powerful and intuitive payment platform. Build your financial future and grow your business with confidence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-teal-100 dark:hover:bg-teal-900/30 transition-colors border border-border"
                >
                  <social.icon className="h-5 w-5 text-muted-foreground hover:text-teal-600" />
                </a>
              ))}
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4 text-foreground">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Finpay. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            Made with ❤️ for entrepreneurs worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
