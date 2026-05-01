import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { FeaturedProducts } from "@/components/landing/FeaturedProducts";
import { Process } from "@/components/landing/Process";
import { WhyBosphoX } from "@/components/landing/WhyBosphoX";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <FeaturedProducts />
        <Process />
        <WhyBosphoX />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
