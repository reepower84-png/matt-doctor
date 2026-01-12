import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhyUsSection from '@/components/WhyUsSection';
import ProcessSection from '@/components/ProcessSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
