import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import { FaChevronDown } from "react-icons/fa";

const Faq = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const questions = [
    {
      title: "Apa itu TechFix?",
      answer:
        "TechFix adalah layanan reparasi dan perawatan perangkat elektronik seperti smartphone, laptop, PC, dan gadget lainnya dengan teknisi berpengalaman.",
    },
    {
      title: "Perangkat apa saja yang bisa diperbaiki di TechFix?",
      answer: "Kami menerima perbaikan smartphone (Android & iPhone), laptop, komputer, tablet, hingga perangkat gaming.",
    },
    {
      title: "Berapa lama proses perbaikan biasanya?",
      answer:
        "Waktu perbaikan bervariasi tergantung jenis kerusakan. Perbaikan ringan biasanya selesai dalam 1–2 hari, sedangkan kerusakan berat bisa memakan waktu lebih lama.",
    },
    {
      title: "Apakah TechFix memberikan garansi?",
      answer: "Ya, setiap perbaikan di TechFix dilengkapi garansi hingga 30 hari sesuai jenis layanan.",
    },
    {
      title: "Apakah saya harus datang langsung ke lokasi?",
      answer: "Tidak selalu. TechFix menyediakan layanan antar-jemput perangkat (pickup & delivery) di area tertentu.",
    },
    {
      title: "Bagaimana cara mengetahui estimasi biaya perbaikan?",
      answer:
        "Anda bisa konsultasi gratis via chat/telepon. Setelah pengecekan, kami akan memberikan estimasi biaya sebelum perbaikan dilakukan.",
    },
    {
      title: "Apakah data pribadi di perangkat saya aman?",
      answer: "Ya, keamanan data pelanggan adalah prioritas kami. Kami tidak akan mengakses atau membagikan data pribadi tanpa izin.",
    },
    {
      title: "Bagaimana cara menghubungi TechFix?",
      answer: "Anda bisa menghubungi kami melalui WhatsApp, Instagram, Facebook, atau Email.",
    },
  ];

  return (
    <div className="mx-auto max-w-[1240px] flex px-4 flex-col overflow-hidden">
      <h1
        className="text-5xl text-blue-500 font-bold text-center mt-24"
        data-aos="fade-up"
      >
        Frequently Asked Questions
      </h1>

      <Accordion className="mt-10 w-full">
        {questions.map((question, key) => (
          <AccordionItem
            className="my-5"
            key={key}
            data-aos="fade-up"
            data-aos-delay={key * 100}
          >
            <AccordionHeader className="bg-slate-100 w-full flex items-center justify-between py-3 px-4 rounded-t-lg cursor-pointer transition hover:bg-slate-200">
              <h3 className="accordion-title font-medium">{question.title}</h3>
              <FaChevronDown className="transition-transform duration-300 group-aria-expanded:rotate-180" />
            </AccordionHeader>

            <AccordionBody className="overflow-hidden transition-all duration-500 ease-in-out bg-slate-100 mb-5 rounded-b-lg">
              <div className="accordion-body py-3 px-4 text-slate-600 opacity-100">
                {question.answer}
              </div>
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
