import Header from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CertificationsSection from '@/components/CertificationsSection';
import NewsSection from '@/components/NewsSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <CertificationsSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
