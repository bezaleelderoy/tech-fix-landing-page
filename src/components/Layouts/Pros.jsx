import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaHandPaper } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";

const Pros = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // animasi bisa muncul lagi kalau discroll
    });
  }, []);

  const items = [
    {
      icon: <BsFillLightningChargeFill />,
      text: "Perbaikan Cepat",
      sub: "Kalok Mamat yang servis.. behhh setengah jam udah jadi.",
    },
    {
      icon: <FaHandPaper />,
      text: "Garansi 90 Hari",
      sub: "Barang yang dibeli barang bagus jadinya aman sampai 90 hari!.",
    },
    {
      icon: <FaMoneyBillTransfer />,
      text: "Harga Transparan",
      sub: "Techfix cuma ngambil untung 50rb",
    },
  ];

  return (
    <div className="mx-auto max-w-[1240px] flex px-4 flex-col items-start py-20">
      <div
        className="bg-blue-500 bg-cover bg-center rounded-2xl w-full pb-12"
        style={{ backgroundImage: "url('./bg-reason.png')" }}
      >
        <h1
          className="text-center pt-12 text-white font-bold text-4xl"
          data-aos="fade-up"
        >
          Kenapa Harus Servis di TechFix?
        </h1>
        <p
          className="text-center pt-5 text-slate-200"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Temukan layanan terbaik dengan teknisi berpengalaman dan penggunaan
          suku cadang yang berkualitas
        </p>

        <div className="flex max-md:flex-col items-center justify-center">
          <div>
            {items.map((item, index) => (
              <div
                key={index}
                className={`flex items-center max-md:justify-center text-white py-7 my-2 ${
                  index !== items.length - 1
                    ? "border-b border-b-slate-300"
                    : ""
                } `}
                data-aos="fade-right"
                data-aos-delay={index * 200}
              >
                <div className="text-lg border-2 border-white rounded-[50%] px-4 py-4">
                  {item.icon}
                </div>
                <div className="ml-5 w-1/2">
                  <h1 className="text-lg font-medium">{item.text}</h1>
                  <p className="text-xs text-slate-200">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="md:ml-10 md:w-2/5 w-2/3"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <img
              loading="lazy"
              src="./about.webp"
              alt=""
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pros;
