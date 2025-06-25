
import { NavBarDemo } from '@/components/ui/tubelight-navbar-demo';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavBarDemo />
      <Hero />
      <TrustedBy />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
