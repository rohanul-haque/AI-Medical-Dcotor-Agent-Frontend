import About from "./_components/About";
import CTA from "./_components/CallToAction";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import HowItWorks from "./_components/HowItWorks";
import Navbar from "./_components/Navbar";
import Services from "./_components/Service";
import Testimonial from "./_components/Testimonial";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <Testimonial />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
