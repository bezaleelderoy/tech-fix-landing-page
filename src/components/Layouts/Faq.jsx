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
      title: "Bagaimana cara kerja TechFix?",
      answer:
        "Hubungi Kita > Kita Dateng > Cek Barang > Kita Perbaiki > Kasih > Bayar",
    },
    {
      title: "Apakah ada alamat tetap?",
      answer: "Tidak. TechFix ada dimana saja",
    },
    {
      title: "Apakah data saya tidak akan hilang?",
      answer:
        "Tidak. Teknisi TechFix tau diri. Jika kita tidak mampu kita tidak akan ambil jobnya",
    },
    {
      title: "TechFix sampai mana saja?",
      answer: "Tergantung mood teknisi. paling jauh denpasar utara",
    },
    {
      title: "Barang yang dipakai ORI tidak?",
      answer: "Hmm gmn ya",
    },
    {
      title: "Ada garansi gak?",
      answer:
        "Ada. tenang aja kita bakal jual rugi klo misalnya anda tidak puas",
    },
    {
      title: "Kok sosmed techfix jarang aktif ya?",
      answer: "cc @henrigaming09",
    },
    {
      title: "Apakah TechFix buka loker magang?",
      answer: "Tidak",
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
