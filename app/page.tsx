import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Chapters from '@/components/Chapters';
import Manifesto from '@/components/Manifesto';
import Letter from '@/components/Letter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Chapters />
      <Manifesto />
      <Letter />
      <Footer />
    </main>
  );
}
