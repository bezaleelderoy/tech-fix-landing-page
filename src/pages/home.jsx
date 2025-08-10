import Navbar from "../components/Layouts/Navbar";
import Hero from "../components/Layouts/Hero";
import About from "../components/Layouts/About";
import Founder from "../components/Layouts/Founder";
import Testimony from "../components/Layouts/Testimony";
import Faq from "../components/Layouts/Faq";
import Footer from "../components/Layouts/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Founder />
      <Testimony />
      <Faq />
      <Footer />
    </>
  );
};

export default HomePage;
