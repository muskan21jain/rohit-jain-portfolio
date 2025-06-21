import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import CaseStudySection from '@/components/case-study-section';
import ProfileSection from '@/components/profile-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <CaseStudySection />
        <ProfileSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
