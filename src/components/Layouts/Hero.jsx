import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      id="home"
      className="mx-auto max-w-[1240px] flex max-md:flex-col items-center px-4 max-md:mt-[80px]"
    >
      <div data-aos="fade-up" className="w-[80%]">
        <h1 className="xl:text-5xl text-4xl font-bold text-slate-600 pb-3 md:mt-0 mt-10">
          Perbaiki Gadget Anda
        </h1>
        <h1 className="xl:text-5xl text-4xl font-bold text-slate-600">
          di{" "}
          <span className="font-extrabold bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-200 bg-clip-text text-transparent">
            TechFix
          </span>
        </h1>
        <p className="mt-2 text-slate-500 w-4/5">
          Layanan perbaikan ponsel, tablet, dan laptop dengan teknisi
          berpengalaman. Perbaikan cepat, harga transparan, dan garansi hingga
          90 hari.
        </p>
        <button className="text-blue-500 border border-blue-500 rounded-lg px-2 py-3 cursor-pointer mt-6">
          Konsultasi Gratis
        </button>
        <button className="bg-blue-500 text-white rounded-lg px-2 py-3 cursor-pointer mt-6 ml-2">
          Lebih Lanjut
        </button>
      </div>
      <div>
        <img
          data-aos="fade-up"
          src="./hero.webp"
          alt="Hero image"
          loading="lazy"
          className="w-[50rem] mx-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
