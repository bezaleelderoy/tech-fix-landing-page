import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const services = [
    {
      title: "Servis HP",
      desc: "Perbaikan berbagai merk smartphone dengan cepat dan bergaransi.",
    },
    {
      title: "Servis Komputer",
      desc: "Solusi untuk kerusakan hardware maupun software PC dan laptop.",
    },
    {
      title: "Upgrade OS",
      desc: "Update sistem operasi agar perangkat lebih aman dan optimal.",
    },
    {
      title: "Jasa Website",
      desc: "Pembuatan website profesional sesuai kebutuhan bisnis Anda.",
    },
    {
      title: "Perbaikan Gadget",
      desc: "Layanan perbaikan tablet, smartwatch, dan perangkat pintar lainnya.",
    },
    {
      title: "Konsultasi IT",
      desc: "Bantuan teknis dan konsultasi IT untuk bisnis maupun personal.",
    },
  ];

  return (
    <div id="services" className="mx-auto max-w-[1240px] px-4 py-20">
      <h2 className="text-4xl font-bold text-blue-500 text-center mb-6">
        Layanan Kami
      </h2>
      <p className="text-center text-slate-600 mb-12">
        Kami siap membantu segala kebutuhan teknologi Anda.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h3 className="text-xl font-semibold text-blue-500 mb-3">
              {service.title}
            </h3>
            <p className="text-slate-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
