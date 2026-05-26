import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
