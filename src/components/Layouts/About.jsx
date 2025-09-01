import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      id="about"
      className="mx-auto max-w-[1240px] flex px-4 flex-col overflow-hidden pb-8"
    >
      <h1 data-aos="fade-up" className="text-5xl text-blue-500 font-bold mt-24">
        Tentang Kami
      </h1>
      <p data-aos="fade-up" className="mt-3 text-slate-600 text-xl">
        Kami percaya TechFix memberikan kepuasan pelanggan terbaik 100%.
      </p>
      <div
        data-aos="fade-up"
        className="w-[120px] bg-blue-500 h-1.5 rounded-lg mt-4"
      ></div>

      {/* konten utama */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between mt-8">
        {/* gambar */}
        <div
          data-aos="fade-up"
          className="w-full md:w-1/2 h-[250px] md:h-[400px] overflow-hidden rounded-lg"
        >
          <img
            src="./broken-phone.jpg"
            alt="Broken phone"
            className="object-cover w-full h-full"
          />
        </div>
        <div
          data-aos="fade-up"
          className="text-slate-500 text-lg w-full md:w-1/2 md:pl-5 mt-6 md:mt-0 "
        >
          TechFix adalah layanan terpercaya untuk perbaikan HP, gadget,
          komputer, serta pengembangan website. Dengan teknisi berpengalaman,
          kami memberikan servis cepat, harga transparan, dan garansi demi
          kepuasan Anda.
          <div className="flex flex-col sm:flex-row justify-center md:justify-start mt-10 gap-4">
            <div className="border-b-4 rounded border-b-blue-500 text-center w-[200px] h-[100px]">
              <h1 className="text-blue-500 font-bold text-5xl">1+</h1>
              <p>Tahun Pengalaman</p>
            </div>
            <div className="border-b-4 rounded border-b-blue-500 text-center w-[200px] h-[100px]">
              <h1 className="text-blue-500 font-bold text-5xl">10+</h1>
              <p>Pelanggan Puas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
