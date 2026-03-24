import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';

export default function LandingPage() {
  return (
    <div className="w-full bg-white dark:bg-gray-900">
      <Hero />
      <Services />
      <Testimonials />
      <CTA />
    </div>
  );
}
