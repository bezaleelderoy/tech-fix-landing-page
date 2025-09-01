import Navbar from "../components/Layouts/Navbar";
import Hero from "../components/Layouts/Hero";
import Pros from "../components/Layouts/Pros";
import Founder from "../components/Layouts/Founder";
import Testimony from "../components/Layouts/Testimony";
import Faq from "../components/Layouts/Faq";
import Footer from "../components/Layouts/Footer";
import About from "../components/Layouts/About";
import Service from "../components/Layouts/Service";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Pros />
      <Founder />
      <Testimony />
      <Faq />
      <Footer />
    </>
  );
};

export default HomePage;
