
import { NavBarDemo } from '@/components/ui/tubelight-navbar-demo';
import FinpayHero from '@/components/FinpayHero';
import FinpayFeatures from '@/components/FinpayFeatures';
import FinpayStats from '@/components/FinpayStats';
import FinpayPricing from '@/components/FinpayPricing';
import FinpayCTA from '@/components/FinpayCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavBarDemo />
      <FinpayHero />
      <FinpayFeatures />
      <FinpayStats />
      <FinpayPricing />
      <FinpayCTA />
      <Footer />
    </div>
  );
};

export default Index;
