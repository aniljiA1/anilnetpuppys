import ScrollProgress from "@/components/animation/ScrollProgress";
import CustomCursor from "@/components/animation/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Sports from "@/components/sections/Sports";
import Rankings from "@/components/sections/Rankings";
import Testimonials from "@/components/sections/Testimonials";
import Enquiry from "@/components/sections/Enquiry";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Sports />
        <Rankings />
        <Testimonials />
        <Enquiry />
      </main>
      <Footer />
    </>
  );
}
