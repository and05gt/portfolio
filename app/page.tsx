import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectsSection from '@/components/ProjectsSection';
import StackSection from '@/components/StackSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-(--bg) text-(--content-primary) selection:bg-(--accent) selection:text-white overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <ProjectsSection />
        <StackSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
