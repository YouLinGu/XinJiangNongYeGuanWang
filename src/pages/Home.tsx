import { Hero } from '../components/Hero';
import { ValueProposition } from '../components/ValueProposition';
import { StatsSection } from '../components/StatsSection';
import { Products } from '../components/Products';
import { ParallaxSection } from '../components/ParallaxSection';
import { News } from '../components/News';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';

export function Home() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <StatsSection />
      <Products />
      <ParallaxSection />
      <News />
      <Testimonials />
      <Contact />
    </>
  );
}
