import AppLayout from "@/layout/AppLayout";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <AppLayout>
        <Hero />
      </AppLayout>
    </>
  );
};

export default Home;
